import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";
import TuageMark from "@/components/ui/TuageMark";
import { useIsMobile } from "@/hooks/useIsMobile";
import EventTypesMobile from "@/components/EventTypes/EventTypesMobile";
import { EVENTS } from "@/components/EventTypes/data";

// Elegant, full-height fade — replaces the old flat bottom bar.
const CARD_GRADIENT =
  "linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.55) 35%, rgba(0,0,0,.15) 70%, rgba(0,0,0,0) 100%)";

// Casamentos leads as the tall left-hand feature; the remaining four
// fill the right side as an even 2×2 (Festas 15 | Corporativo, then
// Locação | Buffet) via plain CSS Grid auto-placement — no manual
// per-item column math.
const DISPLAY_ORDER = [EVENTS[0], EVENTS[1], EVENTS[2], EVENTS[4], EVENTS[3]];

export default function EventTypes() {
  const isMobile = useIsMobile();

  if (isMobile) return <EventTypesMobile />;

  return (
    <section id="eventos" className="section py-20 md:py-28">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">Tipos de eventos</span>
          </Reveal>

          <Reveal variant="heading" delay={0.05}>
            <h2 className="mt-4 text-balance text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-charcoal">
              Um espaço, múltiplas possibilidades
            </h2>
          </Reveal>
        </div>
      </div>

      <RevealGroup
        stagger={0.08}
        className="grid grid-cols-2 gap-[18px] lg:grid-cols-3"
      >
        {DISPLAY_ORDER.map((ev, i) => (
          <RevealItem
            key={ev.title}
            variant="image"
            className={`group relative overflow-hidden rounded-[1.75rem] shadow-soft ${
              i === 0 ? "col-span-2 lg:col-span-1 lg:row-span-2" : ""
            }`}
          >
            <a
              href={ev.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              {/* Imagem */}
              <div
                className={`overflow-hidden ${
                  i === 0 ? "aspect-[16/11] lg:aspect-auto lg:h-full" : "aspect-[10/11]"
                }`}
              >
                <img
                  src={ev.image}
                  alt={ev.title}
                  className={`h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] ${
                    i === 0 ? "object-[58%_38%]" : ""
                  }`}
                />
              </div>

              {/* Gradiente — fade preto suave, cobrindo toda a imagem */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ backgroundImage: CARD_GRADIENT }}
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/10" />

              {/* Logo decorativa */}
              <TuageMark
                size={64}
                tone="cream"
                className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-25"
              />

              {/* Conteúdo */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-xl text-white">
                  {ev.title}
                </h3>

                <p className="mt-2 max-w-[240px] text-[13px] leading-relaxed text-white/80">
                  {ev.text}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-mist opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Falar no WhatsApp
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}