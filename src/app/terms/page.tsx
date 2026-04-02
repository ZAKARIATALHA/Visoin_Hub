import type { Metadata } from "next";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.name}`,
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-sm text-accent font-medium uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-4xl font-semibold tracking-tight text-primary mb-8">Terms of Service</h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted leading-relaxed">
          <p className="text-sm text-muted-light">Last updated: April 2026</p>

          <h2 className="text-xl font-semibold text-primary mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the {SITE.name} website, you agree to be bound by these Terms
            of Service and all applicable laws and regulations.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">2. Services</h2>
          <p>
            {SITE.name} provides outsourcing, operational support, and workforce management
            services. Specific service terms are defined in individual client agreements.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and design, is the
            property of {SITE.name} and is protected by applicable intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">4. Limitation of Liability</h2>
          <p>
            {SITE.name} shall not be liable for any indirect, incidental, or consequential
            damages arising from the use of this website or our services beyond what is specified
            in individual service agreements.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">5. Governing Law</h2>
          <p>
            These terms are governed by the laws of the Kingdom of Morocco. Any disputes shall be
            resolved in the courts of Casablanca, Morocco.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">6. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
              {CONTACT.email}
            </a>.
          </p>

          {/* ← Replace this placeholder with your actual terms reviewed by legal counsel */}
        </div>
      </div>
    </section>
  );
}
