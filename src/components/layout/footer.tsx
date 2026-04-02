import Link from "next/link";
import { SITE, CONTACT, NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { LogoFull } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <LogoFull dark />
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              {SITE.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#customer-support" className="text-sm text-white/60 hover:text-accent transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/services#field-operations" className="text-sm text-white/60 hover:text-accent transition-colors">
                  Field Operations
                </Link>
              </li>
              <li>
                <Link href="/services#back-office" className="text-sm text-white/60 hover:text-accent transition-colors">
                  Back Office
                </Link>
              </li>
              <li>
                <Link href="/services#recruitment" className="text-sm text-white/60 hover:text-accent transition-colors">
                  Recruitment
                </Link>
              </li>
              <li>
                <Link href="/services#sales-support" className="text-sm text-white/60 hover:text-accent transition-colors">
                  Sales Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-accent shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-white/60 hover:text-accent transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-accent shrink-0" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-sm text-white/60 hover:text-accent transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="mt-0.5 text-accent shrink-0" />
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-accent transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-white/60">{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
