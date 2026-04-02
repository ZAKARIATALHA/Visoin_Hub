"use client";

import { FadeIn } from "@/components/ui/motion";

export function TrustStrip() {
  return (
    <section className="py-14 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <p className="text-center text-sm text-muted-light uppercase tracking-widest mb-10">
            Supporting global brands across customer experience, field execution, and operational scaling
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {/* Carlcare / Transsion logo placeholder */}
            <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <div className="h-12 w-40 bg-muted-light/20 rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-muted tracking-wide">CARLCARE</span>
              </div>
              <span className="text-xs text-muted-light">Transsion Group</span>
            </div>

            {/* Geely logo placeholder */}
            <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <div className="h-12 w-40 bg-muted-light/20 rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-muted tracking-wide">GEELY</span>
              </div>
              <span className="text-xs text-muted-light">Geely Auto</span>
            </div>

            {/* ← Replace these divs with real <Image> components and logo files in /public/logos/ */}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
