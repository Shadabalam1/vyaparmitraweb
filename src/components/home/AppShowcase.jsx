import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { showcaseScreens } from "../../data/showcaseScreens";
import PhoneMockup from "../mockups/PhoneMockup";
import {
  LayoutDashboard,
  Boxes,
  ShoppingCart,
  Truck,
  Receipt,
  TrendingUp,
  BookOpen,
} from "lucide-react";

const screenIcons = {
  dashboard: LayoutDashboard,
  inventory: Boxes,
  "new-sale": ShoppingCart,
  purchase: Truck,
  expenses: Receipt,
  "profit-loss": TrendingUp,
  ledger: BookOpen,
};

export default function AppShowcase() {
  const [activeScreenId, setActiveScreenId] = useState("dashboard");

  const currentScreen =
    showcaseScreens.find((s) => s.id === activeScreenId) || showcaseScreens[0];

  return (
    <section id="showcase" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive Preview"
          title="Vyapar Mitra Ko Andar Se Dekhein"
          subtitle="Aapke phone ke liye banaya gaya ek saaf-suthra, aasan aur tez Android app. Niche diye screens par tap karke features ko dekhein."
        />

        {/* Screen Switcher Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar">
          {showcaseScreens.map((screen) => {
            const IconComponent = screenIcons[screen.id] || LayoutDashboard;
            const isActive = activeScreenId === screen.id;

            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreenId(screen.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-emerald-800 text-white shadow-sm ring-2 ring-emerald-700/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{screen.title}</span>
              </button>
            );
          })}
        </div>

        {/* Display Area: Active Info + Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
          {/* Left Column: Screen details */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
              {currentScreen.badge}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {currentScreen.title}
            </h3>

            <p className="text-base font-semibold text-emerald-800">
              {currentScreen.hindiTitle}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {currentScreen.subtitle}
            </p>

            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                * Note: Real screenshots can also be directly linked in{" "}
                <code className="text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                  src/data/showcaseScreens.js
                </code>
              </p>
            </div>
          </div>

          {/* Right Column: Phone Mockup Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[340px] transform transition-all duration-300">
              <PhoneMockup
                screenId={currentScreen.id}
                imageSrc={currentScreen.imageSrc}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
