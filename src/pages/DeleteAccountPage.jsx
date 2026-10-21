import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/common/SEOHead";
import { siteConfig } from "../config/siteConfig";
import { submitAccountDeletionRequest } from "../utils/formSubmit";
import {
  Trash2,
  ShieldAlert,
  Smartphone,
  Globe,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Mail,
  Send,
  HelpCircle,
} from "lucide-react";

const DELETION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "VyaPar Mitra Account & Data Deletion Portal",
  "description": "Official account and data deletion request portal for VyaPar Mitra Android app complying with Google Play Data Safety policies.",
  "url": "https://vyaparmitra.xyz/delete-account",
  "publisher": {
    "@type": "Organization",
    "name": "Vyapar Mitra",
    "url": "https://vyaparmitra.xyz",
    "email": "vyaparmitraapp@gmail.com",
  },
};

export default function DeleteAccountPage() {
  const [formData, setFormData] = useState({
    email: "",
    registeredBusinessName: "",
    reason: "",
    confirmation: false,
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setStatus({ submitting: false, submitted: false, error: "Please enter your registered email." });
      return;
    }
    if (!formData.confirmation) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please confirm that you understand this action permanently deletes your cloud account.",
      });
      return;
    }

    setStatus({ submitting: true, error: null, submitted: false });

    try {
      await submitAccountDeletionRequest(formData);
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ email: "", registeredBusinessName: "", reason: "", confirmation: false });
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: err.message || `Failed to submit request. Please email us directly at ${siteConfig.contact.email}.`,
      });
    }
  };

  return (
    <>
      <SEOHead
        title="Account &amp; Data Deletion | VyaPar Mitra"
        description="Official account and cloud data deletion page for VyaPar Mitra Android app. Request permanent deletion of your Firebase account and cloud backup records."
        canonicalPath="/delete-account"
        keywords="Vyapar Mitra delete account, Google Play account deletion, delete user data com.shadab.vyaparmitra, purge Firebase backup"
        schemaJson={DELETION_SCHEMA}
      />

      {/* Header Banner */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800">
            <Trash2 className="w-3.5 h-3.5" />
            <span>User Data Management</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Account &amp; Data Deletion
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Official deletion guidelines and request portal for the <strong>VyaPar Mitra</strong> Android application (<code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded text-slate-800">com.shadab.vyaparmitra</code>).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Important Notice */}
          <div className="bg-rose-50 border-l-4 border-rose-600 p-5 rounded-r-xl space-y-2 text-rose-950 text-sm">
            <div className="flex items-center gap-2 font-bold text-rose-900">
              <ShieldAlert className="w-5 h-5 text-rose-700 shrink-0" />
              <span>What Gets Deleted When You Delete Your Account</span>
            </div>
            <p className="leading-relaxed">
              When an account deletion is executed, your <strong>Firebase Authentication record</strong> and all <strong>Firestore Cloud Backup data</strong> (including backed-up products, categories, sales, purchases, customers, suppliers, expenses, returns, payment records, stock movements, and business settings) are permanently and irreversibly purged from our cloud servers.
            </p>
            <p className="text-xs text-rose-800">
              * Note: Because VyaPar Mitra operates with a local-first architecture, records saved on your physical Android phone remain on the device until you tap <em>"Reset Application Data"</em> in App Settings or uninstall the app.
            </p>
          </div>

          {/* Two Deletion Paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Method 1: In-App (Instant) */}
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Recommended • Instant
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    Delete Inside the Android App
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If you currently have the VyaPar Mitra app installed on your Android device, you can delete your account immediately without waiting:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
                  <li>Open the <strong>VyaPar Mitra</strong> app on your device.</li>
                  <li>Navigate to <strong>Profile</strong> (or <em>More</em> tab).</li>
                  <li>Tap on <strong>Security &amp; Account</strong>.</li>
                  <li>Scroll to the danger zone and tap <strong>"Delete Account Permanently"</strong>.</li>
                  <li>Confirm your password or re-authenticate via Google Sign-In.</li>
                </ol>
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600">
                  <span className="font-semibold text-emerald-800">Result:</span> Immediate cloud data purge and instant Firebase authentication deletion.
                </div>
              </div>
            </div>

            {/* Method 2: Web Form */}
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Web Request Portal
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    Request Deletion via Web
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If you have already uninstalled VyaPar Mitra or cannot access your Android device, submit a verified deletion request using the form below:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                  <li>Requires your registered VyaPar Mitra email address.</li>
                  <li>Processed within <strong>48 to 72 hours</strong>.</li>
                  <li>Confirmation receipt sent to your email upon completion.</li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href="#web-deletion-form"
                  className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800 gap-1"
                >
                  Jump to web deletion form <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Web Deletion Form Section */}
          <div id="web-deletion-form" className="pt-8 border-t border-slate-200">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8 space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">
                  Submit a Web Deletion Request
                </h2>
                <p className="text-sm text-slate-600">
                  Please provide the exact email address associated with your VyaPar Mitra account.
                </p>
              </div>

              {status.submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900">
                    Deletion Request Received
                  </h3>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    We have registered your deletion request. Our compliance team will verify your registered email and purge all associated Firebase cloud data within 48 to 72 hours.
                  </p>
                  <p className="text-xs text-emerald-700">
                    A confirmation message will be dispatched to your registered address once the deletion cycle completes.
                  </p>
                  <div className="pt-3">
                    <Link
                      to="/"
                      className="inline-flex items-center text-xs font-bold text-emerald-800 hover:underline"
                    >
                      Return to Homepage
                    </Link>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5"
                >
                  {status.error && (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="del-email"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                    >
                      Registered Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="del-email"
                      type="email"
                      required
                      placeholder="merchant@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      The Google or email/password address used to sign in to VyaPar Mitra.
                    </span>
                  </div>

                  <div>
                    <label
                      htmlFor="del-business"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                    >
                      Registered Business / Store Name (Optional)
                    </label>
                    <input
                      id="del-business"
                      type="text"
                      placeholder="e.g. Sharma Traders"
                      value={formData.registeredBusinessName}
                      onChange={(e) => setFormData({ ...formData, registeredBusinessName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="del-reason"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                    >
                      Reason for Deletion (Optional feedback)
                    </label>
                    <textarea
                      id="del-reason"
                      rows={3}
                      placeholder="Let us know how we can improve or why you are deleting..."
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    />
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.confirmation}
                        onChange={(e) => setFormData({ ...formData, confirmation: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-xs text-slate-700 leading-relaxed">
                        I understand that submitting this request will permanently delete my VyaPar Mitra user account and all cloud-stored backup collections from Firebase Firestore. This action cannot be reversed.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm transition-colors shadow-xs flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status.submitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Trash2 className="w-4 h-4" />
                        <span>Submit Permanent Deletion Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Direct Contact Support Box */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-700" />
                <span>Prefer to email directly?</span>
              </h4>
              <p className="text-xs text-slate-600">
                You can email our data protection team directly at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=VyaPar%20Mitra%20Account%20Deletion%20Request`}
                  className="font-semibold text-emerald-700 underline"
                >
                  {siteConfig.contact.email}
                </a>{" "}
                with your registered login details.
              </p>
            </div>
            <Link
              to="/privacy-policy"
              className="text-xs font-semibold text-slate-700 hover:text-emerald-800 shrink-0"
            >
              Review Privacy Policy →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
