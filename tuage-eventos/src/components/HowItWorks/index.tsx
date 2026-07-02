import { CalendarCheck, MessageCircle, ClipboardList, PartyPopper } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import HowItWorksMobile from "@/components/HowItWorks/HowItWorksMobile";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Primeiro contato",
    text: "Você nos chama no WhatsApp e conta um pouco sobre o seu evento.",
  },
  {
    icon: CalendarCheck,
    title: "Visita agendada",
    text: "Conhecemos o espaço juntos e apresentamos as possibilidades.",
  },
  {
    icon: ClipboardList,
    title: "Projeto personalizado",
    text: "Montamos uma proposta sob medida com buffet, decoração e estrutura.",
  },
  {
    icon: PartyPopper,
    title: "Dia da celebração",
    text: "Nossa equipe cuida de cada detalhe para você aproveitar cada minuto.",
  },
];

export default function HowItWorks() {
  const isMobile = useIsMobile();
  if (isMobile) return <HowItWorksMobile />;

  return (
    <section className="section py-24 md:py-32">
      <div className="mb-16 max-w-2xl">
        <Reveal>
          <span className="eyebrow">Como funciona</span>
        </Reveal>
        <Reveal variant="heading" delay={0.05}>
          <h2 className="text-balance mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-charcoal">
            Do primeiro contato ao grande dia
          </h2>
        </Reveal>
      </div>

      <RevealGroup
        stagger={0.1}
        className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div className="pointer-events-none absolute top-7 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-charcoal/15 to-transparent lg:block" />

        {STEPS.map((step, i) => (
          <RevealItem key={step.title} className="relative">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-cream text-gold">
              <step.icon size={22} />
            </div>
            <span className="eyebrow">0{i + 1}</span>
            <h3 className="mt-2 font-serif text-xl text-charcoal">{step.title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-taupe">
              {step.text}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
