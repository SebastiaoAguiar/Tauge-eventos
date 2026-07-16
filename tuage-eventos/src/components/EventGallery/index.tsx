import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ImageIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { GoldButton } from "@/components/ui/Buttons";
import AlbumStage from "@/components/EventGallery/AlbumStage";
import ThumbnailStrip from "@/components/EventGallery/ThumbnailStrip";
import type { EventCategory } from "@/components/EventTypes/data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type EventGalleryModalProps = {
  event: EventCategory | null;
  onClose: () => void;
};

/**
 * Álbum do tipo de evento — experiência imersiva inspirada em
 * Stories/Airbnb: uma foto principal protagonista, faixa de
 * miniaturas abaixo e navegação por setas, teclado e swipe.
 */
export default function EventGalleryModal({ event, onClose }: EventGalleryModalProps) {
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);
  const isOpen = event !== null;
  const count = event?.gallery.length ?? 0;

  // Cada álbum começa pela primeira foto.
  useEffect(() => setIndex(0), [event?.id]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (count > 1 && e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
      if (count > 1 && e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, count, onClose]);

  const panelVariants = isMobile
    ? {
        hidden: { y: "100%" },
        visible: { y: 0, transition: { duration: 0.45, ease: EASE } },
        exit: { y: "100%", transition: { duration: 0.32, ease: EASE } },
      }
    : {
        hidden: { opacity: 0, y: 26, scale: 0.96 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.42, ease: EASE } },
        exit: { opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.26, ease: EASE } },
      };

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Álbum — ${event.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[150] flex items-end justify-center bg-charcoal/70 backdrop-blur-md sm:items-center sm:p-6"
        >
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[94svh] w-full flex-col overflow-hidden rounded-t-[2rem] border border-charcoal/10 bg-cream shadow-soft sm:max-h-[92svh] sm:max-w-4xl sm:rounded-[2rem]"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
          >
            {/* Alça (mobile) */}
            <div className="flex justify-center pt-3 sm:hidden">
              <span className="h-1.5 w-10 rounded-full bg-charcoal/15" />
            </div>

            {/* Fechar */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar álbum"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/10 bg-cream-soft text-charcoal transition-colors duration-300 hover:border-charcoal/25 hover:text-gold sm:right-5 sm:top-5"
            >
              <X size={17} />
            </button>

            {/* Conteúdo rolável — o álbum inteiro */}
            <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-7 sm:px-8 sm:pb-9">
              {/* Cabeçalho enxuto — a foto é a protagonista */}
              <div className="pb-5 pt-5 text-center sm:pt-7">
                <span className="eyebrow">Álbum</span>
                <h2 className="mt-1.5 font-serif text-2xl text-charcoal sm:text-3xl">
                  {event.title}
                </h2>
                <p className="mx-auto mt-1.5 max-w-md text-[13px] leading-relaxed text-taupe sm:text-sm">
                  {event.text}
                </p>
              </div>

              {event.gallery.length === 0 ? (
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-charcoal/15 bg-cream-soft/60 px-6 py-14 text-center">
                  <ImageIcon size={26} className="text-taupe" />
                  <p className="max-w-xs text-sm leading-relaxed text-taupe">
                    Estamos preparando o álbum deste tipo de evento. Novas
                    fotos chegam em breve!
                  </p>
                </div>
              ) : (
                <>
                  {/* Foto principal */}
                  <AlbumStage
                    images={event.gallery}
                    index={index}
                    title={event.title}
                    onNavigate={setIndex}
                  />

                  {/* Miniaturas estilo Stories */}
                  {event.gallery.length > 1 && (
                    <div className="mt-4">
                      <ThumbnailStrip
                        images={event.gallery}
                        index={index}
                        title={event.title}
                        onSelect={setIndex}
                      />
                    </div>
                  )}
                </>
              )}

              {/* CTA de orçamento */}
              <div className="mt-6 flex justify-center border-t border-charcoal/10 pt-6">
                <GoldButton href={event.budgetHref}>
                  Solicitar orçamento para {event.whatsappLabel}
                </GoldButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
