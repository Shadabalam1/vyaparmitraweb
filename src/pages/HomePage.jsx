import React from "react";
import SEOHead from "../components/common/SEOHead";
import Hero from "../components/home/Hero";
import BenefitStrip from "../components/home/BenefitStrip";
import ProductExplanation from "../components/home/ProductExplanation";
import FeatureGrid from "../components/home/FeatureGrid";
import FeatureHighlights from "../components/home/FeatureHighlights";
import HowItWorks from "../components/home/HowItWorks";
import TargetAudience from "../components/home/TargetAudience";
import Differentiator from "../components/home/Differentiator";
import AppShowcase from "../components/home/AppShowcase";
import LaunchCTA from "../components/home/LaunchCTA";
import FAQAccordion from "../components/home/FAQAccordion";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Simple Business & Inventory Management App"
        description="Vyapar Mitra is a simple business management app for small businesses to manage inventory, sales, purchases, expenses, ledgers and business performance."
        canonicalPath=""
      />
      <Hero />
      <BenefitStrip />
      <ProductExplanation />
      <FeatureGrid />
      <FeatureHighlights />
      <HowItWorks />
      <TargetAudience />
      <Differentiator />
      <AppShowcase />
      <LaunchCTA />
      <FAQAccordion />
    </>
  );
}
