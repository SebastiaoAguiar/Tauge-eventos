import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/lib/motion";
import Frame, { type Tone } from "@/components/ui/Frame";

const ITEMS: { tone: Tone; label: string; ratio: string }[] = [
  { tone: "gold", label: "Cerimônia ao ar livre", ratio: "4 / 5" },
  { tone: "charcoal", label: "Salão principal à noite", ratio: "4 / 3" },
  { tone: "sand", label: "Mesa dos convidados", ratio: "4 / 5" },
  { tone: "olive", label: "Decoração floral", ratio: "4 / 4.6" },
  { tone: "linen", label: "Buffet & gastronomia", ratio: "4 / 3" },
  { tone: "gold", label: "Pista de dança", ratio: "4 / 5.4" },
  { tone: "charcoal", label: "Festa de 15 anos", ratio: "4 / 5" },
  { tone: "terracotta", label: "Evento corporativo", ratio: "4 / 3" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const next = () => setActive((a) => (a === null ? a : (a + 1) % ITEMS.length));
  const prev = () =>
    setActive((a) => (a === null ? a : (a - 1 + ITEMS.length) % ITEMS.length));

  return (
    <section id="galeria" className="section py-24 md:py-32">
      <div className="mb-14 max-w-2xl">
        <Reveal>
          <span className="eyebrow">Galeria premium</span>
        </Reveal>
        <Reveal variant="heading" delay={0.05}>
          <h2 className="text-balance mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-charcoal">
            Cada detalhe merece ser registrado
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-md leading-relaxed text-taupe">
            Um recorte dos momentos vividos em nossos salões. Clique em
            qualquer imagem para ver em tela cheia.
          </p>
        </Reveal>
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {ITEMS.map((item, i) => (
          <Reveal key={item.label} variant="image" delay={(i % 3) * 0.08}>
            <button
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-[1.5rem] shadow-soft"
            >
              <Frame tone={item.tone} ratio={item.ratio} label={item.label}>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </Frame>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <span className="rounded-full border border-white/50 px-4 py-1.5 text-[11px] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  Ampliar
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/92 p-6 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 rounded-full border border-white/20 p-2.5 text-white/80 hover:text-white"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-3 text-white/80 hover:text-white md:left-10"
              aria-label="Anterior"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl"
            >
              <Frame
                tone={ITEMS[active].tone}
                ratio="4 / 5"
                className="rounded-[1.5rem]"
                label={ITEMS[active].label}
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-3 text-white/80 hover:text-white md:right-10"
              aria-label="Próxima"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
