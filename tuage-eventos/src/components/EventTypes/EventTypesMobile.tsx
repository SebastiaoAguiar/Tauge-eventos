import { useState } from "react";
import { Images } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "@/lib/motion";
import { useCarouselDots } from "@/lib/carousel";
import CarouselDots from "@/components/ui/CarouselDots";
import EventGalleryModal from "@/components/EventGallery";
import { EVENTS, type EventCategory } from "@/components/EventTypes/data";

export default function EventTypesMobile() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const { selectedIndex, scrollSnaps, onDotClick } = useCarouselDots(emblaApi);
  const [activeEvent, setActiveEvent] = useState<EventCategory | null>(null);

  return (
    <section id="eventos" className="py-20">
      <div className="section mb-8">
        <Reveal>
          <span className="eyebrow">Tipos de eventos</span>
        </Reveal>
        <Reveal variant="heading" delay={0.05}>
          <h2 className="text-balance mt-3 text-[clamp(1.7rem,7vw,2.3rem)] leading-[1.18] text-charcoal">
            Um espaço, múltiplas possibilidades
          </h2>
        </Reveal>
      </div>

      <div className="overflow-hidden pl-6" ref={emblaRef}>
        <div className="flex gap-4">
          {EVENTS.map((ev) => (
            <button
              key={ev.title}
              type="button"
              onClick={() => setActiveEvent(ev)}
              aria-label={`Abrir galeria de ${ev.title}`}
              className="group relative min-w-0 shrink-0 basis-[74%] overflow-hidden rounded-[1.5rem] text-left shadow-soft"
            >
              <div className="overflow-hidden" style={{ aspectRatio: "4 / 5.2" }}>
                <img
                  src={ev.image}
                  alt={ev.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="font-serif text-lg text-white">{ev.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/75">{ev.text}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-gold-mist">
                  Ver galeria <Images size={12} />
                </span>
              </div>
            </button>
          ))}
          <div className="shrink-0 w-2" aria-hidden />
        </div>
      </div>

      <div className="mt-7">
        <CarouselDots count={scrollSnaps.length} selectedIndex={selectedIndex} onDotClick={onDotClick} />
      </div>

      <EventGalleryModal event={activeEvent} onClose={() => setActiveEvent(null)} />
    </section>
  );
}
