import React from "react";
import { PLAY_STORE_URL } from "../../config/siteConfig";

export default function PlayStoreButton({
  variant = "primary",
  size = "md",
  className = "",
  showSubtext = true,
  onClick = null,
}) {
  const isAvailable = Boolean(PLAY_STORE_URL && PLAY_STORE_URL.trim() !== "");

  // Base styling depending on variant
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 shadow-sm transition-all duration-200";
      case "emerald":
        return "bg-emerald-800 hover:bg-emerald-700 text-white border border-emerald-700 shadow-sm transition-all duration-200";
      case "outline":
        return "bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-xs transition-all duration-200";
      case "compact":
        return "bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs py-1.5 px-3 transition-all duration-200";
      default:
        return "bg-slate-900 hover:bg-slate-800 text-white";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-3.5 py-1.5 text-xs rounded-xl";
      case "lg":
        return "px-6 py-3.5 text-base rounded-2xl";
      case "md":
      default:
        return "px-4 py-2.5 text-sm rounded-xl";
    }
  };

  // Google Play Icon SVG
  const PlayIcon = () => (
    <svg
      className="w-5 h-5 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M3.609 1.814L13.793 12 3.61 22.186c-.37-.36-.61-.88-.61-1.46V3.274c0-.58.24-1.1.609-1.46z" fill="#00C1A6"/>
      <path d="M17.18 8.614l-3.387 3.386 3.387 3.386 3.82-2.19c1.09-.62 1.09-1.76 0-2.39l-3.82-2.192z" fill="#FFD400"/>
      <path d="M3.61 1.814L14.77 8.24 13.793 12 3.61 1.814z" fill="#00A0FF"/>
      <path d="M13.793 12l.977 3.76-11.16 6.426L13.793 12z" fill="#FF3A44"/>
    </svg>
  );

  // If live URL is available, render direct link
  if (isAvailable) {
    return (
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center space-x-3 font-semibold ${getVariantStyles()} ${getSizeStyles()} ${className}`}
      >
        <PlayIcon />
        <div className="text-left leading-tight">
          {showSubtext && (
            <span className="block text-[10px] uppercase tracking-wider opacity-80">
              GET IT ON
            </span>
          )}
          <span className="font-bold">Google Play</span>
        </div>
      </a>
    );
  }

  // When app is still coming soon (current development stage)
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else {
      // Smoothly navigate or highlight the coming soon badge
      const launchSection = document.getElementById("launch-section");
      if (launchSection) {
        launchSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title="Vyapar Mitra will be available on Google Play shortly"
      className={`inline-flex items-center space-x-3 font-medium cursor-pointer ${getVariantStyles()} ${getSizeStyles()} ${className}`}
    >
      <PlayIcon />
      <div className="text-left leading-tight">
        {showSubtext && (
          <span className="block text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
            Coming Soon
          </span>
        )}
        <span className="font-bold">Google Play</span>
      </div>
    </button>
  );
}
