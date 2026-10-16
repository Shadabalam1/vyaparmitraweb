import React from "react";
import { CheckCircle, Briefcase, WifiOff, Store } from "lucide-react";

export default function BenefitStrip() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Simple to Use",
      desc: "Designed for busy counters with zero technical complexity",
    },
    {
      icon: Briefcase,
      title: "Business Focused",
      desc: "Covers inventory, billing, expenses, and accounts in one place",
    },
    {
      icon: WifiOff,
      title: "Offline Friendly",
      desc: "Manage your business even when internet connectivity is limited",
    },
    {
      icon: Store,
      title: "Built for Small Businesses",
      desc: "Tailored for Indian shopkeepers, retailers, and local traders",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-6 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <IconComponent className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
