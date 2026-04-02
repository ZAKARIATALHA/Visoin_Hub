import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}`,
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-sm text-accent font-medium uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-4xl font-semibold tracking-tight text-primary mb-8">Privacy Policy</h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted leading-relaxed">
          <p className="text-sm text-muted-light">Last updated: April 2026</p>

          <h2 className="text-xl font-semibold text-primary mt-8">1. Introduction</h2>
          <p>
            {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to
            protecting your personal data. This privacy policy explains how we collect, use, and
            safeguard information when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Contact information (name, email, phone number, company name)</li>
            <li>Inquiry details submitted through our contact forms</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Usage data (pages visited, time spent on site)</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Improve our website and user experience</li>
            <li>Communicate with you about our services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">4. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, or destruction.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data. You may also
            withdraw consent for data processing at any time by contacting us.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">6. Contact</h2>
          <p>
            For any privacy-related inquiries, please contact us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
              {CONTACT.email}
            </a>.
          </p>

          {/* ← Replace this placeholder with your actual privacy policy reviewed by legal counsel */}
        </div>
      </div>
    </section>
  );
}
