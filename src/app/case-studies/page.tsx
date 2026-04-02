import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES, CONTACT } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how Vision Hub delivers outsourcing and operational support for Carlcare and Transsion Holdings brands in Morocco.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-accent font-medium uppercase tracking-widest mb-4">Case Studies</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide leading-[1.1] text-primary uppercase">
              Proven execution with real clients.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              We partner with international brands to deliver structured operations in Morocco.
              Here&apos;s how we&apos;ve made it work.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {CASE_STUDIES.map((cs, i) => (
        <Section key={cs.slug} id={cs.slug} className={i % 2 === 0 ? "bg-surface-alt" : ""}>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <span className="text-accent font-bold text-lg">{cs.client.slice(0, 2).toUpperCase()}</span>
                </div>
                <h2 className="text-3xl font-semibold text-primary tracking-tight mb-2">
                  {cs.client}
                </h2>
                <p className="text-muted">{cs.parent}</p>
                <div className="mt-4 inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  {cs.industry}
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {cs.scope.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-surface border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-10">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">The Challenge</h3>
                <p className="text-muted leading-relaxed">{cs.challenge}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Our Solution</h3>
                <p className="text-muted leading-relaxed">{cs.solution}</p>
              </div>
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">The Outcome</h3>
                <p className="text-primary leading-relaxed font-medium">{cs.outcome}</p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <section className="bg-dark py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-wide uppercase">
            Ready to become our next success story?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            Let&apos;s discuss how Vision Hub can deliver results for your brand in Morocco.
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
