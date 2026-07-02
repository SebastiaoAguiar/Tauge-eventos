import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";
import Frame from "@/components/ui/Frame";
import TuageMark from "@/components/ui/TuageMark";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/config/site";

const EVENTS = [
  {
    tone: "gold" as const,
    title: "Casamentos",
    text: "Cerimônia e recepção em um só lugar, com cenários que acompanham cada estilo de celebração.",
    href: whatsappLink(WHATSAPP_MESSAGES.casamento),
  },
  {
    tone: "sand" as const,
    title: "Festas de 15 Anos",
    text: "Ambientação exclusiva para a festa dos sonhos, com estrutura para grandes produções.",
    href: whatsappLink(WHATSAPP_MESSAGES.debutante),
  },
  {
    tone: "charcoal" as const,
    title: "Eventos Corporativos",
    text: "Auditório e salões modulares para convenções, lançamentos e confraternizações.",
    href: whatsappLink(WHATSAPP_MESSAGES.corporativo),
  },
  {
    tone: "olive" as const,
    title: "Buffet",
    text: "Gastronomia autoral com opções personalizáveis para todos os tipos de evento.",
    href: whatsappLink(WHATSAPP_MESSAGES.orcamento),
  },
  {
    tone: "terracotta" as const,
    title: "Locação de Espaço",
    text: "Alugue nossos salões para o seu próprio projeto, com toda a infraestrutura inclusa.",
    href: whatsappLink(WHATSAPP_MESSAGES.geral),
  },
];

export default function EventTypes() {
  return (
    <section id="eventos" className="section py-24 md:py-32">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow">Tipos de eventos</span>
          </Reveal>
          <Reveal variant="heading" delay={0.05}>
            <h2 className="text-balance mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-charcoal">
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
            <a href={ev.href} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Frame
                tone={ev.tone}
                ratio={i === 0 ? "4 / 5.4" : "4 / 5"}
                className="transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <TuageMark
                size={64}
                tone="cream"
                className="absolute right-4 top-4 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-xl text-white">{ev.title}</h3>
                <p className="mt-2 max-w-[220px] text-[13px] leading-relaxed text-white/75">
                  {ev.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-mist opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Falar no WhatsApp <ArrowUpRight size={13} />
                </span>
              </div>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
