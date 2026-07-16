import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SWIPE_DISTANCE = 56;
const SWIPE_VELOCITY = 380;

type AlbumStageProps = {
  images: string[];
  index: number;
  title: string;
  onNavigate: (index: number) => void;
};

/**
 * Palco do álbum — a foto principal é a protagonista.
 * Troca com fade + leve zoom (~320ms), setas no desktop,
 * swipe fluido no mobile, contador discreto e pré-carregamento
 * das fotos vizinhas para navegação instantânea.
 */
export default function AlbumStage({ images, index, title, onNavigate }: AlbumStageProps) {
  const count = images.length;
  const next = () => onNavigate((index + 1) % count);
  const prev = () => onNavigate((index - 1 + count) % count);

  // Pré-carrega a próxima e a anterior — a troca fica imediata.
  useEffect(() => {
    if (count < 2) return;
    [(index + 1) % count, (index - 1 + count) % count].forEach((i) => {
      const img = new Image();
      img.src = images[i];
    });
  }, [index, images, count]);

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] bg-charcoal/[0.045] shadow-[0_20px_50px_-24px_rgba(38,34,32,0.35)]">
      {/* Altura estável — a foto se acomoda sem distorcer nem cortar */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.32, ease: EASE }}
            drag={count > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.55}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_DISTANCE || info.velocity.x < -SWIPE_VELOCITY) next();
              else if (info.offset.x > SWIPE_DISTANCE || info.velocity.x > SWIPE_VELOCITY) prev();
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src={images[index]}
              alt={`${title} — foto ${index + 1} de ${count}`}
              draggable={false}
              decoding="async"
              className="h-full w-full select-none object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Setas — Desktop; no mobile a navegação é por swipe e miniaturas */}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Foto anterior"
              className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-charcoal/10 bg-cream/90 text-charcoal shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-cream hover:text-gold md:flex"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próxima foto"
              className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-charcoal/10 bg-cream/90 text-charcoal shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-cream hover:text-gold md:flex"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Contador discreto */}
        {count > 1 && (
          <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-charcoal/50 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-cream/90 backdrop-blur-sm">
            {index + 1} / {count}
          </span>
        )}
      </div>
    </div>
  );
}
