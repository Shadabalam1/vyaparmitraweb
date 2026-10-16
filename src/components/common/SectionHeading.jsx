import React from "react";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  titleColor = "text-slate-900",
  className = "",
}) {
  const alignmentClasses = {
    center: "text-center mx-auto items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <div className={`max-w-3xl flex flex-col ${alignmentClasses[align]} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-50 text-emerald-800 border border-emerald-200/80 mb-3 shadow-2xs">
          {badge}
        </span>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${titleColor} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
