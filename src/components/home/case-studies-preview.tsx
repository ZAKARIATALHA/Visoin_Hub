"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function CaseStudiesPreview() {
  return (
    <Section>
      <SectionHeader
        title="Proven Execution with Real Clients"
        subtitle="We don't just promise results — here's how we've delivered."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {CASE_STUDIES.map((cs, i) => (
          <FadeUp key={cs.slug} delay={i}>
            <div className="group rounded-2xl border border-border bg-surface p-8 md:p-10 hover:shadow-lg hover:border-accent/20 transition-all duration-300 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {cs.client}
                  </h3>
                  <p className="text-sm text-muted mt-1">{cs.parent} &middot; {cs.industry}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="text-accent font-bold text-xs">{cs.client.slice(0, 2).toUpperCase()}</span>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Challenge</p>
                  <p className="text-sm text-muted leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Solution</p>
                  <p className="text-sm text-muted leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Outcome</p>
                  <p className="text-sm text-muted leading-relaxed">{cs.outcome}</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-2">
                {cs.scope.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-surface-alt text-muted border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={2}>
        <div className="mt-12 text-center">
          <Button href="/case-studies" variant="secondary">
            View All Case Studies <ArrowRight size={14} />
          </Button>
        </div>
      </FadeUp>
    </Section>
  );
}
