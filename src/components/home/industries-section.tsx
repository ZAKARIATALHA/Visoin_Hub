"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/lib/constants";
import { Car, Smartphone, Store, MapPin, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  car: Car,
  smartphone: Smartphone,
  store: Store,
  mapPin: MapPin,
};

export function IndustriesSection() {
  return (
    <Section className="bg-surface-alt">
      <SectionHeader
        title="Industries We Support"
        subtitle="Tailored operational models for sectors where execution quality matters most."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES.map((ind, i) => {
          const Icon = iconMap[ind.icon] || MapPin;
          return (
            <FadeUp key={ind.slug} delay={i}>
              <div className="bg-surface rounded-2xl border border-border p-7 hover:border-accent/30 hover:shadow-md transition-all duration-300 h-full">
                <Icon size={28} className="text-accent mb-4" />
                <h3 className="text-base font-semibold text-primary mb-2">
                  {ind.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </FadeUp>
          );
        })}
      </div>

      <FadeUp delay={4}>
        <div className="mt-12 text-center">
          <Button href="/industries" variant="secondary">
            Explore Industries <ArrowRight size={14} />
          </Button>
        </div>
      </FadeUp>
    </Section>
  );
}
