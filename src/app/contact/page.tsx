"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CONTACT, SERVICES } from "@/lib/constants";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-accent font-medium uppercase tracking-widest mb-4">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-primary">
              Let&apos;s talk about your operations.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              Whether you need a full outsourcing partner or want to explore how we can support a specific
              project, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      <Section className="bg-surface-alt">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-2xl border border-border p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-primary mb-2">Send us a message</h2>
              <p className="text-sm text-muted mb-8">
                Fill out the form below and we&apos;ll get back to you within one business day.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Message sent</h3>
                  <p className="text-muted">Thank you for reaching out. We&apos;ll be in touch shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-primary mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+212 XXXXXXXXX"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-primary mb-1.5">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    >
                      <option value="">Select a service (optional)</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project or requirements..."
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    Send Message <Send size={14} />
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Book a call */}
            <div className="bg-primary rounded-2xl p-8 text-white">
              <Calendar size={24} className="text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Book a Call</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Prefer a conversation? Schedule a call with our team to discuss your needs.
              </p>
              <Button href={CONTACT.bookingUrl} variant="accent" className="w-full">
                Schedule Meeting
              </Button>
              {/* ← Replace CONTACT.bookingUrl with your Calendly or booking link */}
            </div>

            {/* Direct contact */}
            <div className="bg-surface rounded-2xl border border-border p-8">
              <h3 className="text-lg font-semibold text-primary mb-5">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 group"
                >
                  <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors">Email</p>
                    <p className="text-sm text-muted">{CONTACT.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-start gap-3 group"
                >
                  <Phone size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors">Phone</p>
                    <p className="text-sm text-muted">{CONTACT.phone}</p>
                  </div>
                </a>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MessageCircle size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors">WhatsApp</p>
                    <p className="text-sm text-muted">{CONTACT.whatsapp}</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary">Office</p>
                    <p className="text-sm text-muted">{CONTACT.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
