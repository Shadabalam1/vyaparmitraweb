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
  Sparkles,
  CheckCircle2,
  ChevronRight,
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
    <section id="showcase" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive App Preview"
          title="VyaPar Mitra Ko Andar Se Dekhein"
          subtitle="Aapke Android phone ke liye banaya gaya ek saaf-suthra, aasan aur tez business app. Niche diye tabs par click karke actual screens dekhein."
        />

        {/* Screen Switcher Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-8 sm:mb-12 hide-scrollbar">
          {showcaseScreens.map((screen) => {
            const IconComponent = screenIcons[screen.id] || LayoutDashboard;
            const isActive = activeScreenId === screen.id;

            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreenId(screen.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/15 ring-2 ring-emerald-600/30 scale-[1.02]"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden">
          
          {/* Subtle accent border at top */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700" />

          {/* Left Column: Screen details */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              {currentScreen.badge}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {currentScreen.title}
            </h3>

            <p className="text-base sm:text-lg font-bold text-emerald-800">
              {currentScreen.hindiTitle}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {currentScreen.subtitle}
            </p>

            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-left">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">100% Offline Ready</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Fast 1-Tap Actions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[290px] xs:max-w-[310px] sm:max-w-[335px] transform transition-all duration-300 hover:scale-[1.01]">
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
