import { ArrowUpRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "@/lib/motion";
import { useCarouselDots } from "@/lib/carousel";
import CarouselDots from "@/components/ui/CarouselDots";
import Frame from "@/components/ui/Frame";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/config/site";

const EVENTS = [
  {
    tone: "gold" as const,
    title: "Casamentos",
    text: "Cerimônia e recepção em um só lugar, com cenários que acompanham cada estilo de celebração.",
    href: whatsappLink(WHATSAPP_MESSAGES.casamento),
  },
  {
    tone: "sand" as const,
    title: "Festas de 15 Anos",
    text: "Ambientação exclusiva para a festa dos sonhos, com estrutura para grandes produções.",
    href: whatsappLink(WHATSAPP_MESSAGES.debutante),
  },
  {
    tone: "charcoal" as const,
    title: "Eventos Corporativos",
    text: "Auditório e salões modulares para convenções, lançamentos e confraternizações.",
    href: whatsappLink(WHATSAPP_MESSAGES.corporativo),
  },
  {
    tone: "olive" as const,
    title: "Buffet",
    text: "Gastronomia autoral com opções personalizáveis para todos os tipos de evento.",
    href: whatsappLink(WHATSAPP_MESSAGES.orcamento),
  },
  {
    tone: "terracotta" as const,
    title: "Locação de Espaço",
    text: "Alugue nossos salões para o seu próprio projeto, com toda a infraestrutura inclusa.",
    href: whatsappLink(WHATSAPP_MESSAGES.geral),
  },
];

export default function EventTypesMobile() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const { selectedIndex, scrollSnaps, onDotClick } = useCarouselDots(emblaApi);

  return (
    <section id="eventos" className="py-20">
      <div className="section mb-8">
        <Reveal>
          <span className="eyebrow">Tipos de eventos</span>
        </Reveal>
        <Reveal variant="heading" delay={0.05}>
          <h2 className="text-balance mt-3 text-[clamp(1.7rem,7vw,2.3rem)] leading-[1.18] text-charcoal">
            Um espaço, múltiplas possibilidades de celebração
          </h2>
        </Reveal>
      </div>

      <div className="overflow-hidden pl-6" ref={emblaRef}>
        <div className="flex gap-4">
          {EVENTS.map((ev) => (
            <a
              key={ev.title}
              href={ev.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-w-0 shrink-0 basis-[74%] overflow-hidden rounded-[1.5rem] shadow-soft"
            >
              <Frame tone={ev.tone} ratio="4 / 5.2" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="font-serif text-lg text-white">{ev.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/75">{ev.text}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-gold-mist">
                  Falar no WhatsApp <ArrowUpRight size={12} />
                </span>
              </div>
            </a>
          ))}
          <div className="shrink-0 w-2" aria-hidden />
        </div>
      </div>

      <div className="mt-7">
        <CarouselDots count={scrollSnaps.length} selectedIndex={selectedIndex} onDotClick={onDotClick} />
      </div>
    </section>
  );
}
