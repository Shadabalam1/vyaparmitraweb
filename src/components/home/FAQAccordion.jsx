import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { faqData } from "../../data/faqData";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ limit = null, showHeading = true }) {
  const [openIds, setOpenIds] = useState(["what-is-vyapar-mitra"]); // first item open by default

  const toggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const displayedFaqs = limit ? faqData.slice(0, limit) : faqData;

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Aam Taur Par Pooche Jaane Wale Sawal"
            subtitle="Vyapar Mitra ke baare mein zaroori jankari aur aapke sawalon ke seedhe aur sachhe jawab."
          />
        )}

        <div className="space-y-3.5">
          {displayedFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/70 border-emerald-300 shadow-2xs"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-600 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-emerald-100 text-emerald-800 rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
