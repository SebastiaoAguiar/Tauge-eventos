import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";
import TuageMark from "@/components/ui/TuageMark";
import { useIsMobile } from "@/hooks/useIsMobile";
import EventTypesMobile from "@/components/EventTypes/EventTypesMobile";
import { EVENTS } from "@/components/EventTypes/data";

export default function EventTypes() {
  const isMobile = useIsMobile();

  if (isMobile) return <EventTypesMobile />;

  return (
    <section id="eventos" className="section py-24 md:py-32">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">Tipos de eventos</span>
          </Reveal>

          <Reveal variant="heading" delay={0.05}>
            <h2 className="mt-4 text-balance text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-charcoal">
              Um espaço, múltiplas possibilidades de celebração
            </h2>
          </Reveal>
        </div>
      </div>

      <RevealGroup
        stagger={0.08}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
      >
        {EVENTS.map((ev, i) => (
          <RevealItem
            key={ev.title}
            variant="image"
            className={`group relative overflow-hidden rounded-[1.75rem] shadow-soft ${
              i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
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
                className="overflow-hidden"
                style={{
                  aspectRatio: i === 0 ? "4 / 5.4" : "4 / 5",
                }}
              >
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Logo decorativa */}
              <TuageMark
                size={64}
                tone="cream"
                className="absolute right-4 top-4 opacity-0 transition-opacity duration-500 group-hover:opacity-25"
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