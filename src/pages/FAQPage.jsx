import React, { useState } from "react";
import SEOHead from "../components/common/SEOHead";
import { faqData } from "../data/faqData";
import { Search, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import LaunchCTA from "../components/home/LaunchCTA";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState(faqData.map((f) => f.id)); // All open on dedicated page or togglable

  const toggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="FAQ | Frequently Asked Questions & Help"
        description="Find clear and honest answers about Vyapar Mitra: inventory features, sales recording, expenses, profit tracking, offline functionality and Google Play launch."
        canonicalPath="/faq"
      />

      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">
            Support &amp; Answers
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Vyapar Mitra ke baare mein aapke aam sawalon ke poore aur satya jawab.
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search a question (e.g., offline, inventory, Play Store)..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-300 shadow-xs text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching questions found</h3>
              <p className="text-sm text-slate-500 mt-1">
                Try searching with a different keyword or contact our support team.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-4 px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-bold"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
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
            })
          )}

          {/* Contact prompt */}
          <div className="mt-12 bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-emerald-950">
                Have another question about Vyapar Mitra?
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 mt-1">
                Feel free to get in touch with our team directly.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl transition-colors shrink-0"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <LaunchCTA />
    </>
  );
}
