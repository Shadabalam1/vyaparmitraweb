import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import PlayStoreButton from "./PlayStoreButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Clean shadow and border on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3"
          : "bg-white border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            to="/"
            className="flex items-center space-x-3 group focus:outline-hidden focus:ring-2 focus:ring-emerald-600 rounded-lg"
            aria-label="Vyapar Mitra Home"
          >
            <img
              src="/images/vyapar-mitra-logo-circle.jpg"
              alt="Vyapar Mitra Logo"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover shadow-xs border border-emerald-100 group-hover:scale-105 transition-transform"
              width="44"
              height="44"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors">
                Vyapar<span className="text-emerald-700">Mitra</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-tight -mt-1 hidden sm:block">
                Manage Inventory • Grow Business
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "text-emerald-800 bg-emerald-50 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1.5 animate-pulse"></span>
              Android App
            </span>
            <PlayStoreButton variant="compact" size="sm" showSubtext={false} />
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
              aria-expanded={isOpen}
              aria-label="Toggle mobile navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? "text-emerald-800 bg-emerald-50 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2.5">
            <div className="flex items-center space-x-2 text-xs text-slate-600 px-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>Android App Coming Soon on Google Play</span>
            </div>
            <PlayStoreButton variant="emerald" size="md" className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}
