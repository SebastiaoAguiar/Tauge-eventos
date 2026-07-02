import { Reveal } from "@/lib/motion";
import { GoldButton } from "@/components/ui/Buttons";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/config/site";

export default function FinalCTA() {
  return (
    <section id="contato" className="section pb-24 md:pb-32">
      <Reveal variant="card">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal px-8 py-16 text-center shadow-soft md:px-16 md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/25 blur-[120px]" />

          <span className="eyebrow relative z-10">Vamos planejar juntos</span>

          <h2 className="text-balance relative z-10 mx-auto mt-5 max-w-2xl text-[clamp(2rem,5vw,3.4rem)] leading-[1.15] text-cream">
            Sua celebração merece um espaço à altura dela
          </h2>

          <p className="relative z-10 mx-auto mt-6 max-w-lg leading-relaxed text-cream/70">
            Fale agora com a nossa equipe e agende uma visita sem compromisso.
            Vamos transformar sua data em uma experiência inesquecível.
          </p>

          <div className="relative z-10 mt-10 flex justify-center">
            <GoldButton
              href={whatsappLink(WHATSAPP_MESSAGES.visita)}
              className="bg-gold text-charcoal hover:shadow-[0_18px_45px_-12px_rgba(203,168,107,0.6)]"
            >
              Agendar uma visita pelo WhatsApp
            </GoldButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
