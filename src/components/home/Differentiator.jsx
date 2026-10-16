import React from "react";
import SectionHeading from "../common/SectionHeading";
import { Check, ShieldCheck, HeartHandshake, Zap, Sparkles, Smartphone } from "lucide-react";

export default function Differentiator() {
  const differentiators = [
    {
      title: "Easy to Understand",
      hindi: "Aasan aur Seedha Interface",
      desc: "No confusing accounting jargon, complex double-entry accounting setups, or steep learning curves. If you can use WhatsApp, you can easily use Vyapar Mitra.",
    },
    {
      title: "Designed Around Everyday Needs",
      hindi: "Rozana Ki Zarooraton Par Aadharit",
      desc: "Built directly around what a shopkeeper does every single day: recording sales, receiving stock, paying daily bills, and noting customer Udhaar.",
    },
    {
      title: "Focus on Inventory & Transactions",
      hindi: "Stock Aur Transaction Par Pura Dhyan",
      desc: "Prevents stock pilferage, eliminates guessing inventory values, and maintains clear transaction logs for complete peace of mind.",
    },
    {
      title: "Useful & Practical Dashboard",
      hindi: "Kaam Ka Dashboard",
      desc: "Only the numbers that actually matter to your business: today's sales tally, current stock valuation, low stock warnings, and pending balances.",
    },
    {
      title: "Offline / Local-First Experience",
      hindi: "Kam Internet Mein Bhi Chalta Hai",
      desc: "Manage your business even when internet connectivity is limited. Your core operations do not stall when mobile network drops.",
    },
    {
      title: "Practical for Small Businesses",
      hindi: "Chhote Vyapar Ke Liye Sahi Choice",
      desc: "Lightweight, reliable, and respectful of your phone's memory and storage. No enterprise bloat or useless features.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Vyapar Mitra"
          title="Simple Business Management, Without the Complexity."
          subtitle="Vyapar Mitra is crafted specifically to give small retailers clarity and control without overwhelming them with unnecessary enterprise software baggage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                  {item.hindi}
                </p>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-[10px] text-slate-500 font-medium">
                <span>Designed for Real Counters</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
