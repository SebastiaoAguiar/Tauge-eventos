import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/config/site";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex items-center gap-3">
      <div className="animate-float hidden rounded-full border border-charcoal/10 bg-cream px-5 py-3 text-sm text-charcoal shadow-soft md:block">
        Agende sua visita
      </div>

      <a
        href={whatsappLink(WHATSAPP_MESSAGES.geral)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-charcoal shadow-soft transition-transform duration-300 hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-gold/40 opacity-40 animate-ping" />
        <MessageCircle size={26} className="relative z-10 text-gold-mist" strokeWidth={1.6} />
      </a>
    </div>
  );
}
