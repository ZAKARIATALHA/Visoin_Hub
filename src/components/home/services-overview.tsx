"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import {
  Headphones,
  MapPin,
  Database,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const icons = [Headphones, MapPin, Database, Users, TrendingUp];

export function ServicesOverview() {
  return (
    <Section className="bg-surface-alt">
      <SectionHeader
        title="What We Do"
        subtitle="End-to-end outsourcing and operational services designed for international brands operating in Morocco."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = icons[i];
          return (
            <FadeUp key={s.slug} delay={i}>
              <div className="group relative bg-surface rounded-2xl border border-border p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {s.short}
                </p>
                <div className="mt-5">
                  <Button
                    href={`/services#${s.slug}`}
                    variant="ghost"
                    className="!px-0 text-accent hover:text-accent-dark"
                  >
                    Learn more <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </Section>
  );
}
