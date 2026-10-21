import React from "react";
import { CheckCircle2, Briefcase, WifiOff, Store, ShieldCheck, Zap, Receipt, Sparkles } from "lucide-react";

export default function BenefitStrip() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Simple & Intuitive",
      desc: "Zero accounting jargon, designed for busy counter operators",
      tag: "Easy POS",
    },
    {
      icon: Briefcase,
      title: "All-In-One Business",
      desc: "Stock, billing, expenses, customer ledger in one single app",
      tag: "Complete Suite",
    },
    {
      icon: WifiOff,
      title: "100% Offline Friendly",
      desc: "Bill customers even with no mobile network or Wi-Fi",
      tag: "Local-First",
    },
    {
      icon: Store,
      title: "Built For Indian MSMEs",
      desc: "Tailored for retail shops, kirana, wholesalers & traders",
      tag: "Indian Retail",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-6 sm:py-8 border-y border-slate-800 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-transparent to-emerald-950/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop / Tablet: Responsive Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/60 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-950/50 flex flex-col justify-between"
              >
                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-emerald-500/25 transition-all">
                    <IconComponent className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/40 flex items-center justify-between text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                  <span>{item.tag}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
