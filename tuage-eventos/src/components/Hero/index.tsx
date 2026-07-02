import { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GoldButton, GhostButton } from "@/components/ui/Buttons";
import localImage from "@/assets/images/Local.png";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useContactPopup } from "@/components/ContactPopup/ContactPopupProvider";
import HeroMobile from "@/components/Hero/HeroMobile";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const HIGHLIGHTS = ["Casamentos", "15 Anos", "Eventos Corporativos", "Buffet Completo"];

const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE, delay },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const isMobile = useIsMobile();
  const { openContactPopup } = useContactPopup();

  if (isMobile) return <HeroMobile />;

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-charcoal"
    >
      {/* Foto do espaço — protagonista absoluta do Hero */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
        style={{ y: imageY }}
        className="absolute inset-0"
      >
        <img
          src={localImage}
          alt="Fachada do espaço Tuagê Eventos, iluminada à noite"
          className="h-full w-full object-cover object-[58%_center] brightness-[0.92] contrast-[1.03]"
        />
      </motion.div>

      {/* Overlays elegantes para legibilidade e profundidade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/65 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/45 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_200px_90px_rgba(23,20,18,0.5)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[440px] w-[620px] rounded-full bg-gold/15 blur-[130px]" />

      {/* Conteúdo */}
      <div className="section relative z-10 w-full pb-20 pt-40 md:pb-28">
        <div className="max-w-2xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 backdrop-blur-md"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-mist">
              Espaço · Buffet · Eventos
            </span>
          </motion.div>

          <motion.h1
            custom={0.12}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-balance text-[clamp(2.6rem,6vw,4.8rem)] font-medium leading-[1.08] text-cream"
          >
            Transformamos celebrações em{" "}
            <span className="italic text-gold-mist">memórias inesquecíveis</span>.
          </motion.h1>

          <motion.p
            custom={0.28}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-lg text-[17px] leading-relaxed text-cream/75"
          >
            Casamentos, festas de 15 anos e eventos corporativos ganham vida
            em um espaço pensado nos mínimos detalhes — com elegância,
            estrutura completa e atendimento verdadeiramente exclusivo.
          </motion.p>

          <motion.div
            custom={0.42}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <GoldButton onClick={openContactPopup}>Agendar uma visita</GoldButton>
            <GhostButton href="#galeria">Ver galeria</GhostButton>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.09, delayChildren: 0.62 } },
            }}
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            {HIGHLIGHTS.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                }}
                className="flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-cream/60"
              >
                <Check size={13} className="text-gold-mist" strokeWidth={2.5} />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-cream/65 transition-colors duration-300 hover:text-cream sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.32em]">Descubra</span>
        <span className="relative h-10 w-px overflow-hidden bg-cream/25">
          <motion.span
            className="absolute inset-x-0 top-0 h-full bg-cream"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
