import { Users, UtensilsCrossed, ShieldCheck, CarFront, Palette } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";
import Frame from "@/components/ui/Frame";
import { useIsMobile } from "@/hooks/useIsMobile";
import DifferentialsMobile from "@/components/Differentials/DifferentialsMobile";

export default function Differentials() {
  const isMobile = useIsMobile();
  if (isMobile) return <DifferentialsMobile />;

  return (
    <section id="diferenciais" className="section py-24 md:py-32">
      <div className="mb-14 max-w-2xl">
        <Reveal>
          <span className="eyebrow">Nossos diferenciais</span>
        </Reveal>
        <Reveal variant="heading" delay={0.05}>
          <h2 className="text-balance mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-charcoal">
            Tudo pensado para que você só se preocupe em celebrar
          </h2>
        </Reveal>
      </div>

      <RevealGroup
        stagger={0.09}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[180px]"
      >
        {/* Large feature module */}
        <RevealItem
          variant="image"
          className="relative overflow-hidden rounded-[1.75rem] shadow-soft sm:col-span-2 lg:col-span-2 lg:row-span-2"
        >
          <Frame tone="charcoal" ratio="auto" className="h-full min-h-[320px] rounded-[1.75rem]" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <ShieldCheck className="mb-3 text-gold-mist" size={26} />
            <h3 className="font-serif text-2xl text-cream">Estrutura completa</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/75">
              Climatização, gerador próprio, sonorização, iluminação cênica e
              equipe técnica presente durante todo o evento.
            </p>
          </div>
        </RevealItem>

        <RevealItem
          variant="card"
          className="rounded-[1.75rem] border border-charcoal/8 bg-cream-soft p-7 shadow-sm lg:row-span-1"
        >
          <UtensilsCrossed className="text-terracotta" size={24} />
          <h3 className="mt-4 font-serif text-xl text-charcoal">Buffet exclusivo</h3>
          <p className="mt-2 text-sm leading-relaxed text-taupe">
            Cardápios autorais degustados sob medida para cada celebração.
          </p>
        </RevealItem>

        <RevealItem
          variant="card"
          className="rounded-[1.75rem] border border-charcoal/8 bg-cream-soft p-7 shadow-sm lg:row-span-1"
        >
          <Users className="text-olive" size={24} />
          <h3 className="mt-4 font-serif text-xl text-charcoal">Equipe dedicada</h3>
          <p className="mt-2 text-sm leading-relaxed text-taupe">
            Cerimonialista e coordenação acompanham cada etapa do planejamento.
          </p>
        </RevealItem>

        <RevealItem
          variant="card"
          className="rounded-[1.75rem] border border-charcoal/8 bg-gold/10 p-7 shadow-sm lg:col-span-2"
        >
          <div className="flex h-full flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <CarFront className="text-gold" size={24} />
              <h3 className="mt-4 font-serif text-xl text-charcoal">
                Estacionamento privativo
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-taupe">
                Vagas cobertas e manobrista para receber seus convidados com
                comodidade e segurança.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-wide text-charcoal">
              120 vagas
            </div>
          </div>
        </RevealItem>

        <RevealItem
          variant="card"
          className="w-full rounded-[1.75rem] border border-charcoal/8 bg-cream-soft p-7 shadow-sm sm:col-span-2 lg:col-span-2"
        >
          <Palette className="text-gold" size={24} />
          <h3 className="mt-4 font-serif text-xl text-charcoal">
            Decoração personalizada
          </h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-taupe">
            Parceria com os melhores cerimonialistas e decoradores da região
            para transformar seu conceito em realidade.
          </p>
        </RevealItem>

        
        
      </RevealGroup>
    </section>
  );
}
