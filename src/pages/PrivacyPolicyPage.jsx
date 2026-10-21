import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/common/SEOHead";
import { siteConfig } from "../config/siteConfig";
import {
  ShieldCheck,
  Smartphone,
  Database,
  Cloud,
  Lock,
  CreditCard,
  UserCheck,
  FileText,
  AlertTriangle,
  Trash2,
  HelpCircle,
  ExternalLink,
  Printer,
  ChevronRight,
  Menu,
  X,
  Mail,
  Building,
  Check,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "information-we-collect", title: "2. Information We Collect" },
    { id: "how-we-use-information", title: "3. How We Use Information" },
    { id: "local-storage-and-offline-usage", title: "4. Local Storage and Offline Usage" },
    { id: "firebase-and-third-party-services", title: "5. Firebase & Third-Party Services" },
    { id: "google-sign-in", title: "6. Google Sign-In" },
    { id: "google-play-billing", title: "7. Google Play Billing & Subscriptions" },
    { id: "cloud-backup-and-restore", title: "8. Cloud Backup and Restore" },
    { id: "data-sharing", title: "9. Data Sharing & Third-Party Access" },
    { id: "data-security", title: "10. Data Security Measures" },
    { id: "data-retention", title: "11. Data Retention Periods" },
    { id: "account-and-data-deletion", title: "12. Account and Data Deletion" },
    { id: "your-rights-and-choices", title: "13. Your Rights & Data Choices" },
    { id: "childrens-privacy", title: "14. Children's Privacy" },
    { id: "changes-to-policy", title: "15. Changes to This Privacy Policy" },
    { id: "contact-us", title: "16. Contact Us & Grievance Redressal" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setMobileNavOpen(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "VyaPar Mitra Privacy Policy",
    "description": "Official Privacy Policy and Data Safety disclosures for VyaPar Mitra Android application (com.shadab.vyaparmitra).",
    "url": "https://vyaparmitra.xyz/privacy-policy",
    "publisher": {
      "@type": "Organization",
      "name": "Vyapar Mitra",
      "url": "https://vyaparmitra.xyz",
      "email": "vyaparmitraapp@gmail.com",
    },
  };

  return (
    <>
      <SEOHead
        title="Privacy Policy | VyaPar Mitra Official Google Play Policy"
        description="Official Privacy Policy for VyaPar Mitra Android app (com.shadab.vyaparmitra). Complete disclosures on local data storage, Firebase authentication, Firestore manual backup, and Google Play billing."
        canonicalPath="/privacy-policy"
        keywords="Vyapar Mitra privacy policy, Google Play data safety, com.shadab.vyaparmitra privacy, offline billing security, Firebase Firestore privacy India"
        schemaJson={privacySchema}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800 print:bg-white print:text-black print:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 print:hidden">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Google Play Compliance Document</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white print:text-slate-900">
              Privacy Policy
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed print:text-slate-700">
              This Privacy Policy explains how <strong>VyaPar Mitra</strong> ("we", "our", or "the application") processes, stores, and protects user information when you use our Android application (Package: <code className="bg-slate-800 text-emerald-400 px-2 py-0.5 rounded text-xs sm:text-sm font-mono border border-slate-700 print:bg-slate-100 print:text-slate-800 print:border-none">com.shadab.vyaparmitra</code>) and our official website (<a href="https://vyaparmitra.xyz" className="text-emerald-400 underline font-semibold hover:text-emerald-300">https://vyaparmitra.xyz</a>).
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 print:text-slate-600">
              <span><strong>Last Updated:</strong> October 21, 2026</span>
              <span>•</span>
              <span><strong>Effective Date:</strong> October 21, 2026</span>
              <span>•</span>
              <span><strong>Version:</strong> App 5.3.5.0+</span>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer print:hidden ml-auto"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Policy</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Table of Contents Sticky Bar */}
      <div className="lg:hidden sticky top-16 z-30 bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs print:hidden">
        <span className="font-semibold text-slate-700 truncate max-w-[240px]">
          {sections.find((s) => s.id === activeSection)?.title || "Table of Contents"}
        </span>
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-300 font-medium text-slate-700 shadow-2xs"
        >
          {mobileNavOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          <span>{mobileNavOpen ? "Close" : "Jump to Section"}</span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileNavOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 z-40 bg-white/95 backdrop-blur-md p-4 overflow-y-auto border-b border-slate-300 space-y-1 shadow-lg print:hidden">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 pb-2">
            Table of Contents
          </p>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                activeSection === section.id
                  ? "bg-emerald-50 text-emerald-900 font-bold border-l-4 border-emerald-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      )}

      {/* Core Policy Layout */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Desktop Sticky Table of Contents */}
            <aside className="hidden lg:block lg:col-span-4 print:hidden">
              <div className="sticky top-24 bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
                <div className="pb-3 border-b border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Policy Navigation
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Click to jump to any section
                  </p>
                </div>
                
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                        activeSection === section.id
                          ? "bg-emerald-700 text-white font-bold shadow-xs"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <span className="truncate">{section.title}</span>
                      {activeSection === section.id && (
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                      )}
                    </button>
                  ))}
                </nav>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <Link
                    to="/delete-account"
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-rose-50 text-rose-800 text-xs font-bold border border-rose-200 hover:bg-rose-100 transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                      Account Deletion Page
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/terms"
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 transition-colors"
                  >
                    <span>Terms &amp; Conditions</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Policy Document Body */}
            <main className="lg:col-span-8 space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">

              {/* 1. Introduction */}
              <article id="introduction" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Introduction
                  </h2>
                </div>
                <p>
                  Welcome to <strong>VyaPar Mitra</strong> ("we", "our", or "us"). VyaPar Mitra is an offline-first inventory control, point of sale (POS) billing, supplier/customer ledger, and business management application developed by <strong>Shadab Alam</strong> specifically for Indian retailers, micro, small, and medium businesses (MSMEs), distributors, and traders.
                </p>
                <p>
                  This Privacy Policy applies to the <strong>VyaPar Mitra Android Mobile Application</strong> (Package ID: <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-xs font-mono font-bold">com.shadab.vyaparmitra</code>) distributed via the Google Play Store, as well as our official web portal at <a href="https://vyaparmitra.xyz" className="text-emerald-700 font-semibold underline">https://vyaparmitra.xyz</a>.
                </p>
                <p>
                  We are deeply committed to transparent data practices. Because our software serves commercial merchants handling everyday billing and sensitive trade inventory, we operate on a strict <strong>local-first privacy model</strong>: your core trade books belong to you and reside on your local physical device, not on remote third-party ad networks.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1.5">
                  <p className="font-bold text-slate-900">Application Identity &amp; Scope:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Application Title:</strong> VyaPar Mitra</li>
                    <li><strong>Android Package Name:</strong> com.shadab.vyaparmitra</li>
                    <li><strong>Developer / Publisher:</strong> Shadab Alam</li>
                    <li><strong>Official Domain:</strong> https://vyaparmitra.xyz</li>
                    <li><strong>Official Support Email:</strong> vyaparmitraapp@gmail.com</li>
                    <li><strong>Registered Office / Address:</strong> Adibatla, Hyderabad, Telangana, India</li>
                  </ul>
                </div>
              </article>

              {/* 2. Information We Collect */}
              <article id="information-we-collect" className="scroll-mt-24 space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Information We Collect
                  </h2>
                </div>
                <p>
                  In compliance with Google Play's User Data policy, we only access and collect data necessary to provide core business management functionality. The data processed by VyaPar Mitra is classified into the following transparent categories:
                </p>

                {/* Subcategories */}
                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60 space-y-2">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
                      <UserCheck className="w-4 h-4 text-emerald-700" />
                      A. User Account &amp; Authentication Data
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      When you create an account to secure or back up your data, we process the following via Google Firebase Authentication:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
                      <li><strong>Email Address:</strong> Used for account identity, email verification, password reset links, and login.</li>
                      <li><strong>Firebase User ID (UID):</strong> A unique pseudonymous alphanumeric string generated by Firebase to associate your cloud backups exclusively with your account.</li>
                      <li><strong>Google Account Information (if signing in via Google):</strong> Your public display name, email address, and profile photo URI provided by Google OAuth. We do not access contacts, emails, or Google Drive files.</li>
                      <li><strong>Password Security:</strong> Passwords are encrypted directly through Firebase Authentication; VyaPar Mitra never stores or has access to your raw password.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60 space-y-2">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
                      <Building className="w-4 h-4 text-emerald-700" />
                      B. Business Profile &amp; Invoice Settings
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Information you voluntarily enter to brand and print your business invoices:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
                      <li><strong>Business Identity:</strong> Store/Business name, owner name, business trade type, physical address, business phone number, business email, and website.</li>
                      <li><strong>Tax &amp; Government Identifiers:</strong> GSTIN (Goods &amp; Services Tax Identification Number) and PAN (Permanent Account Number), used solely to format compliant tax invoices and bills.</li>
                      <li><strong>Invoice Formatting:</strong> Custom invoice prefix (e.g., <code>INV-</code>), sequential bill numbers, default tax rates (e.g., 18% GST), currency symbol (₹), invoice terms &amp; conditions, and custom footer notes.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60 space-y-2">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
                      <Database className="w-4 h-4 text-emerald-700" />
                      C. Operational Business Transaction Records (Local First)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Operational records that you enter directly to manage daily commerce:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
                      <li><strong>Products &amp; Categories:</strong> Product names, categories, brands, measurement units (Pcs, Kg, Ltr, etc.), purchase costs, selling prices, current stock quantities, low-stock thresholds, and item descriptions.</li>
                      <li><strong>Customer &amp; Supplier Parties:</strong> Party names, company names, contact phone numbers, email addresses, billing addresses, GST numbers, credit limits, and outstanding ledger balances.</li>
                      <li><strong>Sales &amp; POS Invoices:</strong> Invoice numbers, timestamps, customer references, line items, item quantities, discounts applied, tax calculations, total amounts, payment methods (Cash, UPI, Card, Bank Transfer, Credit/Udhaar), and payment status.</li>
                      <li><strong>Purchases &amp; Supplier Bills:</strong> Purchase order numbers, supplier references, goods acquired, costs, tax breakdown, and payment status.</li>
                      <li><strong>Business Expenses:</strong> Expense categories (Rent, Electricity, Salaries, Transport, Packaging, Maintenance, Marketing, Misc), titles, amounts, payment modes, and notes.</li>
                      <li><strong>Returns &amp; Stock Adjustments:</strong> Customer and purchase returns, refund amounts, defect reasons, stock additions (Stock In), deductions (Stock Out), and audit timestamps.</li>
                      <li><strong>Payment Records &amp; Ledgers:</strong> Receipts (inflows from customers), payments (outflows to suppliers), and payment ledger entries.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60 space-y-2">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
                      <CreditCard className="w-4 h-4 text-emerald-700" />
                      D. Subscription Entitlement Information
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      If you subscribe to a premium tier (PRO or BUSINESS), the app communicates with the <strong>Google Play Billing Client API</strong>. We receive:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
                      <li>Subscription Product ID (e.g. <code>vyapar_pro_monthly</code> or <code>vyapar_business_monthly</code>).</li>
                      <li>Obfuscated purchase token and Google Play transaction confirmation state.</li>
                      <li>Subscription active status and renewal/expiration timestamp.</li>
                    </ul>
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 mt-2">
                      <strong>Important Payment Disclosure:</strong> VyaPar Mitra does <em>NOT</em> process, collect, or store your credit card numbers, debit card numbers, CVVs, net banking passwords, or UPI PINs. All financial billing is handled exclusively by Google Play through your Google Account.
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60 space-y-2">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
                      <Smartphone className="w-4 h-4 text-emerald-700" />
                      E. Device Preferences &amp; Local Settings
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      We store user UI settings inside private local Android SharedPreferences:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
                      <li><strong>Theme Preference:</strong> System default, Light mode, or Dark mode.</li>
                      <li><strong>Language Selection:</strong> English or Hindi (via AndroidX <code>AppCompatDelegate</code>).</li>
                    </ul>
                  </div>
                </div>

                {/* Explicit "What We Do NOT Collect" Box */}
                <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-rose-900 text-sm sm:text-base">
                    <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0" />
                    <span>Explicit Verification: What VyaPar Mitra NEVER Collects</span>
                  </div>
                  <p className="leading-relaxed">
                    Based on our verified source code and AndroidManifest declaration (which requests solely <code className="bg-rose-100 text-rose-800 px-1 py-0.5 rounded">android.permission.INTERNET</code>):
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-medium">
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-rose-700" /> NO Device Location (GPS / Network)</div>
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-rose-700" /> NO Phone Contacts or Address Book</div>
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-rose-700" /> NO Device Camera or Microphone Access</div>
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-rose-700" /> NO Device Photo Gallery or Media Library</div>
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-rose-700" /> NO SMS, Call Logs, or Phone State Access</div>
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-rose-700" /> NO Advertising Identifiers (AAID)</div>
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-rose-700" /> NO Third-Party Behavioral Tracking SDKs</div>
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-rose-700" /> NO Automated Real-Time Background Tracking</div>
                  </div>
                </div>
              </article>

              {/* 3. How We Use Information */}
              <article id="how-we-use-information" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    How We Use Information
                  </h2>
                </div>
                <p>
                  We adhere to strict data minimization. Every data element collected or processed serves an explicit, legitimate business operation inside VyaPar Mitra:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">1. Core Inventory &amp; Stock Tracking</p>
                    <p className="text-slate-600">To calculate current stock balances, monitor minimum thresholds, and issue low-stock warnings.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">2. Billing &amp; Invoicing (POS)</p>
                    <p className="text-slate-600">To generate tax-compliant sales receipts, calculate line-item GST, discounts, and print bills.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">3. Party Ledgers &amp; Udhaar Khata</p>
                    <p className="text-slate-600">To track accounts receivable from customers and accounts payable to suppliers.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">4. Business Analytics &amp; Reports</p>
                    <p className="text-slate-600">To generate Profit &amp; Loss statements, expense breakdowns, and inventory valuation summaries on-device.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">5. Authentication &amp; Security</p>
                    <p className="text-slate-600">To authenticate your user identity securely, verify email addresses, and permit account recovery.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">6. Optional Manual Cloud Backup</p>
                    <p className="text-slate-600">To store an encrypted snapshot of your business database on Google Firestore when explicitly requested by you.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">7. Subscription Entitlement</p>
                    <p className="text-slate-600">To verify your active tier (BASIC, PRO, or BUSINESS) and unlock higher tier features via Google Play.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">8. Customer Assistance &amp; Support</p>
                    <p className="text-slate-600">To respond to troubleshooting requests and support inquiries directed to our official support mailbox.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic pt-1">
                  We do NOT use your data for automated profiling, third-party behavioral advertising, or data brokerage.
                </p>
              </article>

              {/* 4. Local Storage and Offline Usage */}
              <article id="local-storage-and-offline-usage" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Local Storage and Offline Usage
                  </h2>
                </div>
                <p>
                  VyaPar Mitra is engineered with an <strong>Offline / Local-First Architecture</strong>. This fundamental design decision ensures high reliability for shop owners operating in areas with unstable or intermittent internet connectivity:
                </p>
                <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-2xl space-y-3 text-emerald-950 text-xs sm:text-sm">
                  <h4 className="font-bold text-emerald-900 text-sm sm:text-base flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-emerald-700" />
                    How Local-First Architecture Protects Your Business:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>
                      <strong>Primary Storage on Your Physical Phone:</strong> All everyday products, daily sales, purchase bills, customer credit registers, expense entries, and business settings are written directly to an on-device SQLite database managed via Android's Room library (<code className="bg-white px-1.5 py-0.5 rounded border border-emerald-200">app_database</code>).
                    </li>
                    <li>
                      <strong>Full Offline Operational Capability:</strong> You do not need active mobile data or Wi-Fi to create invoices, record sales, calculate profit, or manage inventory. The app performs all computations locally on your device hardware.
                    </li>
                    <li>
                      <strong>Zero Forced Cloud Sync:</strong> Your business records remain exclusively on your phone unless you voluntarily decide to upload a backup to Firebase Cloud Storage.
                    </li>
                    <li>
                      <strong>On-Device File Generation:</strong> Invoices and purchase bills are formatted and rendered directly into PDF format on your device using Android's native <code>PdfDocument</code> API and shared via Android's secure <code>FileProvider</code>.
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-slate-600">
                  <strong>User Security Recommendation:</strong> Because your business books are stored locally inside your device's internal storage sandbox, we strongly urge users to protect their smartphone with a secure lock screen PIN, pattern, or biometric password to prevent physical unauthorized access.
                </p>
              </article>

              {/* 5. Firebase & Third-Party Services */}
              <article id="firebase-and-third-party-services" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Firebase &amp; Third-Party Services
                  </h2>
                </div>
                <p>
                  To provide secure identity authentication and optional cloud storage, VyaPar Mitra integrates specific Google developer SDKs. We do not integrate advertising networks or invasive tracking libraries. The third-party services utilized are:
                </p>

                <div className="space-y-3">
                  <div className="p-4 border border-slate-200 rounded-xl space-y-1.5 bg-slate-50">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">Google Firebase Authentication</span>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Authentication</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Handles email/password sign-up, email verification, password reset workflows, and secure token refresh. Firebase Authentication stores user identifiers, email addresses, and account creation dates under Google's cloud infrastructure.
                    </p>
                    <a
                      href="https://firebase.google.com/support/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-emerald-700 hover:underline"
                    >
                      Firebase Privacy and Security Documentation <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl space-y-1.5 bg-slate-50">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">Google Cloud Firestore</span>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Optional Cloud Backup</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Used solely as an encrypted cloud repository when you manually initiate a "Backup to Cloud" action. Data is stored under the document path <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-[11px]">users/{`{firebaseUid}`}/*</code> and is inaccessible to any other user.
                    </p>
                    <a
                      href="https://cloud.google.com/firestore/docs/security/get-started"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-emerald-700 hover:underline"
                    >
                      Firestore Security &amp; Rules Documentation <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-4 border border-slate-200 rounded-xl space-y-1.5 bg-slate-50">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">Google Play In-App Billing Library</span>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Billing &amp; Subscriptions</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Processes all subscription purchases and auto-renewals in full compliance with Google Play Developer Policy. Provides verification tokens to unlock PRO/BUSINESS entitlements without disclosing financial credentials.
                    </p>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-emerald-700 hover:underline"
                    >
                      Google Payments Privacy Notice <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>

              {/* 6. Google Sign-In */}
              <article id="google-sign-in" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    6
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Google Sign-In
                  </h2>
                </div>
                <p>
                  VyaPar Mitra provides Google Sign-In as an optional, secure, one-tap authentication method implemented via Android's official <strong>Credential Manager API</strong> (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">com.google.android.libraries.identity.googleid</code>):
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li>
                    <strong>Information Accessed:</strong> When you authenticate using Google Sign-In, the application only receives your basic public Google profile: your verified Google email address, display name, Google account ID, and profile picture URL.
                  </li>
                  <li>
                    <strong>No Unnecessary Scopes:</strong> We do NOT request or access sensitive Google scopes such as Google Drive, Gmail, Google Contacts, Google Calendar, or YouTube.
                  </li>
                  <li>
                    <strong>Purpose:</strong> Google Sign-In is used exclusively to verify your identity and generate a Firebase authentication token, enabling you to secure your account without remembering a separate password.
                  </li>
                </ul>
              </article>

              {/* 7. Google Play Billing & Subscriptions */}
              <article id="google-play-billing" className="scroll-mt-24 space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    7
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Google Play Billing &amp; Subscriptions
                  </h2>
                </div>
                <p>
                  VyaPar Mitra offers tiered subscription plans to cater to businesses of different sizes. All digital subscriptions are processed exclusively through <strong>Google Play Billing</strong>:
                </p>

                {/* Subscription Tiers Table */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                  <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">
                      Official VyaPar Mitra Subscription Plans
                    </span>
                    <span className="text-xs font-semibold text-emerald-700">Official In-App Tiers</span>
                  </div>
                  <div className="divide-y divide-slate-200 text-xs sm:text-sm">
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <span className="font-extrabold text-slate-900 text-base">BASIC Plan</span>
                        <p className="text-xs text-slate-500">Free Forever</p>
                      </div>
                      <div className="sm:col-span-2 text-slate-600 space-y-1">
                        <p className="font-semibold text-slate-800">₹0 / Free of Charge</p>
                        <p>Core local inventory, billing, POS, customer/supplier ledgers, payment tracking, and PDF receipts with starter limits (30 products, 10 categories, 300 sales/mo, 15 purchases/mo, 30 customers, 10 suppliers, 30 expenses/mo).</p>
                      </div>
                    </div>

                    <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-emerald-50/30">
                      <div>
                        <span className="font-extrabold text-emerald-900 text-base">PRO Plan</span>
                        <p className="text-xs text-emerald-700">For Growing Stores</p>
                      </div>
                      <div className="sm:col-span-2 text-slate-700 space-y-1">
                        <p className="font-bold text-emerald-800">₹49 / month</p>
                        <p>Expanded product catalog capacity, manual cloud backup &amp; restore, advanced profit/loss analytics, and custom invoice branding.</p>
                      </div>
                    </div>

                    <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <span className="font-extrabold text-slate-900 text-base">BUSINESS Plan</span>
                        <p className="text-xs text-slate-500">For Traders &amp; Wholesalers</p>
                      </div>
                      <div className="sm:col-span-2 text-slate-600 space-y-1">
                        <p className="font-bold text-slate-900">₹99 / month</p>
                        <p>Unlimited products, unlimited transactions, cloud backup, comprehensive audit logs, and priority merchant assistance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <p>
                    <strong>Subscription Management:</strong> Subscriptions automatically renew through your Google Play account unless cancelled at least 24 hours before the end of the billing cycle. You may manage, pause, or cancel your subscription at any time via the Google Play Store under <strong>Account → Payments &amp; Subscriptions → Subscriptions</strong>.
                  </p>
                  <p>
                    <strong>No External Payment Gateways:</strong> In accordance with Google Play's Payments Policy, digital in-app upgrades are billed strictly through Google Play's secure payment system.
                  </p>
                </div>
              </article>

              {/* 8. Cloud Backup and Restore */}
              <article id="cloud-backup-and-restore" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    8
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Cloud Backup and Restore
                  </h2>
                </div>
                <div className="p-4 bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl space-y-2 text-xs sm:text-sm">
                  <p className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-emerald-700" />
                    Important Distinction: Manual Backup vs. Real-Time Sync
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    VyaPar Mitra does <strong>NOT</strong> perform automatic, continuous, real-time background cloud synchronization. Cloud backup is entirely <strong>manual and user-initiated</strong>.
                  </p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li>
                    <strong>Initiating a Backup:</strong> When an authenticated user taps "Backup to Cloud" in the Profile or Settings screen, the app reads the local Room SQLite tables and writes a snapshot to Google Firestore under your private user document path (<code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">users/{`{uid}`}</code>).
                  </li>
                  <li>
                    <strong>Restoring Data:</strong> When an authenticated user taps "Restore from Cloud", the app queries your Firestore snapshot and restores the records to the local database on your device.
                  </li>
                  <li>
                    <strong>Local Offline Backup (JSON):</strong> In addition to cloud backup, VyaPar Mitra provides an entirely offline backup mechanism. You can export a local JSON backup file to your device storage or share it securely via Android FileProvider without any cloud transmission.
                  </li>
                  <li>
                    <strong>Backup Overwrites:</strong> Each manual cloud backup updates your existing cloud snapshot with the latest local records.
                  </li>
                </ul>
              </article>

              {/* 9. Data Sharing & Third-Party Access */}
              <article id="data-sharing" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    9
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Data Sharing &amp; Third-Party Access
                  </h2>
                </div>
                <p>
                  We treat your business and transaction records with absolute commercial confidentiality. We adhere to the following strict boundaries:
                </p>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">We Do NOT Sell Your Data</p>
                    <p className="text-slate-600">
                      VyaPar Mitra does not sell, rent, monetize, trade, or transfer your business transactions, customer databases, sales numbers, or inventory records to data brokers, ad networks, or commercial third parties.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">Infrastructure Service Providers</p>
                    <p className="text-slate-600">
                      Data is transmitted solely to Google Cloud (Firebase Authentication, Cloud Firestore, Google Play) as technical service providers necessary to operate user authentication, cloud backup, and subscription fulfillment.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">Legal Compliance &amp; Regulatory Obligations</p>
                    <p className="text-slate-600">
                      We may disclose user account information only if strictly compelled to do so by applicable Indian statutory law, a lawful court order, or an official governmental law enforcement request.
                    </p>
                  </div>
                </div>
              </article>

              {/* 10. Data Security Measures */}
              <article id="data-security" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    10
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Data Security Measures
                  </h2>
                </div>
                <p>
                  We implement reasonable, industry-standard administrative, physical, and technical safeguards to safeguard user data:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li>
                    <strong>Encrypted Data in Transit:</strong> All communications between the VyaPar Mitra Android app and Firebase/Google servers are encrypted in transit using Transport Layer Security (TLS/HTTPS).
                  </li>
                  <li>
                    <strong>Firestore Access Security Rules:</strong> Our Cloud Firestore database employs fine-grained security rules ensuring that cloud documents under <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">users/{`{userId}`}</code> can only be read or written by the authenticated user possessing that specific Firebase UID.
                  </li>
                  <li>
                    <strong>Android Application Sandboxing:</strong> Local Room database files and private SharedPreferences are stored in Android's protected internal app storage directory (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs">/data/data/com.shadab.vyaparmitra/</code>), isolated from other applications on non-rooted devices.
                  </li>
                  <li>
                    <strong>Realistic Security Standard:</strong> While we implement standard commercial measures, no electronic storage or network transmission is completely impenetrable. We do not make misleading claims of "military-grade" security.
                  </li>
                </ul>
              </article>

              {/* 11. Data Retention Periods */}
              <article id="data-retention" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    11
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Data Retention Periods
                  </h2>
                </div>
                <p>We retain data only as long as necessary to provide the service or fulfill user instructions:</p>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <strong>Local Data on Device:</strong> Stored persistently on your mobile device until you edit or delete records, execute <em>"Reset Application Data"</em> in App Settings, or uninstall the VyaPar Mitra application.
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <strong>Cloud Backup Data:</strong> Stored in Google Firestore under your account until you overwrite it with a new backup or permanently delete your account.
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <strong>Firebase Authentication Profile:</strong> Stored in Firebase Auth as long as your account remains active. Upon account deletion, the authentication profile is permanently purged.
                  </div>
                </div>
              </article>

              {/* 12. Account and Data Deletion (PROMINENT SECTION) */}
              <article id="account-and-data-deletion" className="scroll-mt-24 space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-rose-200">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-sm">
                    12
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Account and Data Deletion
                  </h2>
                </div>
                
                <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-5 sm:p-6 space-y-4 text-rose-950">
                  <div className="flex items-center gap-2.5 font-extrabold text-base sm:text-lg text-rose-900">
                    <Trash2 className="w-5 h-5 text-rose-700 shrink-0" />
                    <span>Your Right to Delete Account &amp; Associated Data</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    In compliance with Google Play's App Resource &amp; Account Deletion requirement, VyaPar Mitra provides a straightforward, accessible mechanism for users to delete their account and associated cloud data permanently.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Method 1 */}
                    <div className="bg-white p-4 rounded-xl border border-rose-200 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        Option 1: Inside the App (Instant)
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm">Immediate In-App Deletion</h4>
                      <ol className="list-decimal pl-4 space-y-1 text-xs text-slate-700">
                        <li>Open the <strong>VyaPar Mitra</strong> app.</li>
                        <li>Go to <strong>Profile</strong> &rarr; <strong>Security</strong>.</li>
                        <li>Tap <strong>"Delete Account Permanently"</strong>.</li>
                        <li>Confirm your password or re-authenticate via Google.</li>
                      </ol>
                      <p className="text-[11px] text-slate-500 pt-1">
                        * Triggers automated deletion of your Firebase user profile and purges all Firestore backup collections (products, sales, customers, suppliers, settings) immediately.
                      </p>
                    </div>

                    {/* Method 2 */}
                    <div className="bg-white p-4 rounded-xl border border-rose-200 space-y-2 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                          Option 2: Official Web Request
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm">Web Deletion Request Portal</h4>
                        <p className="text-xs text-slate-700">
                          If you have already uninstalled the application or cannot access your Android device, you can submit an official deletion request via our web portal:
                        </p>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="/delete-account"
                          className="inline-flex items-center justify-center w-full px-3 py-2 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs transition-colors shadow-2xs gap-1.5"
                        >
                          <span>Go to Official Deletion Page</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <p className="text-[10px] text-slate-500 text-center mt-1">
                          Direct URL: https://vyaparmitra.xyz/delete-account
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white/70 rounded-xl border border-rose-200 text-xs text-rose-900">
                    <strong>Local Data Cleanup:</strong> Account deletion deletes all cloud backups and Firebase records. To delete local records on your physical phone, tap <em>"Reset Application Data"</em> in App Settings or uninstall the app from your Android device.
                  </div>
                </div>
              </article>

              {/* 13. Your Rights & Data Choices */}
              <article id="your-rights-and-choices" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    13
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Your Rights &amp; Data Choices
                  </h2>
                </div>
                <p>You have full autonomy over your business information:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">Right to Access &amp; Export</p>
                    <p className="text-slate-600">You can export your database to an offline JSON file or export sales and inventory reports to CSV spreadsheets at any time.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">Right to Rectification</p>
                    <p className="text-slate-600">You can edit any product, category, invoice, expense, customer, or business setting directly inside the app.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">Right to Erase Records</p>
                    <p className="text-slate-600">You can delete individual products, sales, parties, or wipe all application data via Settings.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900">Right to Opt Out of Cloud</p>
                    <p className="text-slate-600">You can use VyaPar Mitra 100% offline without signing in or without ever tapping "Backup to Cloud".</p>
                  </div>
                </div>
              </article>

              {/* 14. Children's Privacy */}
              <article id="childrens-privacy" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    14
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Children's Privacy
                  </h2>
                </div>
                <p>
                  VyaPar Mitra is a professional commercial software tool designed exclusively for business operators, shop owners, retailers, traders, and adults managing commercial enterprises.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  The application is not directed at children under 18 years of age (or the minimum legal age in your jurisdiction). We do not knowingly solicit or collect personal data from children. If we discover that a minor has provided us with personal information, we will take immediate steps to delete such data from our servers.
                </p>
              </article>

              {/* 15. Changes to This Privacy Policy */}
              <article id="changes-to-policy" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    15
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Changes to This Privacy Policy
                  </h2>
                </div>
                <p>
                  We may periodically revise this Privacy Policy to reflect application updates, new feature releases, legal requirements, or Google Play policy updates.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Whenever modifications are made, the revised policy will be posted on this official page (<a href="https://vyaparmitra.xyz/privacy-policy" className="text-emerald-700 underline font-semibold">https://vyaparmitra.xyz/privacy-policy</a>) with an updated <strong>"Last Updated"</strong> timestamp at the top. We encourage merchants and users to review this policy periodically.
                </p>
              </article>

              {/* 16. Contact Us & Grievance Redressal */}
              <article id="contact-us" className="scroll-mt-24 space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    16
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Contact Us &amp; Grievance Redressal
                  </h2>
                </div>
                <p>
                  If you have questions, feedback, grievance inquiries, or privacy concerns regarding VyaPar Mitra, please reach out to us through our verified official communication channels:
                </p>

                {/* Verified Contact Card */}
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <span className="text-slate-500 font-medium">Application Name:</span>
                      <p className="font-bold text-slate-900">VyaPar Mitra</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-slate-500 font-medium">Android Package ID:</span>
                      <p className="font-mono font-bold text-slate-900">com.shadab.vyaparmitra</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-slate-500 font-medium">Developer &amp; Publisher:</span>
                      <p className="font-bold text-slate-900">Shadab Alam</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-slate-500 font-medium">Official Contact &amp; Support Email:</span>
                      <p>
                        <a
                          href="mailto:vyaparmitraapp@gmail.com"
                          className="font-bold text-emerald-700 underline"
                        >
                          vyaparmitraapp@gmail.com
                        </a>
                      </p>
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <span className="text-slate-500 font-medium">Physical Address / Registered Office:</span>
                      <p className="font-bold text-slate-900">Adibatla, Hyderabad, Telangana, India</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-slate-500 font-medium">Official Website:</span>
                      <p>
                        <a
                          href="https://vyaparmitra.xyz"
                          className="font-bold text-emerald-700 underline"
                        >
                          https://vyaparmitra.xyz
                        </a>
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-slate-500 font-medium">Account Deletion URL:</span>
                      <p>
                        <Link
                          to="/delete-account"
                          className="font-bold text-emerald-700 underline"
                        >
                          https://vyaparmitra.xyz/delete-account
                        </Link>
                      </p>
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <span className="text-slate-500 font-medium">Terms of Service URL:</span>
                      <p>
                        <Link
                          to="/terms"
                          className="font-bold text-emerald-700 underline"
                        >
                          https://vyaparmitra.xyz/terms
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
                    <span>Operating Country &amp; Legal Jurisdiction: Hyderabad, Telangana, India</span>
                    <Link
                      to="/contact"
                      className="font-semibold text-emerald-800 hover:underline"
                    >
                      Visit Web Contact Form &rarr;
                    </Link>
                  </div>
                </div>
              </article>

            </main>
          </div>
        </div>
      </section>
    </>
  );
}
