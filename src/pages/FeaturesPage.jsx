import React, { useState } from "react";
import SEOHead from "../components/common/SEOHead";
import SectionHeading from "../components/common/SectionHeading";
import { featuresData } from "../data/featuresData";
import LaunchCTA from "../components/home/LaunchCTA";
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
  Filter,
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

const categories = ["All", "Inventory", "Sales", "Purchases", "Finance", "Ledger", "Overview", "Reliability"];

export default function FeaturesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFeatures =
    selectedCategory === "All"
      ? featuresData
      : featuresData.filter((f) => f.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Features & Capabilities | All In One Business Management"
        description="Explore all features of Vyapar Mitra: Inventory, Stock In/Out, Fast Sales, Expenses, Profit & Loss, Khatas and Offline local-first experience."
        canonicalPath="/features"
      />

      <div className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 mb-4">
            Feature Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Har Zaroori Feature, Bina Kisi Jhanjhat Ke
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Vyapar Mitra aapke chote vyapar ko smoothly chalane ke liye har practical tool pradaan karta hai.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-800 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((f) => {
              const Icon = iconMap[f.icon] || Boxes;
              return (
                <div
                  key={f.id}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 uppercase">
                        {f.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {f.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800 mt-1">
                      {f.hindiSubtitle}
                    </p>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {f.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Android Application</span>
                    <span className="text-emerald-700 font-semibold">Included</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <LaunchCTA />
    </>
  );
}
