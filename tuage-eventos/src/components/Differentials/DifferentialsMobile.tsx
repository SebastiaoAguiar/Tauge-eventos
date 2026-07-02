import { Users, UtensilsCrossed, ShieldCheck, CarFront, Palette, type LucideIcon } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "@/lib/motion";
import { useCarouselDots } from "@/lib/carousel";
import CarouselDots from "@/components/ui/CarouselDots";

const ITEMS: { icon: LucideIcon; iconTone: string; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    iconTone: "text-gold-mist",
    title: "Estrutura completa",
    text: "Climatização, gerador próprio, sonorização, iluminação cênica e equipe técnica presente durante todo o evento.",
  },
  {
    icon: UtensilsCrossed,
    iconTone: "text-terracotta",
    title: "Buffet exclusivo",
    text: "Cardápios autorais degustados sob medida para cada celebração.",
  },
  {
    icon: Users,
    iconTone: "text-olive",
    title: "Equipe dedicada",
    text: "Cerimonialista e coordenação acompanham cada etapa do planejamento.",
  },
  {
    icon: CarFront,
    iconTone: "text-gold",
    title: "Estacionamento privativo",
    text: "Vagas cobertas e manobrista para receber seus convidados com comodidade e segurança.",
  },
  {
    icon: Palette,
    iconTone: "text-gold",
    title: "Decoração personalizada",
    text: "Parceria com os melhores cerimonialistas e decoradores da região para transformar seu conceito em realidade.",
  },
];

export default function DifferentialsMobile() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });
  const { selectedIndex, scrollSnaps, onDotClick } = useCarouselDots(emblaApi);

  return (
    <section id="diferenciais" className="py-20">
      <div className="section mb-8">
        <Reveal>
          <span className="eyebrow">Nossos diferenciais</span>
        </Reveal>
        <Reveal variant="heading" delay={0.05}>
          <h2 className="text-balance mt-3 text-[clamp(1.7rem,7vw,2.3rem)] leading-[1.18] text-charcoal">
            Tudo pensado para que você só se preocupe em celebrar
          </h2>
        </Reveal>
      </div>

      <div className="overflow-hidden pl-6" ref={emblaRef}>
        <div className="flex gap-4">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="min-w-0 shrink-0 basis-[80%] rounded-[1.5rem] border border-charcoal/8 bg-cream-soft p-6 shadow-sm"
            >
              <item.icon className={item.iconTone} size={24} />
              <h3 className="mt-4 font-serif text-xl text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-taupe">{item.text}</p>
            </div>
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
