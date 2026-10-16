import React from "react";
import SectionHeading from "../common/SectionHeading";
import { businessTypesData } from "../../data/businessTypesData";
import {
  Store,
  Shirt,
  Smartphone,
  Wrench,
  Sparkles,
  ShoppingBag,
  Footprints,
  Building2,
  Info,
} from "lucide-react";

const iconMap = {
  Store,
  Shirt,
  Smartphone,
  Wrench,
  Sparkles,
  ShoppingBag,
  Footprints,
  Building2,
};

export default function TargetAudience() {
  return (
    <section id="who-is-it-for" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Target Users"
          title="Vyapar Mitra Kis Ke Liye Hai?"
          subtitle="Aap chahe kisi bhi product ya dukaan ka vyapar karte hon, Vyapar Mitra aapki daily operations ko aasan aur organized banata hai."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {businessTypesData.map((biz) => {
            const Icon = iconMap[biz.icon] || Store;
            return (
              <div
                key={biz.title}
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {biz.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {biz.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                    {biz.hindiName}
                  </p>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {biz.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear honest note: Not limited to these businesses */}
        <div className="mt-8 bg-white max-w-2xl mx-auto p-4 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center space-x-3 shadow-2xs">
          <Info className="w-4 h-4 text-emerald-700 shrink-0" />
          <p>
            <strong>Note:</strong> Yeh application kisi bhi aisi dukaan ya chote vyapar ke liye upyogi hai jahan stock, counter billing, kharch aur accounts ka hisab rakhna zaroori hota hai.
          </p>
        </div>
      </div>
    </section>
  );
}
