"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  return (
    <Section>
      <SectionHeader
        title="How We Work"
        subtitle="A structured approach from discovery to delivery — designed for clarity and speed."
      />

      <div className="relative">
        {/* Connecting line - desktop */}
        <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-border" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, i) => (
            <FadeUp key={step.step} delay={i}>
              <div className="relative text-center lg:text-center">
                <div className="relative z-10 mx-auto w-[72px] h-[72px] rounded-2xl bg-accent text-white flex items-center justify-center text-xl font-bold mb-5 shadow-lg font-heading">
                  {step.step.toString().padStart(2, "0")}
                </div>
                <h3 className="text-base font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </Section>
  );
}
