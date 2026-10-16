import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, Smartphone, WifiOff } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import PlayStoreButton from "../common/PlayStoreButton";
import PhoneMockup from "../mockups/PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-emerald-200/30 to-emerald-100/20 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Launch Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-900 border border-emerald-300/60 text-xs font-semibold shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Android Business App • Coming Soon on Google Play</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {siteConfig.hero.headline}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteConfig.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-800 hover:bg-emerald-900 text-white shadow-md shadow-emerald-900/10 hover:shadow-lg transition-all group"
              >
                <span>{siteConfig.hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <PlayStoreButton
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center"
              />
            </div>

            {/* Trust & Honest Value Pillars */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Simple &amp; Practical</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                <WifiOff className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Offline Friendly</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-700 col-span-2 sm:col-span-1">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Private &amp; Local</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Fidelity Android App Showcase Preview */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Visual Backing Accent */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/10 via-emerald-100/30 to-transparent rounded-[50px] -z-10 blur-xl" />

            <div className="w-full max-w-[340px] transform transition-all duration-500 hover:scale-[1.01]">
              <PhoneMockup screenId="dashboard" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
