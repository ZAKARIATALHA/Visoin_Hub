import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { OPEN_POSITIONS, CONTACT } from "@/lib/constants";
import {
  ArrowRight,
  MapPin,
  Clock,
  Building2,
  Users,
  TrendingUp,
  Heart,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Vision Hub — explore open positions and build your career with a growing outsourcing and operations company in Morocco.",
};

const whyJoin = [
  { icon: TrendingUp, title: "Growth Opportunities", desc: "Work with international brands and develop skills that matter in the global market." },
  { icon: Users, title: "Collaborative Culture", desc: "We value teamwork, clear communication, and mutual respect at every level." },
  { icon: Heart, title: "People First", desc: "We invest in our people through training, support, and fair working conditions." },
  { icon: GraduationCap, title: "Continuous Learning", desc: "Regular training programs and exposure to diverse industries and operational challenges." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-accent font-medium uppercase tracking-widest mb-4">Careers</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-primary">
              Build your career with Vision Hub.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              Join a growing team that works with international brands and delivers real operational
              impact across Morocco.
            </p>
          </div>
        </div>
      </section>

      {/* Why join */}
      <Section className="bg-surface-alt">
        <SectionHeader
          title="Why Join Vision Hub"
          subtitle="What makes us a great place to build your career."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyJoin.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface p-7">
              <item.icon size={24} className="text-accent mb-4" />
              <h3 className="text-base font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section id="positions">
        <SectionHeader
          title="Open Positions"
          subtitle="Current opportunities at Vision Hub."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {OPEN_POSITIONS.map((pos, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-surface p-6 md:p-8 hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary">{pos.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {pos.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {pos.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Building2 size={14} />
                      {pos.department}
                    </span>
                  </div>
                </div>
                <Button href="/contact" variant="secondary" className="shrink-0">
                  Apply <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-light mt-8">
          Don&apos;t see the right role? Send us your CV at{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
            {CONTACT.email}
          </a>
        </p>
      </Section>

      {/* CTA */}
      <section className="bg-dark py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Ready to join the team?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            We&apos;re always looking for talented, driven people who want to make an impact.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="accent">
              Get in Touch <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
