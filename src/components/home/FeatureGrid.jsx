import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { featuresData } from "../../data/featuresData";
import {
  Boxes,
  ArrowDownToLine,
  ArrowUpFromLine,
  ShoppingCart,
  Truck,
  Receipt,
  TrendingUp,
  RotateCcw,
  BookOpen,
  BadgeIndianRupee,
  CalendarCheck,
  AlertTriangle,
  LayoutDashboard,
  WifiOff,
  Sparkles,
  Check,
} from "lucide-react";

const iconMap = {
  Boxes,
  ArrowDownToLine,
  ArrowUpFromLine,
  ShoppingCart,
  Truck,
  Receipt,
  TrendingUp,
  RotateCcw,
  BookOpen,
  BadgeIndianRupee,
  CalendarCheck,
  AlertTriangle,
  LayoutDashboard,
  WifiOff,
};

export default function FeatureGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Inventory", "Sales", "Finance", "Parties & Khata"];

  const filteredFeatures = featuresData.filter((feature) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Parties & Khata") {
      return (
        feature.category === "Parties" ||
        feature.category === "Accounts" ||
        feature.id.includes("ledger") ||
        feature.id.includes("customer") ||
        feature.id.includes("supplier")
      );
    }
    return feature.category === activeCategory;
  });

  return (
    <section id="features" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Features"
          title="Everything You Need to Manage Your Business"
          subtitle="Har zaroori feature ko bina kisi faltu complexity ke design kiya gaya hai, taaki aapka dhyan sirf vyapar badhane par rahe."
        />

        {/* Animated Filter Category Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/15 ring-2 ring-emerald-700/20 scale-[1.02]"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Responsive Grid with Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Boxes;
            const isHighlighted = feature.highlight;

            return (
              <div
                key={feature.id}
                className={`group p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover-elevate ${
                  isHighlighted
                    ? "bg-gradient-to-b from-white to-emerald-50/30 border-emerald-300/80 shadow-xs hover:border-emerald-500 hover:shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isHighlighted
                          ? "bg-emerald-700 text-white shadow-xs"
                          : "bg-emerald-50 border border-emerald-100 text-emerald-800"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {isHighlighted && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3 text-emerald-700" />
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-emerald-800 transition-colors">
                    {feature.title}
                  </h3>

                  {feature.hindiSubtitle && (
                    <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                      {feature.hindiSubtitle}
                    </p>
                  )}

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="capitalize">{feature.category || "Feature"}</span>
                  <span className="text-emerald-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
