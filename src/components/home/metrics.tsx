"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { METRICS } from "@/lib/constants";

export function MetricsSection() {
  return (
    <Section>
      <SectionHeader
        title="Operational Impact"
        subtitle="Real numbers behind our execution capability."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {METRICS.map((m, i) => (
          <FadeUp key={m.label} delay={i}>
            <div className="text-center p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-accent tracking-tight">
                {m.value}
              </div>
              <p className="mt-3 text-sm text-muted leading-snug">{m.label}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
