import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "@/lib/motion";
import { useCarouselDots } from "@/lib/carousel";
import CarouselDots from "@/components/ui/CarouselDots";
import Frame, { type Tone } from "@/components/ui/Frame";

const ITEMS: { tone: Tone; label: string }[] = [
  { tone: "gold", label: "Cerimônia ao ar livre" },
  { tone: "charcoal", label: "Salão principal à noite" },
  { tone: "sand", label: "Mesa dos convidados" },
  { tone: "olive", label: "Decoração floral" },
  { tone: "linen", label: "Buffet & gastronomia" },
  { tone: "gold", label: "Pista de dança" },
  { tone: "charcoal", label: "Festa de 15 anos" },
  { tone: "terracotta", label: "Evento corporativo" },
];

/**
 * Galeria mobile: carrossel em tela cheia (edge-to-edge), com indicador de
 * posição e swipe nativo — substitui o masonry + lightbox do desktop, que
 * exigiria rolagem excessiva num telão vertical estreito.
 */
export default function GalleryMobile() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const { selectedIndex, scrollSnaps, onDotClick } = useCarouselDots(emblaApi);

  return (
    <section id="galeria" className="py-20">
      <div className="section mb-8">
        <Reveal>
          <span className="eyebrow">Galeria premium</span>
        </Reveal>
        <Reveal variant="heading" delay={0.05}>
          <h2 className="text-balance mt-3 text-[clamp(1.7rem,7vw,2.3rem)] leading-[1.18] text-charcoal">
            Cada detalhe merece ser registrado
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-sm leading-relaxed text-taupe">
            Deslize para explorar os momentos vividos em nossos salões.
          </p>
        </Reveal>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {ITEMS.map((item) => (
              <div key={item.label} className="relative min-w-0 shrink-0 basis-full">
                <Frame tone={item.tone} ratio="4 / 5.4" label={item.label} className="w-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 right-4 rounded-full bg-charcoal/60 px-3 py-1 text-[11px] font-medium text-cream backdrop-blur-sm">
          {selectedIndex + 1} / {ITEMS.length}
        </div>
      </div>

      <div className="section mt-6">
        <CarouselDots count={scrollSnaps.length} selectedIndex={selectedIndex} onDotClick={onDotClick} />
      </div>
    </section>
  );
}
