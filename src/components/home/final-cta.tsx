"use client";

import { FadeUp } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Ready to build your operations<br className="hidden sm:block" /> in Morocco?
          </h2>
        </FadeUp>
        <FadeUp delay={1}>
          <p className="mt-5 text-lg text-white/60 max-w-2xl mx-auto">
            Let&apos;s discuss how Vision Hub can support your growth with the right
            team and execution model.
          </p>
        </FadeUp>
        <FadeUp delay={2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={CONTACT.bookingUrl} variant="accent">
              Book a Call <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
