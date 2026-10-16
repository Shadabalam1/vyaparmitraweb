import { useEffect } from "react";

export default function SEOHead({ title, description, canonicalPath = "" }) {
  useEffect(() => {
    // Update Title
    const baseTitle = "Vyapar Mitra";
    document.title = title ? `${title} | ${baseTitle}` : "Vyapar Mitra | Simple Business & Inventory Management App";

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const fullUrl = `https://vyaparmitra.xyz${canonicalPath}`;
      canonical.setAttribute("href", fullUrl);
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [title, description, canonicalPath]);

  return null;
}
