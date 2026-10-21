/**
 * Vyapar Mitra Central Configuration
 *
 * Configurable via .env environment variables:
 * - VITE_PLAY_STORE_URL: Live Google Play Store URL
 * - VITE_SITE_URL: Public website domain
 * - VITE_SUPPORT_EMAIL: Support & contact email
 */
export const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL || "";

export const siteConfig = {
  name: "Vyapar Mitra",
  tagline: "Manage Inventory | Grow Business",
  domain: import.meta.env.VITE_SITE_URL || "https://vyaparmitra.xyz",
  appStatus: import.meta.env.VITE_PLAY_STORE_URL ? "Available on Google Play" : "Coming Soon on Google Play",
  
  // Hero Copy
  hero: {
    headline: "Apne Business Ka Hisab, Ab Bilkul Aasaan.",
    subheadline: "Vyapar Mitra ke saath stock, sales, purchases, expenses aur business performance ko ek hi jagah manage karein.",
    primaryCtaText: "Explore Features",
    secondaryCtaFallback: "Coming Soon on Google Play",
  },

  // Contact Information
  contact: {
    email: import.meta.env.VITE_SUPPORT_EMAIL || "vyaparmitraapp@gmail.com",
    address: "Adibatla, Hyderabad, Telangana, India",
    location: "Adibatla, Hyderabad, India",
    helpHours: "Monday to Saturday, 9:00 AM - 7:00 PM IST",
    responseTime: "Usually responds within 24 hours",
  },

  // Navigation Links
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "About", path: "/about" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ],

  // Footer Navigation
  footerLinks: {
    product: [
      { label: "Overview", path: "/" },
      { label: "Features", path: "/features" },
      { label: "App Showcase", path: "/#showcase" },
      { label: "How It Works", path: "/#how-it-works" },
      { label: "Who Is It For", path: "/#who-is-it-for" },
    ],
    company: [
      { label: "About Us", path: "/about" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact Us", path: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms & Conditions", path: "/terms" },
      { label: "Account & Data Deletion", path: "/delete-account" },
    ],
  },

  // Official Social Media Handles
  socialLinks: [
    {
      name: "Instagram",
      handle: "@vyaparmitraapp",
      url: "https://www.instagram.com/vyaparmitraapp/",
    },
    {
      name: "Facebook",
      handle: "@vyaparmitraapp",
      url: "https://www.facebook.com/vyaparmitraapp",
    },
  ],
};
