import React from "react";
import SEOHead from "../components/common/SEOHead";
import Hero from "../components/home/Hero";
import BenefitStrip from "../components/home/BenefitStrip";
import ProductExplanation from "../components/home/ProductExplanation";
import FeatureGrid from "../components/home/FeatureGrid";
import FeatureHighlights from "../components/home/FeatureHighlights";
import HisabSimulator from "../components/home/HisabSimulator";
import HowItWorks from "../components/home/HowItWorks";
import TargetAudience from "../components/home/TargetAudience";
import Differentiator from "../components/home/Differentiator";
import AppShowcase from "../components/home/AppShowcase";
import LaunchCTA from "../components/home/LaunchCTA";
import FAQAccordion from "../components/home/FAQAccordion";
import { faqData } from "../data/faqData";

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Simple Business &amp; Inventory Management App"
        description="Vyapar Mitra is an offline-first inventory management, billing POS, daily sales tracking, and ledger khata app built for Indian small businesses in Hyderabad, Telangana, and across India."
        canonicalPath=""
        keywords="Vyapar Mitra, business management app, billing app Android, inventory management app, Indian shopkeeper app, kirana store billing, stock in stock out, daily sales tracking, ledger khata, small business accounting India, Hyderabad business app, Adibatla Telangana, GST billing software Android"
        schemaJson={faqSchema}
      />
      <Hero />
      <BenefitStrip />
      <ProductExplanation />
      <FeatureGrid />
      <FeatureHighlights />
      <HisabSimulator />
      <HowItWorks />
      <TargetAudience />
      <Differentiator />
      <AppShowcase />
      <LaunchCTA />
      <FAQAccordion />
    </>
  );
}
