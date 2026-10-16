import React from "react";
import SEOHead from "../components/common/SEOHead";
import { siteConfig } from "../config/siteConfig";
import { Heart, Target, Shield, Compass, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us | Our Mission for Small Businesses"
        description="Learn about Vyapar Mitra: why we built a simple, practical Android business management app for Indian shopkeepers and retailers without enterprise complexity."
        canonicalPath="/about"
      />

      {/* Page Header */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">
            About Vyapar Mitra
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hamara Lakshya: Chhote Vyapar Ko Aasaan Banana
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Vyapar Mitra is built with the goal of making everyday business management simpler for small businesses, retailers, and local shopkeepers.
          </p>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Story & Purpose */}
          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-base sm:text-lg leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why We Built Vyapar Mitra
            </h2>
            <p>
              Most existing business and accounting software was designed for accountants, large corporations, or desks with expensive computer terminals. For a local shopkeeper or retailer sitting at a busy counter, this software often feels unnecessarily complicated, slow, and full of features they will never use.
            </p>
            <p>
              On the other end, many shopkeepers continue to rely on physical paper diaries and pocket calculators. While simple, paper records are easily lost, do not alert you when stock runs out, and leave you guessing about whether you actually made a net profit at the end of the month.
            </p>
            <p className="bg-emerald-50 border-l-4 border-emerald-700 p-5 rounded-r-xl text-emerald-950 font-medium">
              Vyapar Mitra bridges this exact gap: offering a clean, simple, and practical Android application focused entirely on the daily realities of running a store—inventory, counter sales, purchases, expenses, and customer ledgers.
            </p>
          </div>

          {/* Guiding Principles */}
          <div className="pt-8 border-t border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Our Guiding Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Practical Over Complex</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  We avoid unnecessary enterprise features. Every screen and button in Vyapar Mitra serves an everyday purpose for real retail counters.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Honesty &amp; Transparency</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  We believe in zero fake claims, clear data privacy, and realistic solutions that genuine shop owners can trust every single day.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Offline Resilience</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Indian markets face patchy mobile network conditions. Vyapar Mitra is designed with local-first functionality so your billing never stops.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Built for Indian Retail</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Designed around traditional concepts like Udhaar, Khata, Cash/UPI splits, and wholesale cartons that match Indian commerce.
                </p>
              </div>
            </div>
          </div>

          {/* Official Domain & Brand Note */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-3">
            <h4 className="text-lg font-bold text-emerald-300">
              Official Product Website
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              This website (<strong className="text-white">vyaparmitra.xyz</strong>) is the sole official web presence of Vyapar Mitra. The Android application is currently in final testing and will launch directly on the Google Play Store.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
