import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/lib/motion";
import Frame from "@/components/ui/Frame";

import img1 from "@/assets/images/1.png";
import img2 from "@/assets/images/2.png";
import img3 from "@/assets/images/3.png";
import img4 from "@/assets/images/4.png";
import img5 from "@/assets/images/5.png";
import img6 from "@/assets/images/6.png";

const ITEMS: { src: string; position?: string }[] = [
  { src: img1, position: "center 30%" },
  { src: img2, position: "62% center" },
  { src: img3 },
  { src: img4 },
  { src: img5, position: "38% center" },
  { src: img6, position: "56% center" },
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

      <div
        className="
          -mx-[clamp(20px,5vw,48px)] flex snap-x snap-mandatory gap-4
          overflow-x-auto pb-2 pl-[clamp(20px,5vw,48px)] no-scrollbar
          sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible
          sm:pb-0 sm:pl-0 sm:snap-none lg:grid-cols-3
        "
      >
        {ITEMS.map((item, i) => (
          <Reveal
            key={item.src}
            variant="image"
            delay={(i % 3) * 0.08}
            className="w-[78%] shrink-0 snap-start sm:w-auto sm:shrink sm:snap-align-none"
          >
            <button
              onClick={() => setActive(i)}
              aria-label="Ampliar foto"
              className="group block w-full overflow-hidden rounded-[1.5rem] shadow-soft transition-transform duration-300 ease-out sm:hover:-translate-y-1"
            >
              <Frame src={item.src} ratio="1 / 1" imgStyle={{ objectPosition: item.position }} />
            </button>
          </Reveal>
        ))}
        <div className="w-2 shrink-0 sm:hidden" aria-hidden />
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
              className="max-h-[85vh] max-w-[90vw]"
            >
              <img
                src={ITEMS[active].src}
                alt=""
                className="max-h-[85vh] w-auto rounded-[1.5rem] object-contain shadow-2xl"
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
