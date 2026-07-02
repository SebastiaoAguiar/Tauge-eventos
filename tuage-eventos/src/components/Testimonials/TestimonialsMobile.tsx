import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "@/lib/motion";
import { useCarouselDots } from "@/lib/carousel";
import CarouselDots from "@/components/ui/CarouselDots";

const TESTIMONIALS = [
  {
    name: "Maria Leonice",
    event: "Formatura",
    text: "Lugar maravilhoso. Espaçoso, bem iluminado e móveis de muito bom gosto. Excelente para aniversários,casamentos e formaturas pq tem um mezanino que realça a entrada dos formandos.",
  },
  {
    name: "Dlisconsultoria",
    event: "Festa de aniversario",
    text: "Melhor local de Palmas para eventos, estrutura excelente, a casa tem buffet próprio e comida de alto padrão",
  },
  {
    name: "Paulo Guilherme",
    event: "Evento corporativo",
    text: "Lugar amplo, bem arejado, com local para várias criações e ideias, casamentos, festas comemorativas, confraternizações dentre outro, excelente!",
  },
];

export default function TestimonialsMobile() {
  const autoplay = useRef(Autoplay({ delay: 5200, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start", containScroll: "trimSnaps" },
    [autoplay.current],
  );
  const { selectedIndex, scrollSnaps, onDotClick } = useCarouselDots(emblaApi);

  return (
    <section id="depoimentos" className="bg-charcoal py-20">
      <div className="section mb-8">
        <span className="eyebrow">Depoimentos</span>
        <Reveal variant="heading" delay={0.05}>
          <h2 className="text-balance mt-3 text-[clamp(1.7rem,7vw,2.3rem)] leading-[1.18] text-cream">
            Histórias de quem celebrou com a gente
          </h2>
        </Reveal>
      </div>

      <div className="overflow-hidden pl-6" ref={emblaRef}>
        <div className="flex gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="min-w-0 shrink-0 basis-[86%] rounded-[1.5rem] border border-cream/10 bg-cream/5 p-7 backdrop-blur-sm"
            >
              <Quote className="text-gold" size={24} />
              <p className="mt-4 text-[15px] leading-relaxed text-cream/85">{t.text}</p>
              <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-4">
                <div>
                  <p className="font-serif text-base text-cream">{t.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.1em] text-taupe-soft">
                    {t.event}
                  </p>
                </div>
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="shrink-0 w-2" aria-hidden />
        </div>
      </div>

      <div className="mt-7">
        <CarouselDots
          count={scrollSnaps.length}
          selectedIndex={selectedIndex}
          onDotClick={onDotClick}
          tone="light"
        />
      </div>
    </section>
  );
}
