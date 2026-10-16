import React from "react";
import {
  Boxes,
  ShoppingCart,
  TrendingUp,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Receipt,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import PhoneMockup from "../mockups/PhoneMockup";

export default function FeatureHighlights() {
  return (
    <div className="space-y-16 sm:space-y-24 py-12 bg-slate-50/60 border-b border-slate-200/80">
      {/* Highlight 1: Inventory Control */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <Boxes className="w-3.5 h-3.5" />
              <span>Inventory Management</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Stock Ka Pura Control
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Dukan mein kitna maal bacha hai aur kaun sa item khatam hone wala hai—ab sab kuch aapki ungliyon par hoga. Stock In aur Stock Out ke zariye inventory hamesha updated rehti hai.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Live Available Stock</h4>
                  <p className="text-xs text-slate-600">Bina dukan ke shelf gine turant dekhein kitna packet bacha hai.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Low Stock Awareness</h4>
                  <p className="text-xs text-slate-600">Fast-selling items khatam hone se pehle alerts taaki koi grahak khali haath na laute.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Total Stock Value</h4>
                  <p className="text-xs text-slate-600">Dukan mein rakhe pure maal ki total keemat ek nazar mein samjhein.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[320px]">
              <PhoneMockup screenId="inventory" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlight 2: Sales & Purchases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Phone on left on desktop */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-[320px]">
              <PhoneMockup screenId="new-sale" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Sales &amp; Purchases</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Roz Ka Business, Ek Jagah
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Subah se sham tak counter par hone wali har bikri aur distributor se aane wale har invoice ka hisab aasan banayein. Har transaction par stock khud adjust hota hai.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Quick Counter Billing</h4>
                  <p className="text-xs text-slate-600">Cash, UPI aur Udhaar payments ko record karein aur clear digital bills banayein.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Distributor Purchase Record</h4>
                  <p className="text-xs text-slate-600">Wholesaler se aayi nayi purchase bills save karein aur pending baki manage karein.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Returns Management</h4>
                  <p className="text-xs text-slate-600">Grahak dwara wapas aaya maal ya supplier ko lautaaya gaya stock bina galti ke record karein.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight 3: Expenses & Profit */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Expenses &amp; Profit</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Business Ki Performance Samjhein
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Sirf bikri dekh kar vyapar ka sach pata nahi chalta. Vyapar Mitra aapki sales mein se kharidari aur dukan ke kharch hata kar asali shuddh munafa (Net Profit) dikhata hai.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Roz Ke Kharch Par Nazar</h4>
                  <p className="text-xs text-slate-600">Kiraya, bijli, chai-pani aur transport ke chote-mote kharch jo ginke bachaye ja sakein.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Profit &amp; Loss Clarity</h4>
                  <p className="text-xs text-slate-600">Din, hafte aur mahine ka accurate profit dekhein taaki sahi business decisions le sakein.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Customer Udhaar Khata</h4>
                  <p className="text-xs text-slate-600">Kaun se grahak par kitna udhaar baki hai, bina kisi purani bahi-khata diary ke.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[320px]">
              <PhoneMockup screenId="profit-loss" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlight 4: Dashboard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Phone on left on desktop */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-[320px]">
              <PhoneMockup screenId="dashboard" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Business Dashboard</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Important Numbers, Ek Nazar Mein
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Subah dukan kholte hi ya raat ko shatband karte waqt, aapko bas ek screen dekhni hai. Aaj ki bikri, pending udhaar, low stock aur recent bills sab ek hi jagah saamne rehte hain.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Real-Time Daily Sales</h4>
                  <p className="text-xs text-slate-600">Total bill count aur Cash vs Online UPI payments ka instant bifurcation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">One-Tap Quick Actions</h4>
                  <p className="text-xs text-slate-600">Dashboard se hi turant New Sale, Stock In ya naya kharch add karne ki suvidha.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Internet Worry</h4>
                  <p className="text-xs text-slate-600">Network kamzor ho ya gayab, dashboard aur entries offline chalti rahti hain.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
