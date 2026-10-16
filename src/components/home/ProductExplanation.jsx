import React from "react";
import SectionHeading from "../common/SectionHeading";
import { BookMarked, Calculator, Clock3, SmartphoneNfc } from "lucide-react";

export default function ProductExplanation() {
  const points = [
    {
      icon: BookMarked,
      title: "Purane Khaton Aur Diary Se Azaadi",
      desc: "Kagaz ke register kho jane ya fati dairy ka dar khatam. Stock, sales aur grahak ka udhaar sab kuch aapke mobile mein surakshit rehta hai.",
    },
    {
      icon: Calculator,
      title: "Calculator Par Ghanton Ka Hisab Band",
      desc: "Din ke ant mein calculator par ghanton hisab jodne ki zaroorat nahi. Vyapar Mitra aaj ki bikri, kharch aur bacha hua munafa khud dikhata hai.",
    },
    {
      icon: Clock3,
      title: "Dukan Ke Counter Par Tez Billing",
      desc: "Grahak ki bheed mein tez aur aasan entry. Cash, UPI ya Udhaar chun kar sirf kuch seconds mein entry complete karein.",
    },
    {
      icon: SmartphoneNfc,
      title: "Seedha Android Phone Par Kaam Kare",
      desc: "Bina kisi mehnge computer, barcode scanner ya mushkil software ke—ek aam Android phone par pura business sambhaliye.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Overview"
          title="Business Manage Karna Ab Aur Simple."
          subtitle="Vyapar Mitra ko khas taur par un dukaandaro aur chhote vyapariyon ke liye banaya gaya hai jo bina kisi mushkil software ke apni rozana ki bikri, stock, kharch aur accounts ko aasaani se sambhalna chahte hain."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:border-emerald-300 transition-all flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-emerald-800" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {pt.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {pt.desc}
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
