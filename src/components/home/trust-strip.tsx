"use client";

import { FadeIn } from "@/components/ui/motion";

const brands = [
  { name: "CARLCARE", sub: "Transsion Holdings" },
  { name: "INFINIX", sub: null },
  { name: "TECNO", sub: null },
  { name: "ITEL", sub: null },
  { name: "ORAIMO", sub: null },
];

export function TrustStrip() {
  return (
    <section className="py-14 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn>
          <p className="text-center text-sm text-muted-light uppercase tracking-widest mb-10">
            Operating across Transsion Holdings brands in Morocco
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* ← Replace these divs with real <Image> components and logo files in /public/logos/ */}
            {brands.map((b) => (
              <div key={b.name} className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="h-12 w-32 bg-muted-light/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted tracking-wide">{b.name}</span>
                </div>
                {b.sub && <span className="text-xs text-muted-light">{b.sub}</span>}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
