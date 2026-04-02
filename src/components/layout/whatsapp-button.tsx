"use client";

import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
    >
      <MessageCircle size={26} />
    </a>
  );
}
