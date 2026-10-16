import React from "react";
import SEOHead from "../components/common/SEOHead";
import { siteConfig } from "../config/siteConfig";
import { ShieldCheck, Lock, Eye, Server, RefreshCw } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Data Protection &amp; Security"
        description="Read the official Privacy Policy of Vyapar Mitra (vyaparmitra.xyz) explaining our local-first data architecture, information practices, and security principles."
        canonicalPath="/privacy-policy"
      />

      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">
            Legal &amp; Privacy
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: October 17, 2026 • Effective Date: October 17, 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Editable Notice Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 text-xs sm:text-sm text-amber-900 space-y-1">
            <p className="font-bold">
              Notice for Website Administrator / App Publisher:
            </p>
            <p>
              This privacy policy is structured specifically for Vyapar Mitra's local-first business management application and website. Sections indicated with brackets (e.g., <code className="bg-amber-100 px-1 py-0.5 rounded">[Insert Entity Legal Name]</code>) should be finalized before the Google Play Store public rollout.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                1. Introduction
              </h2>
              <p>
                Welcome to <strong>Vyapar Mitra</strong> (accessible via{" "}
                <a
                  href="https://vyaparmitra.xyz"
                  className="text-emerald-700 font-semibold"
                >
                  https://vyaparmitra.xyz
                </a>
                ). We are committed to protecting the privacy, confidentiality, and security of your business and personal data. This Privacy Policy explains how information is collected, stored, and managed when you visit our website or use the Vyapar Mitra Android application.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                2. Local-First Architecture &amp; Data Ownership
              </h2>
              <p>
                Vyapar Mitra is designed with an <strong>offline / local-first architecture</strong>. This means:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  Your everyday business transaction records—including stock inventories, daily sales, customer ledgers (Udhaar), purchase invoices, and expense notes—are stored primarily on your own Android mobile device.
                </li>
                <li>
                  You maintain full ownership and control over your business data.
                </li>
                <li>
                  We do not sell, rent, or trade your inventory data, customer contacts, or financial books to third-party advertisers or data brokers.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                3. Information We Collect
              </h2>
              <p>Depending on your interaction with Vyapar Mitra:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Website Interactions:</strong> If you voluntarily reach out via our contact form or sign up for launch notifications, we collect your name, email address, phone number (if provided), and message content.
                </li>
                <li>
                  <strong>Device Diagnostics:</strong> In the event of an application crash or technical error, standard non-identifying technical metadata (such as Android OS version and device model) may be logged through standard Google Play developer console mechanisms to troubleshoot bug fixes.
                </li>
                <li>
                  <strong>Local Business Records:</strong> Product names, prices, sale amounts, and ledger entries entered inside the Android app are stored locally for your business operational utility.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                4. How We Use Information
              </h2>
              <p>We use the minimal information collected solely to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Provide, maintain, and improve the features of Vyapar Mitra.</li>
                <li>Respond to support inquiries, feedback, or troubleshooting requests.</li>
                <li>Notify you when the Android application is officially published on Google Play (if you requested notification).</li>
                <li>Ensure compliance with applicable laws and maintain platform security.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                5. Data Security
              </h2>
              <p>
                We employ standard industry precautions to protect your data. However, because local business data resides on your smartphone, we encourage users to maintain secure device lock screens, PINs, or biometric security to prevent unauthorized access by third parties who may handle your mobile phone.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                6. Third-Party Services
              </h2>
              <p>
                Our website is hosted on modern infrastructure platforms (such as Netlify). The Android app will be distributed through the official Google Play Store. These platforms maintain their respective privacy practices governing hosting and app distribution.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                7. Changes to This Privacy Policy
              </h2>
              <p>
                We may revise this Privacy Policy from time to time as features expand or as necessary to comply with relevant legal standards. Any revisions will be reflected on this page with an updated "Effective Date."
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                8. Contact &amp; Grievance
              </h2>
              <p>
                For questions regarding this Privacy Policy or your data, you may reach out to:
              </p>
              <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-sm">
                <p>
                  <strong>Entity:</strong> [Insert Legal Business / Developer Entity Name]
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-emerald-700 underline font-semibold"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> [Insert Physical Address / Registered Office, India]
                </p>
                <p>
                  <strong>Official Website:</strong> https://vyaparmitra.xyz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
