import { Star, Quote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import TestimonialsMobile from "@/components/Testimonials/TestimonialsMobile";

const TESTIMONIALS = [
  {
    name: "Maria Leonice",
    event: "Formatura",
    text: "Lugar maravilhoso. Espaçoso, bem iluminado e móveis de muito bom gosto. Excelente para aniversários,casamentos e formaturas pq tem um mezanino que realça a entrada dos formandos."
  },
  {
    name: "Dlisconsultoria",
    event: "Festa de aniversario",
    text: "Melhor local de Palmas para eventos, estrutura excelente, a casa tem buffet próprio e comida de alto padrão" 
 },
  {
    name: "Paulo Guilherme",
    event: "Evento corporativo",
    text: "Lugar amplo, bem arejado, com local para várias criações e ideias, casamentos, festas comemorativas, confraternizações dentre outro, excelente!"
},
];

export default function Testimonials() {
  const isMobile = useIsMobile();
  if (isMobile) return <TestimonialsMobile />;

  return (
    <section id="depoimentos" className="bg-charcoal py-24 md:py-32">
      <div className="section">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow">Depoimentos</span>
          <Reveal variant="heading" delay={0.05}>
            <h2 className="text-balance mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-cream">
              Histórias de quem celebrou com a gente
            </h2>
          </Reveal>
        </div>

        <RevealGroup stagger={0.1} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <RevealItem
              key={t.name}
              className="rounded-[1.75rem] border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm"
            >
              <Quote className="text-gold" size={26} />
              <p className="mt-5 leading-relaxed text-cream/85">{t.text}</p>
              <div className="mt-7 flex items-center justify-between border-t border-cream/10 pt-5">
                <div>
                  <p className="font-serif text-lg text-cream">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-taupe-soft">
                    {t.event}
                  </p>
                </div>
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
