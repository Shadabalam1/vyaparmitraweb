import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";
import { ShieldCheck, Smartphone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column (2 cols wide on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group inline-block">
              <img
                src="/images/vyapar-mitra-logo-circle.jpg"
                alt="Vyapar Mitra Official Logo"
                className="h-11 w-11 rounded-full object-cover border border-emerald-500/30"
                width="44"
                height="44"
              />
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Vyapar<span className="text-emerald-400">Mitra</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A simple and practical business management application built for Indian shopkeepers, retailers, traders, and small business owners to manage inventory, daily sales, purchases, expenses, and ledgers effortlessly.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center space-x-2 text-xs text-emerald-400">
                <Smartphone className="w-4 h-4" />
                <span>Android Application • Coming Soon on Google Play</span>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center space-x-2 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://www.instagram.com/vyaparmitraapp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vyapar Mitra on Instagram"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-800 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700/60"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/vyaparmitraapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vyapar Mitra on Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-800 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700/60"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <span className="text-xs text-slate-400">@vyaparmitraapp</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Legal &amp; Trust
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Local-First Data Privacy</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Vyapar Mitra. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="text-slate-500">Official Domain: vyaparmitra.xyz</span>
            <span>•</span>
            <span className="text-slate-400">Built for Indian Small Businesses</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
