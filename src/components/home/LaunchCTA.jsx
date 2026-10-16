import React, { useState } from "react";
import { siteConfig, PLAY_STORE_URL } from "../../config/siteConfig";
import PlayStoreButton from "../common/PlayStoreButton";
import { Bell, CheckCircle2, Smartphone, ShieldCheck } from "lucide-react";

import { submitLaunchNotify } from "../../utils/formSubmit";

export default function LaunchCTA() {
  const [notifyInput, setNotifyInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (notifyInput.trim()) {
      setIsSubmitting(true);
      try {
        await submitLaunchNotify(notifyInput.trim());
        setIsSubmitted(true);
        setNotifyInput("");
      } catch (err) {
        console.error("Notify notice:", err);
        setIsSubmitted(true);
        setNotifyInput("");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const isLive = Boolean(PLAY_STORE_URL && PLAY_STORE_URL.trim() !== "");

  return (
    <section id="launch-section" className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative subtle patterns */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 text-emerald-200 border border-emerald-700/80 text-xs font-semibold">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Android App Launch</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {isLive
            ? "Vyapar Mitra Is Live on Google Play"
            : "Vyapar Mitra Coming Soon on Google Play"}
        </h2>

        {/* Copy */}
        <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          {isLive
            ? "Abhi download karein aur apne vyapar ko digital aur simple banayein."
            : "Apne business ko manage karne ka simple tareeka jald hi Android par available hoga."}
        </p>

        {/* Dynamic CTA Button */}
        <div className="pt-2 flex justify-center">
          <PlayStoreButton
            variant="primary"
            size="lg"
            className="bg-white hover:bg-slate-100 text-slate-950 border-white shadow-xl hover:scale-105 transition-transform"
          />
        </div>

        {/* Notification form when coming soon */}
        {!isLive && (
          <div className="pt-6 max-w-md mx-auto">
            {isSubmitted ? (
              <div className="bg-emerald-800/60 border border-emerald-500/50 p-4 rounded-2xl flex items-center justify-center space-x-2 text-emerald-100 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Dhanyawad! App launch hote hi aapko alert mil jayega.</span>
              </div>
            ) : (
              <form
                name="launch-notify"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-2"
              >
                <input type="hidden" name="form-name" value="launch-notify" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <p className="text-xs text-emerald-200/80 mb-2 font-medium">
                  Launch alert paane ke liye apna Email ya WhatsApp number darj karein:
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    required
                    value={notifyInput}
                    onChange={(e) => setNotifyInput(e.target.value)}
                    placeholder="Enter Email or Mobile Number"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-emerald-500/30 text-white placeholder-emerald-300/60 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold shadow-md transition-colors shrink-0"
                  >
                    Notify Me
                  </button>
                </div>
                <p className="text-[11px] text-emerald-300/60 flex items-center justify-center space-x-1 mt-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>No spam ever. Sirf Google Play launch ka ek notification.</span>
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
