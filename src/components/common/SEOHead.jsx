import { useEffect } from "react";

export default function SEOHead({
  title,
  description,
  canonicalPath = "",
  keywords = "",
  schemaJson = null,
}) {
  useEffect(() => {
    const baseTitle = "Vyapar Mitra";
    const fullTitle = title
      ? `${title} | ${baseTitle}`
      : "Vyapar Mitra | Simple Business & Inventory Management App";
    document.title = fullTitle;

    // Helper to safely set meta attribute
    const setMeta = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const [attrName, attrVal] = selector.replace("meta[", "").replace("]", "").split("=");
        element.setAttribute(attrName, attrVal.replace(/"/g, ""));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Update Meta Description
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }

    // Update Titles
    setMeta('meta[name="title"]', "content", fullTitle);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);

    // Update Keywords
    if (keywords) {
      setMeta('meta[name="keywords"]', "content", keywords);
    }

    // Update Canonical URL
    const fullUrl = `https://vyaparmitra.xyz${canonicalPath}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
    setMeta('meta[property="og:url"]', "content", fullUrl);
    setMeta('meta[name="twitter:url"]', "content", fullUrl);

    // Build BreadcrumbList schema for subpages
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vyaparmitra.xyz/",
      },
    ];

    if (canonicalPath && canonicalPath !== "/" && canonicalPath !== "") {
      const cleanTitle = title
        ? title.split("|")[0].replace(/&amp;/g, "&").trim()
        : canonicalPath.replace("/", "").replace(/-/g, " ");
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": cleanTitle,
        "item": fullUrl,
      });
    }

    const graphElements = [];
    if (breadcrumbItems.length > 1) {
      graphElements.push({
        "@type": "BreadcrumbList",
        "@id": `${fullUrl}#breadcrumb`,
        "itemListElement": breadcrumbItems,
      });
    }

    if (schemaJson) {
      if (schemaJson["@graph"] && Array.isArray(schemaJson["@graph"])) {
        graphElements.push(...schemaJson["@graph"]);
      } else {
        const { "@context": _ctx, ...rest } = schemaJson;
        graphElements.push(rest);
      }
    }

    // Dynamic Page Schema Script Injection
    let pageSchemaScript = document.getElementById("page-dynamic-schema");
    if (graphElements.length > 0) {
      if (!pageSchemaScript) {
        pageSchemaScript = document.createElement("script");
        pageSchemaScript.id = "page-dynamic-schema";
        pageSchemaScript.type = "application/ld+json";
        document.head.appendChild(pageSchemaScript);
      }
      pageSchemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": graphElements,
      });
    } else if (pageSchemaScript) {
      pageSchemaScript.remove();
    }

    return () => {
      const scriptToRemove = document.getElementById("page-dynamic-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonicalPath, keywords, schemaJson]);

  // Scroll to top ONLY on page navigation / route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [canonicalPath]);

  return null;
}
