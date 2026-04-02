"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <Section className="bg-surface-alt">
      <SectionHeader
        title="What Our Partners Say"
        subtitle="Feedback from the brands we've supported."
      />

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <FadeUp key={i} delay={i}>
            <div className="bg-surface rounded-2xl border border-border p-8 h-full flex flex-col">
              <Quote size={24} className="text-accent/30 mb-4" />
              <blockquote className="text-base text-primary leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-sm font-semibold text-primary">{t.author}</p>
                <p className="text-xs text-muted mt-0.5">{t.company}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
