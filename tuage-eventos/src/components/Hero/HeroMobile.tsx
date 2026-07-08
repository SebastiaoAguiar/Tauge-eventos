import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { GoldButton, GhostButton } from "@/components/ui/Buttons";
import localImage from "@/assets/images/Local.png";
import { useContactPopup } from "@/components/ContactPopup/ContactPopupProvider";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const HIGHLIGHTS = ["Casamentos", "15 Anos", "Eventos Corporativos", "Buffet Completo"];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

/**
 * Hero mobile: a foto vira uma "capa" de app em vez de fundo com texto
 * flutuando por cima — o conteúdo mora num painel abaixo, como um bottom
 * sheet, dando protagonismo à imagem e legibilidade total ao texto.
 */
export default function HeroMobile() {
  const { openContactPopup } = useContactPopup();

  return (
    <section id="inicio" className="relative w-full bg-charcoal">
      <div className="relative h-[56svh] min-h-[360px] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          src={localImage}
          alt="Fachada do espaço Tuagê Eventos, iluminada à noite"
          className="h-full w-full object-cover object-[62%_center] brightness-[0.95] contrast-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/5 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/55 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
          className="absolute left-5 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3.5 py-1.5 backdrop-blur-md"
          style={{ top: "calc(env(safe-area-inset-top, 0px) + 86px)" }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-mist">
            Espaço · Buffet · Eventos
          </span>
        </motion.div>
      </div>

      <div className="relative z-10 -mt-7 rounded-t-[2rem] bg-charcoal px-6 pb-11 pt-8">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-balance text-[clamp(2rem,8vw,2.6rem)] font-medium leading-[1.14] text-cream"
        >
          Eternizamos sonhos em{" "}
          <span className="italic text-gold-mist">celebrações inesquecíveis</span>.
        </motion.h1>

        <motion.p
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-4 text-[15px] leading-relaxed text-cream/75"
        >
          Casamentos, festas de 15 anos e eventos corporativos ganham vida em
          um espaço pensado nos mínimos detalhes, com conceitos criativos e
          inovadores.
        </motion.p>

        <motion.div
          custom={0.18}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="-mx-6 mt-6 flex gap-2.5 overflow-x-auto px-6 pb-1 no-scrollbar"
        >
          {HIGHLIGHTS.map((item) => (
            <span
              key={item}
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-cream/15 bg-cream/5 px-3.5 py-2 text-[11px] uppercase tracking-[0.08em] text-cream/70"
            >
              <Check size={12} className="text-gold-mist" strokeWidth={2.5} />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          custom={0.26}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-7 flex flex-col gap-3"
        >
          <GoldButton onClick={openContactPopup} className="w-full">
            Fale conosco
          </GoldButton>
          <GhostButton href="#galeria" className="w-full">
            Ver galeria
          </GhostButton>
        </motion.div>
      </div>
    </section>
  );
}
