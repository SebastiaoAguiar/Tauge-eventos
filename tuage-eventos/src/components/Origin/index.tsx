import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/lib/motion";

import TuageMark from "@/components/ui/TuageMark";
import movimentoImage from "@/assets/images/Movimento.png";

const BEATS = ["A seca", "A dança", "A celebração"];

export default function Origin() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const tracePath = useTransform(scrollYProgress, [0.15, 0.7], [0, 1]);

  return (
    <section
      id="origem"
      ref={sectionRef}
      className="texture-linen relative flex min-h-[100svh] w-full items-center overflow-hidden bg-charcoal py-28 md:py-0"
    >
      {/* Background — full-screen photo with slow living zoom + scroll parallax */}
      <motion.div
        aria-hidden="true"
        initial={{ scale: 1.12 }}
        animate={{ scale: [1.12, 1.24, 1.12] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <img
          src={movimentoImage}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Overlays for legibility and depth */}
      <div className="pointer-events-none absolute inset-0 bg-charcoal/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-charcoal/15" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-charcoal/85 via-charcoal/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_220px_100px_rgba(20,17,15,0.55)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-terracotta/20 blur-[150px]" />

      {/* Content */}
      <div className="section relative z-10 w-full">
        <div className="relative mx-auto max-w-xl text-center md:ml-auto md:mr-0 md:max-w-lg md:text-left">
          <div className="pointer-events-none absolute right-[-80px] top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-charcoal/50 blur-[120px] md:block" />

          <div className="relative">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <TuageMark size={26} tone="gold" className="opacity-70" />
                <span className="eyebrow text-gold-mist">A origem do nome</span>
              </div>
            </Reveal>

            <Reveal variant="heading" delay={0.05}>
              <h2 className="text-balance mt-4 text-[clamp(2.2rem,5vw,3.6rem)] italic leading-[1.1] text-cream">
                Kahê-Tuagê
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-cream/85 md:mx-0">
                O nome Tuagê nasce da história do Tocantins. Inspirado na dança
                Kahê-Tuagê, realizada pelo povo Kanela durante o período da
                seca, ele representa celebração, encontro e a força do elemento
                feminino.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mx-auto mt-4 max-w-lg leading-relaxed text-cream/60 md:mx-0">
                Hoje, essa essência continua viva em cada evento realizado pela
                Tuagê Eventos.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="relative mx-auto mt-14 max-w-lg md:mx-0">
                {/* base track — spans exactly between the first and last dot centers */}
                <div className="absolute left-[calc(100%/6)] right-[calc(100%/6)] top-[7px] h-px -translate-y-1/2 bg-cream/15" />
                {/* animated progress glow, filling as the section scrolls into view */}
                <motion.div
                  style={{ scaleX: tracePath }}
                  className="absolute left-[calc(100%/6)] right-[calc(100%/6)] top-[7px] h-px origin-left -translate-y-1/2 bg-gradient-to-r from-gold via-gold-mist to-terracotta-soft shadow-[0_0_10px_2px_rgba(203,168,107,0.55)]"
                />

                <div className="relative grid grid-cols-3">
                  {BEATS.map((label) => (
                    <div key={label} className="group flex flex-col items-center gap-3">
                      <span className="relative h-3.5 w-3.5 rounded-full bg-charcoal ring-2 ring-gold transition-all duration-300 ease-out group-hover:scale-125 group-hover:ring-gold-mist group-hover:shadow-[0_0_14px_4px_rgba(203,168,107,0.55)]">
                        <span className="absolute inset-0 scale-0 rounded-full bg-gold transition-transform duration-300 ease-out group-hover:scale-100" />
                      </span>
                      <span className="text-center text-xs uppercase tracking-[0.14em] text-taupe-soft transition-colors duration-300 group-hover:text-gold-mist">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
