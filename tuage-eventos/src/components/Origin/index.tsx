import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/lib/motion";
import Frame from "@/components/ui/Frame";
import TuageMark from "@/components/ui/TuageMark";

const BEATS = ["A seca", "A dança", "A celebração"];

export default function Origin() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const markRotate = useTransform(scrollYProgress, [0, 1], [-16, 16]);
  const markY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const tracePath = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);

  return (
    <section
      id="origem"
      ref={sectionRef}
      className="texture-linen relative overflow-hidden bg-gradient-to-b from-charcoal via-wood/55 to-charcoal py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-terracotta/20 blur-[150px]" />

      <div className="section relative grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Visual composition */}
        <Reveal variant="image">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <motion.div
              style={{ y: markY }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
              <TuageMark size={340} tone="terracotta" className="opacity-[0.14]" />
            </motion.div>

            <div className="relative grid grid-cols-2 gap-5">
              <Frame
                tone="wood"
                ratio="3 / 4"
                className="mt-10 rounded-[1.75rem] shadow-soft"
                label="Cerrado"
              />
              <Frame
                tone="terracotta"
                ratio="3 / 4"
                className="rounded-[1.75rem] shadow-soft"
                label="Movimento"
              />
            </div>

            <motion.div
              style={{ rotate: markRotate }}
              className="absolute -bottom-8 -right-6 hidden sm:block"
            >
              <TuageMark size={72} tone="gold" />
            </motion.div>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <span className="eyebrow text-gold-mist">A origem do nome</span>
          </Reveal>

          <Reveal variant="heading" delay={0.05}>
            <h2 className="text-balance mt-4 text-[clamp(2.2rem,5vw,3.6rem)] italic leading-[1.1] text-cream">
              Kahê-Tuagê
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
              O nome Tuagê nasce da história do Tocantins. Inspirado na dança
              Kahê-Tuagê, realizada pelo povo Kanela durante o período da
              seca, ele representa celebração, encontro e a força do elemento
              feminino.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-4 max-w-lg leading-relaxed text-cream/55">
              Hoje, essa essência continua viva em cada evento realizado pela
              Tuagê Eventos.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-14 max-w-lg">
              <svg
                viewBox="0 0 400 30"
                preserveAspectRatio="none"
                className="pointer-events-none h-6 w-full"
              >
                <motion.path
                  d="M10,15 C90,-3 130,33 200,15 C270,-3 310,33 390,15"
                  fill="none"
                  stroke="var(--color-terracotta-soft)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{ pathLength: tracePath }}
                />
              </svg>
              <div className="mt-3 flex justify-between text-center">
                {BEATS.map((label) => (
                  <div key={label} className="flex flex-col items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                    <span className="text-xs uppercase tracking-[0.14em] text-taupe-soft">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
