import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { INDUSTRIES, CONTACT } from "@/lib/constants";
import { Car, Smartphone, Store, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Vision Hub serves automotive, consumer electronics, retail, and field services industries with tailored outsourcing solutions in Morocco.",
};

const iconMap: Record<string, React.ElementType> = {
  car: Car,
  smartphone: Smartphone,
  store: Store,
  mapPin: MapPin,
};

const industryDetails: Record<string, { capabilities: string[]; approach: string }> = {
  automotive: {
    capabilities: [
      "Showroom and dealership staffing",
      "Launch event coordination and activation",
      "After-sales support operations",
      "Customer experience management",
      "Field reporting and performance tracking",
    ],
    approach:
      "We understand the premium expectations of automotive brands. Our teams are trained on brand standards, product knowledge, and customer experience protocols specific to the automotive sector.",
  },
  "consumer-electronics": {
    capabilities: [
      "Customer service center staffing",
      "Retail product demonstration teams",
      "Service network field coordination",
      "Technical support and warranty processing",
      "Multi-city operational coverage",
    ],
    approach:
      "Electronics brands need consistent execution across multiple touchpoints. We build teams that handle everything from point-of-sale to after-sales, with structured QA and daily reporting.",
  },
  retail: {
    capabilities: [
      "In-store promotional staffing",
      "Brand ambassador deployment",
      "Merchandising and visual merchandising support",
      "Sales tracking and reporting",
      "Seasonal workforce scaling",
    ],
    approach:
      "Retail execution is about consistency and presence. We deploy trained staff who represent your brand at the shelf level, with clear KPIs and real-time performance visibility.",
  },
  "field-services": {
    capabilities: [
      "Distributed field team management",
      "Location-based data collection and audits",
      "Installation and maintenance crew coordination",
      "Route planning and logistics support",
      "Field performance analytics",
    ],
    approach:
      "Managing distributed teams requires discipline and systems. We provide the supervisory structure, tools, and reporting needed to keep field operations running smoothly across Morocco.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-accent font-medium uppercase tracking-widest mb-4">Industries</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide leading-[1.1] text-primary uppercase">
              Sector expertise that drives results.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              We adapt our outsourcing and operational model to the specific demands of each industry,
              delivering teams that understand your business context.
            </p>
          </div>
        </div>
      </section>

      {/* Industry sections */}
      {INDUSTRIES.map((ind, i) => {
        const Icon = iconMap[ind.icon] || MapPin;
        const details = industryDetails[ind.slug];
        const isAlt = i % 2 === 0;

        return (
          <Section key={ind.slug} id={ind.slug} className={isAlt ? "bg-surface-alt" : ""}>
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-primary tracking-tight">
                    {ind.name}
                  </h2>
                </div>
                <p className="text-muted leading-relaxed mb-8">{ind.description}</p>
                <p className="text-muted leading-relaxed">{details.approach}</p>
              </div>
              <div className="bg-surface rounded-2xl border border-border p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-5">
                  Our Capabilities
                </h3>
                <div className="space-y-3">
                  {details.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-muted leading-relaxed">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* CTA */}
      <section className="bg-dark py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-wide uppercase">
            Don&apos;t see your industry?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            Our operational model is adaptable. Talk to us about how we can support your specific sector.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={CONTACT.bookingUrl} variant="accent">
              Book a Call <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
