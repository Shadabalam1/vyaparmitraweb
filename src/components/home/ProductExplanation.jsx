import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import {
  BookMarked,
  Calculator,
  Clock3,
  SmartphoneNfc,
  XCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ProductExplanation() {
  const [activeTab, setActiveTab] = useState("smart");

  const comparisons = [
    {
      problem: "Kagaz ke register kho jane ya barish mein bheeg jane ka darr",
      solution: "Sab kuch aapke Android phone mein 100% offline aur surakshit",
      tag: "Data Security",
    },
    {
      problem: "Raat ko dukan band karke calculator par ghanton hisab jodna",
      solution: "Aaj ki bikri, kharch aur net munafa khud ba khud 1 click mein",
      tag: "Auto P&L",
    },
    {
      problem: "Grahak se udhaar vasooli bhool jana ya hisab gadbad hona",
      solution: "Customer wise balance aur clear Udhaar Khata ledger",
      tag: "Udhaar Ledger",
    },
    {
      problem: "Counter par bheed hone par manual bill banane mein deri",
      solution: "Sirf 10 seconds mein quick sales bill aur instant PDF invoice",
      tag: "Fast POS",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/70 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Overview"
          title="Business Manage Karna Ab Aur Simple."
          subtitle="Vyapar Mitra ko khas taur par un dukaandaro aur chhote vyapariyon ke liye banaya gaya hai jo bina kisi mushkil software ke apni rozana ki bikri, stock, kharch aur accounts ko aasaani se sambhalna chahte hain."
        />

        {/* Interactive Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mt-8 sm:mt-12">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="group p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-emerald-100 text-emerald-900 border border-emerald-200">
                    {item.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Old way */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-xs sm:text-sm text-slate-700">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-rose-800 text-xs block mb-0.5">Purana Tarika:</span>
                    <span>{item.problem}</span>
                  </div>
                </div>

                {/* Vyapar Mitra way */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-900 text-xs block mb-0.5 flex items-center gap-1">
                      Vyapar Mitra Solution:
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                    </span>
                    <span className="font-medium text-slate-900">{item.solution}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
