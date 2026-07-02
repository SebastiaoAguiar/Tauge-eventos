import { CalendarCheck, MessageCircle, ClipboardList, PartyPopper } from "lucide-react";
import { Reveal } from "@/lib/motion";

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

export default function HowItWorksMobile() {
  return (
    <section className="py-20">
      <div className="section mb-8">
        <Reveal>
          <span className="eyebrow">Como funciona</span>
        </Reveal>
        <Reveal variant="heading" delay={0.05}>
          <h2 className="text-balance mt-3 text-[clamp(1.7rem,7vw,2.3rem)] leading-[1.18] text-charcoal">
            Do primeiro contato ao grande dia
          </h2>
        </Reveal>
      </div>

      <div className="flex snap-x-mandatory gap-4 overflow-x-auto pb-2 pl-6 no-scrollbar">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className="min-w-0 shrink-0 basis-[72%] snap-start-item rounded-[1.5rem] border border-charcoal/8 bg-cream-soft p-6"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-cream text-gold">
              <step.icon size={20} />
            </div>
            <span className="eyebrow">0{i + 1}</span>
            <h3 className="mt-2 font-serif text-lg text-charcoal">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-taupe">{step.text}</p>
          </div>
        ))}
        <div className="shrink-0 w-2" aria-hidden />
      </div>
    </section>
  );
}
