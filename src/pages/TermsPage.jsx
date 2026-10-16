import React from "react";
import SEOHead from "../components/common/SEOHead";
import { siteConfig } from "../config/siteConfig";

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms &amp; Conditions | Terms of Service"
        description="Terms and conditions governing the use of the Vyapar Mitra website (vyaparmitra.xyz) and the forthcoming Android application."
        canonicalPath="/terms"
      />

      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">
            Terms of Service
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: October 17, 2026 • Effective Date: October 17, 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 text-xs sm:text-sm text-amber-900 space-y-1">
            <p className="font-bold">
              Notice for Website Administrator / Legal Representative:
            </p>
            <p>
              These Terms and Conditions set forth standard guidelines for a business inventory utility application. Specific business registration, GSTIN, or legal entity names can be inserted in the designated brackets prior to the Google Play Store deployment.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website{" "}
                <a
                  href="https://vyaparmitra.xyz"
                  className="text-emerald-700 font-semibold"
                >
                  https://vyaparmitra.xyz
                </a>{" "}
                or downloading the Vyapar Mitra Android application upon its official release, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                2. Nature of the Service
              </h2>
              <p>
                Vyapar Mitra is an Android business utility designed to assist shopkeepers, retailers, and small business owners in organizing inventory, daily sales, purchase logs, operational expenses, and customer/supplier credit ledgers.
              </p>
              <p className="mt-2">
                Vyapar Mitra does not operate as a licensed banking institution, payment aggregator, or financial fiduciary. All tax calculations, invoices, and accounting decisions remain under the sole judgment and responsibility of the business owner.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                3. User Responsibilities &amp; Data Accuracy
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  You are responsible for ensuring the accuracy of product pricing, stock numbers, customer credit records, and ledger entries input into the application.
                </li>
                <li>
                  You agree to use the software solely for lawful commercial and business record-keeping activities.
                </li>
                <li>
                  You are solely responsible for creating appropriate offline backups of your device data to prevent accidental loss resulting from device damage, theft, or phone resets.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                4. Intellectual Property Rights
              </h2>
              <p>
                All brand names, trademarks, logos, graphical mockups, visual assets, and website codebase associated with "Vyapar Mitra" and vyaparmitra.xyz are the exclusive intellectual property of [Insert Entity Name / Developer]. Unauthorized reproduction, reverse engineering, or modification is prohibited without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                5. Limitation of Liability
              </h2>
              <p>
                Vyapar Mitra is provided on an "as is" and "as available" basis. To the maximum extent permitted under applicable law, the creators and operators of Vyapar Mitra shall not be liable for any indirect, incidental, or consequential damages resulting from lost sales, hardware malfunctions, data entry errors, or business disruptions.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                6. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising in connection with the application or website shall be subject to the exclusive jurisdiction of the competent courts in [Insert City / State, India].
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                7. Contact Information
              </h2>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-sm">
                <p>
                  <strong>Entity:</strong> [Insert Entity / Publisher Name]
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
