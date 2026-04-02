"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import {
  Globe,
  Scale,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";

const points = [
  {
    icon: Globe,
    title: "Morocco-Based Hub for Global Brands",
    desc: "Strategically positioned to serve international companies entering or operating in Morocco, with deep local knowledge and market access.",
  },
  {
    icon: Scale,
    title: "Scalable & Structured Workforce",
    desc: "We build teams that grow with you — structured management, clear KPIs, and processes that support scaling without losing quality.",
  },
  {
    icon: Zap,
    title: "Fast & Flexible Deployment",
    desc: "From brief to boots-on-the-ground, we move quickly. Our recruitment pipeline and training systems are built for speed.",
  },
  {
    icon: Shield,
    title: "Strong Field Execution",
    desc: "Our teams are managed with discipline, daily reporting, and on-ground supervision — not just placed and forgotten.",
  },
  {
    icon: BarChart3,
    title: "Performance & Accountability",
    desc: "Every operation is tracked. We deliver regular reporting, QA reviews, and performance optimization so you always know where you stand.",
  },
];

export function WhyVisionHub() {
  return (
    <Section dark id="why-us">
      <SectionHeader
        title="Why Vision Hub"
        subtitle="What makes us the right outsourcing partner for your operations in Morocco."
        light
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <FadeUp key={p.title} delay={i}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/[0.08] transition-colors h-full">
              <p.icon size={24} className="text-accent mb-4" />
              <h3 className="text-base font-semibold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {p.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </Section>
  );
}
