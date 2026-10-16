import React from "react";
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
} from "lucide-react";

// Icon mapping dictionary
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
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Features"
          title="Everything You Need to Manage Your Business"
          subtitle="Har zaroori feature ko bina kisi faltu complexity ke design kiya gaya hai, taaki aapka dhyan sirf vyapar badhane par rahe."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featuresData.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Boxes;
            const isHighlighted = feature.highlight;

            return (
              <div
                key={feature.id}
                className={`group p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isHighlighted
                    ? "bg-gradient-to-b from-white to-emerald-50/20 border-emerald-200/90 shadow-xs hover:border-emerald-400 hover:shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isHighlighted
                          ? "bg-emerald-100 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white"
                          : "bg-slate-100 text-slate-700 group-hover:bg-slate-800 group-hover:text-white"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 uppercase tracking-wide">
                      {feature.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-emerald-800 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                    {feature.hindiSubtitle}
                  </p>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-medium text-slate-400">
                  <span>Android Local-First</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
