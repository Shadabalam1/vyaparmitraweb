import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Smartphone,
  WifiOff,
  TrendingUp,
  AlertTriangle,
  Zap,
  Lock,
} from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import PlayStoreButton from "../common/PlayStoreButton";
import PhoneMockup from "../mockups/PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white pt-6 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 border-b border-slate-100">
      {/* Animated ambient background glow meshes */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[650px] lg:w-[950px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-emerald-300/30 via-emerald-100/40 to-teal-200/20 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Launch Status Pill with animated ping indicator */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-950 border border-emerald-300/80 text-xs font-semibold shadow-xs hover:border-emerald-400 transition-colors">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Android Business App • Coming Soon on Google Play</span>
            </div>

            {/* Primary Headline with gradient accent */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.12]">
              Apne Business Ka Hisab, <br className="hidden sm:inline" />
              Ab <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-700">Bilkul Aasaan.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Vyapar Mitra ke saath stock inventory, sales billing, purchases, expenses aur udhaar khata ek hi aasan Android app mein manage karein. <strong>Bina internet ke bhi 100% chalta hai!</strong>
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm bg-emerald-800 hover:bg-emerald-900 text-white shadow-lg shadow-emerald-900/15 hover:shadow-xl hover:-translate-y-0.5 transition-all group cursor-pointer"
              >
                <span>{siteConfig.hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <PlayStoreButton
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center hover:-translate-y-0.5 transition-transform"
              />
            </div>

            {/* Live Trust Metrics Grid */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center space-x-2 p-2 rounded-xl bg-slate-50/80 border border-slate-200/60 hover-elevate">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                  <WifiOff className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">100% Offline</p>
                  <p className="text-[10px] text-slate-500">No internet needed</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded-xl bg-slate-50/80 border border-slate-200/60 hover-elevate">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">10 Sec Billing</p>
                  <p className="text-[10px] text-slate-500">Fast POS invoice</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded-xl bg-slate-50/80 border border-slate-200/60 hover-elevate">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Local Privacy</p>
                  <p className="text-[10px] text-slate-500">Data stays on device</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded-xl bg-slate-50/80 border border-slate-200/60 hover-elevate">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                  <Smartphone className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Simple App</p>
                  <p className="text-[10px] text-slate-500">Zero tech skills</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High Fidelity Android Phone Preview with Floating Stat Chips */}
          <div className="lg:col-span-5 flex justify-center relative mt-4 lg:mt-0">
            
            {/* Visual Backing Accent with glowing blur */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-emerald-500/15 via-teal-200/25 to-transparent rounded-[50px] -z-10 blur-2xl" />

            {/* Floating Live Badge 1: Sales Metric (Top Left) */}
            <div className="hidden sm:flex absolute -top-3 -left-8 xl:-left-12 z-30 animate-float-slow items-center gap-2.5 px-3.5 py-2.5 rounded-2xl glass-pill border border-emerald-200/80 shadow-lg text-xs">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-slate-900 text-xs">₹34,850</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">+18%</span>
                </div>
                <p className="text-[10px] text-slate-500">Today's Sales (24 Bills)</p>
              </div>
            </div>

            {/* Floating Live Badge 2: Stock Alert (Bottom Right) */}
            <div className="hidden sm:flex absolute -bottom-4 -right-6 xl:-right-10 z-30 animate-float-delayed items-center gap-2.5 px-3.5 py-2.5 rounded-2xl glass-pill border border-amber-200/80 shadow-lg text-xs">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-slate-900 text-xs">Stock Alert</p>
                <p className="text-[10px] text-amber-700 font-medium">3 items running low</p>
              </div>
            </div>

            {/* Floating Live Badge 3: 100% Offline (Top Right) */}
            <div className="absolute top-4 right-1 sm:-right-4 z-30 items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 text-white shadow-md text-[11px] font-semibold border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Offline Ready</span>
            </div>

            {/* The Interactive Phone Mockup */}
            <div className="w-full max-w-[290px] xs:max-w-[310px] sm:max-w-[335px] transform transition-all duration-500 hover:scale-[1.02] hover:-rotate-0.5">
              <PhoneMockup screenId="dashboard" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
