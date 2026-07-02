import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";

const FAQS = [
  {
    q: "Qual a capacidade máxima do espaço?",
    a: "Nossos salões comportam até 500 convidados sentados, com configurações flexíveis para eventos menores e mais intimistas.",
  },
  {
    q: "O buffet é obrigatório ou posso levar o meu?",
    a: "Trabalhamos com buffet próprio e parceiros homologados, garantindo qualidade e segurança alimentar em todo o cardápio.",
  },
  {
    q: "É possível fazer cerimônia e recepção no mesmo lugar?",
    a: "Sim. Temos espaços internos e ao ar livre pensados especialmente para cerimônias, com transição direta para a recepção.",
  },
  {
    q: "Como funciona o agendamento de visita?",
    a: "Basta chamar nossa equipe pelo WhatsApp para escolher o melhor dia e horário. A visita é gratuita e sem compromisso.",
  },
  {
    q: "Vocês oferecem decoração e estacionamento?",
    a: "Sim, contamos com parceiros de decoração de alto padrão e estacionamento privativo com manobrista para os convidados.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow">Perguntas frequentes</span>
          </Reveal>
          <Reveal variant="heading" delay={0.05}>
            <h2 className="text-balance mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-charcoal">
              Tudo o que você precisa saber
            </h2>
          </Reveal>
        </div>

        <RevealGroup stagger={0.06} className="divide-y divide-charcoal/10">
          {FAQS.map((item, i) => (
            <RevealItem key={item.q} className="py-6">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 text-left"
              >
                <span className="font-serif text-lg text-charcoal">{item.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold"
                >
                  <Plus size={16} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-lg pt-4 leading-relaxed text-taupe">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
