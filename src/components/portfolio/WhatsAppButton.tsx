import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/portfolio-data";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Elizabeth on WhatsApp"
      className="no-print group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-brand px-4 py-3.5 text-warm shadow-lg shadow-emerald-brand/30 transition hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-sm font-medium sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
