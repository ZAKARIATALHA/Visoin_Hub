"use client";

import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/motion";
import { LogoMark } from "@/components/ui/logo";
import { CONTACT } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(to right, #193856 1px, transparent 1px), linear-gradient(to bottom, #193856 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Brand star watermark */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 opacity-[0.04]">
        <LogoMark size={600} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Morocco-Based Outsourcing Partner
            </div>
          </FadeUp>

          <FadeUp delay={1}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold tracking-wide leading-[1.1] text-primary uppercase">
              Build and scale your operations in Morocco with a{" "}
              <span className="text-accent">trusted partner</span>.
            </h1>
          </FadeUp>

          <FadeUp delay={2}>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              Vision Hub helps international brands deploy customer support, field
              operations, and business teams with speed, structure, and local
              expertise.
            </p>
          </FadeUp>

          <FadeUp delay={3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href={CONTACT.bookingUrl} variant="primary">
                Book a Call
                <ArrowRight size={16} />
              </Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={4}>
            <p className="mt-12 text-sm text-muted-light">
              Official operations partner of{" "}
              <span className="text-accent font-medium">Transsion Holdings</span>{" "}
              in Morocco — Carlcare, Infinix, Tecno, Itel & Oraimo
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
