import React from "react";
import SectionHeading from "../common/SectionHeading";
import { howItWorksData } from "../../data/howItWorksData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Simple Workflow"
          title="Shuru Karna Hai Behadd Aasaan"
          subtitle="Koi training ya technical knowledge ki zaroorat nahi. Vyapar Mitra ko shuru karne ke liye bas ye simple steps follow karein."
        />

        <div className="relative">
          {/* Connecting line for desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-12 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {howItWorksData.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-emerald-800 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-700 mt-1">
                    {step.hindiSubtitle}
                  </p>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Simple Step</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
