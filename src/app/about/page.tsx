import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";
import {
  Target,
  Eye,
  Globe,
  GraduationCap,
  Building2,
  HandshakeIcon,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Vision Hub — a Morocco-based outsourcing and operational support partner helping international brands deploy and manage teams locally.",
};

const values = [
  { icon: Target, title: "Execution First", desc: "We measure ourselves by outcomes on the ground, not presentations." },
  { icon: HandshakeIcon, title: "Partnership Mindset", desc: "We integrate with your business, not just serve it from the outside." },
  { icon: Building2, title: "Structured Operations", desc: "Every team we deploy is backed by clear processes, reporting, and QA." },
  { icon: GraduationCap, title: "Investment in People", desc: "We recruit carefully and train thoroughly — our people represent your brand." },
];

const moroccoAdvantages = [
  "Strategic gateway between Europe, Middle East, and Africa",
  "Multilingual workforce — Arabic, French, English, and more",
  "Competitive operational costs with high-quality output",
  "Growing economy with strong infrastructure",
  "Government incentives for outsourcing and offshoring",
  "Cultural alignment with European and Middle Eastern business practices",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-accent font-medium uppercase tracking-widest mb-4">About Vision Hub</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-primary">
              Your operational partner in Morocco.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              Vision Hub was founded to bridge the gap between international brands and
              on-ground execution in Morocco. We provide the teams, structure, and local expertise
              that companies need to operate effectively in this market.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <Section className="bg-surface-alt">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-primary tracking-tight mb-6">Our Story</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Vision Hub started from a simple observation: international brands entering Morocco
                needed more than recruitment agencies. They needed a partner who could handle the full
                operational picture — from hiring and training to deployment, supervision, and performance tracking.
              </p>
              <p>
                Today, we work with brands like Carlcare (Transsion Group) and Geely, managing field operations,
                customer support teams, and operational execution across multiple cities in Morocco.
              </p>
              <p>
                Our approach is built on accountability, structured processes, and a deep understanding
                of what it takes to deliver consistently at the local level.
              </p>
            </div>
          </div>
          <div className="bg-primary rounded-2xl p-10 md:p-14 text-white">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Target size={20} className="text-accent" />
                  <h3 className="font-semibold text-lg">Mission</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  To enable international brands to build and scale reliable operations in Morocco through
                  structured outsourcing, strong local teams, and performance-driven execution.
                </p>
              </div>
              <div className="border-t border-white/10" />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Eye size={20} className="text-accent" />
                  <h3 className="font-semibold text-lg">Vision</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  To become the most trusted operational partner for international companies in Morocco —
                  known for execution quality, reliability, and measurable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          title="What Drives Us"
          subtitle="The principles behind how we work and what we deliver."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-surface p-7 hover:border-accent/30 transition-colors">
              <v.icon size={24} className="text-accent mb-4" />
              <h3 className="text-base font-semibold text-primary mb-2">{v.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Morocco */}
      <Section dark>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeader title="Why Morocco" subtitle="A strategic base for international operations." light center={false} />
            <div className="space-y-3">
              {moroccoAdvantages.map((adv) => (
                <div key={adv} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <p className="text-white/70 text-sm leading-relaxed">{adv}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
            <Globe size={48} className="text-accent mb-6" />
            <h3 className="text-xl font-semibold text-white mb-3">A Bridge Market</h3>
            <p className="text-white/60 leading-relaxed">
              Morocco sits at the crossroads of Europe, Africa, and the Middle East. Its multilingual
              talent pool, competitive costs, and modern infrastructure make it an ideal base for
              international companies looking to establish or expand operations in the region.
            </p>
          </div>
        </div>
      </Section>

      {/* Leadership placeholder */}
      <Section>
        <SectionHeader
          title="Leadership"
          subtitle="The management team behind Vision Hub's execution capability."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {[
            { name: "Founder & CEO", role: "Strategic direction and client partnerships" },
            { name: "Operations Director", role: "Team deployment and field operations" },
            { name: "HR & Recruitment Lead", role: "Talent acquisition and workforce management" },
          ].map((person, i) => (
            <div key={i} className="text-center">
              <div className="w-24 h-24 rounded-full bg-surface-alt border border-border mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-muted-light">👤</span>
              </div>
              {/* ← Replace with real names and photos */}
              <h3 className="text-base font-semibold text-primary">{person.name}</h3>
              <p className="text-sm text-muted mt-1">{person.role}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-light mt-8">
          {/* ← Replace placeholder names and add real headshots in /public/team/ */}
        </p>
      </Section>

      {/* CTA */}
      <section className="bg-dark py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Want to work with us?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            Let&apos;s explore how Vision Hub can support your operations in Morocco.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={CONTACT.bookingUrl} variant="accent">
              Book a Call <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
