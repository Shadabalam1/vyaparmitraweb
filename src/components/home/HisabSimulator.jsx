import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { Calculator, Clock, TrendingUp, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function HisabSimulator() {
  const [dailyBills, setDailyBills] = useState(40);
  const [creditCustomers, setCreditCustomers] = useState(25);

  // Computed values
  const minutesSavedPerBill = 2.5; // ~2.5 mins saved compared to manual paper book
  const dailyHoursSaved = ((dailyBills * minutesSavedPerBill) / 60).toFixed(1);
  const monthlyHoursSaved = Math.round((dailyBills * minutesSavedPerBill * 26) / 60);
  const estimatedLedgerAccuracy = 100;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Savings Calculator
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            VyaPar Mitra Se Kitna Time &amp; Paisa Bachega?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Apni dukan ke anusaar sliders ko adjust karke dekhein ki har mahine aapka kitna keemti samay aur hisab bachega.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Controls Side */}
          <div className="lg:col-span-6 bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 space-y-7 shadow-xl backdrop-blur-sm">
            
            {/* Slider 1: Daily Bills */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="bills-slider" className="text-xs sm:text-sm font-bold text-slate-200">
                  Rozana Kitni Sales / Bills Hoti Hain?
                </label>
                <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 font-extrabold text-sm border border-emerald-500/30">
                  {dailyBills} Bills / Day
                </span>
              </div>
              <input
                id="bills-slider"
                type="range"
                min="10"
                max="200"
                step="5"
                value={dailyBills}
                onChange={(e) => setDailyBills(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>10 Bills</span>
                <span>100 Bills</span>
                <span>200+ Bills</span>
              </div>
            </div>

            {/* Slider 2: Credit Customers */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="credit-slider" className="text-xs sm:text-sm font-bold text-slate-200">
                  Kitne Grahakon Ka Udhaar / Khata Rehta Hai?
                </label>
                <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 font-extrabold text-sm border border-emerald-500/30">
                  {creditCustomers} Parties
                </span>
              </div>
              <input
                id="credit-slider"
                type="range"
                min="5"
                max="150"
                step="5"
                value={creditCustomers}
                onChange={(e) => setCreditCustomers(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>5 Parties</span>
                <span>75 Parties</span>
                <span>150+ Parties</span>
              </div>
            </div>

            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700 text-xs text-slate-300 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Har bill par calculator jodna band — automatic totals &amp; balance update!</span>
            </div>

          </div>

          {/* Results Side */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Metric 1 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/60 to-slate-800 border border-emerald-500/40 shadow-lg space-y-2 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                ~{monthlyHoursSaved} <span className="text-base sm:text-lg font-bold text-emerald-300">Hours</span>
              </span>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Har mahine hisab-kitab aur dairy milane mein bachenge.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-800/80 border border-slate-700 shadow-lg space-y-2 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <Calculator className="w-5 h-5" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                0%
              </span>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Hisab ki gadbadi aur calculation mistakes ka khatma.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-800/80 border border-slate-700 shadow-lg space-y-2 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                2x Tez
              </span>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Grahakon se udhaar vasooli bina kisi ladai ya confusion ke.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-800/80 border border-slate-700 shadow-lg space-y-2 hover-elevate">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                100%
              </span>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Offline aur local data privacy aapke phone mein surakshit.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
