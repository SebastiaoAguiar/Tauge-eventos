import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import TuageMark from "@/components/ui/TuageMark";
import { useIsMobile } from "@/hooks/useIsMobile";
import { CONTACT_CHANNELS } from "@/components/ContactPopup/contacts";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type ContactPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * Pop-up único e reutilizável com todos os canais de contato da Tuagê.
 * Vira bottom sheet no mobile e modal centralizado no desktop.
 */
export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  const panelVariants = isMobile
    ? {
        hidden: { y: "100%" },
        visible: { y: 0, transition: { duration: 0.45, ease: EASE } },
        exit: { y: "100%", transition: { duration: 0.32, ease: EASE } },
      }
    : {
        hidden: { opacity: 0, y: 24, scale: 0.96 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE } },
        exit: { opacity: 0, y: 14, scale: 0.97, transition: { duration: 0.25, ease: EASE } },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Fale com a Tuagê Eventos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[200] flex items-end justify-center bg-charcoal/60 backdrop-blur-md sm:items-center sm:p-6"
        >
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88svh] w-full overflow-y-auto rounded-t-[2rem] border border-charcoal/10 bg-cream shadow-soft sm:max-w-md sm:rounded-[2rem]"
            style={{
              paddingBottom: "env(safe-area-inset-bottom, 0px)",
            }}
          >
            <div className="flex justify-center pt-3 sm:hidden">
              <span className="h-1.5 w-10 rounded-full bg-charcoal/15" />
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/10 bg-cream-soft text-charcoal transition-colors duration-300 hover:border-charcoal/25 hover:text-gold"
            >
              <X size={17} />
            </button>

            <div className="px-7 pb-8 pt-8 sm:pt-9">
              <TuageMark size={30} tone="gold" />
              <h2 className="mt-4 font-serif text-2xl text-charcoal">Fale com a Tuagê</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-taupe">
                Escolha o canal que preferir — nossa equipe responde rapidinho.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                {CONTACT_CHANNELS.map((channel) => (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="group flex items-center gap-4 rounded-2xl border border-charcoal/8 bg-cream-soft p-4 transition-all duration-300 hover:border-gold/40 hover:bg-gold/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-cream text-gold">
                      <channel.icon size={19} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-[15px] text-charcoal">
                        {channel.title}
                      </span>
                      <span className="mt-0.5 block truncate text-xs leading-relaxed text-taupe">
                        {channel.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-taupe transition-colors duration-300 group-hover:text-gold"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
