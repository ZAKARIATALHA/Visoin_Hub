import { HeroSection } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { MetricsSection } from "@/components/home/metrics";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyVisionHub } from "@/components/home/why-vision-hub";
import { CaseStudiesPreview } from "@/components/home/case-studies-preview";
import { IndustriesSection } from "@/components/home/industries-section";
import { ProcessSection } from "@/components/home/process-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <MetricsSection />
      <ServicesOverview />
      <WhyVisionHub />
      <CaseStudiesPreview />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
