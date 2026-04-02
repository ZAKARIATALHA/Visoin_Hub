"use client";

import { FadeIn } from "@/components/ui/motion";

const subBrands = ["Carlcare", "Infinix", "Tecno", "Itel", "Oraimo"];

export function TrustStrip() {
  return (
    <section className="py-16 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-10">
            {/* Transsion Holdings — primary prominence */}
            <div className="inline-flex items-center justify-center h-16 px-10 bg-accent rounded-xl mb-4">
              {/* ← Replace with real Transsion Holdings logo in /public/logos/ */}
              <span className="text-lg font-bold text-white tracking-wide">TRANSSION HOLDINGS</span>
            </div>
            <p className="text-sm text-muted-light uppercase tracking-widest">
              Official operations partner in Morocco
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {/* ← Replace these divs with real <Image> components and logo files in /public/logos/ */}
            {subBrands.map((name) => (
              <div key={name} className="opacity-50 hover:opacity-100 transition-opacity">
                <div className="h-11 px-6 bg-muted-light/15 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted tracking-wide uppercase">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
