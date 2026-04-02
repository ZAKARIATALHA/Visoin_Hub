import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SERVICES, CONTACT } from "@/lib/constants";
import {
  Headphones,
  MapPin,
  Database,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Vision Hub's outsourcing services: customer support, field operations, back office, recruitment, and sales support in Morocco.",
};

const icons = [Headphones, MapPin, Database, Users, TrendingUp];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-accent font-medium uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-primary">
              Outsourcing services built for execution.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              From customer support to field operations, we provide the teams, systems, and management
              that international brands need to operate effectively in Morocco.
            </p>
          </div>
        </div>
      </section>

      {/* Service navigation */}
      <div className="sticky top-[72px] z-30 bg-surface/95 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav className="flex overflow-x-auto gap-1 py-3 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-hide">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-muted hover:text-primary hover:bg-surface-alt rounded-lg transition-colors shrink-0"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Service details */}
      {SERVICES.map((s, i) => {
        const Icon = icons[i];
        const isAlt = i % 2 === 1;
        return (
          <Section key={s.slug} id={s.slug} className={isAlt ? "bg-surface-alt" : ""}>
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-primary tracking-tight">
                    {s.title}
                  </h2>
                </div>
                <p className="text-muted leading-relaxed mb-8">{s.description}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">Who It&apos;s For</h3>
                    <p className="text-sm text-muted leading-relaxed">{s.forWhom}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">How We Deliver</h3>
                    <p className="text-sm text-muted leading-relaxed">{s.delivery}</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-8 md:p-10 text-white">
                <h3 className="text-lg font-semibold mb-4">Expected Outcome</h3>
                <p className="text-white/70 leading-relaxed mb-6">{s.outcome}</p>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Fully managed by Vision Hub",
                      "Structured QA and reporting",
                      "Scalable team model",
                      "Fast deployment timeline",
                    ].map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-accent shrink-0" />
                        <span className="text-sm text-white/70">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* CTA */}
      <section className="bg-dark py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Need a custom solution?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            Every business is different. Let&apos;s discuss the right service model for your operations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={CONTACT.bookingUrl} variant="accent">
              Book a Call <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
