import { Reveal } from "@/lib/motion";
import sobreImage from "@/assets/images/Sobre.png";

export default function About() {
  return (
    <section id="sobre" className="section py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="image">
          <div className="relative aspect-[5/6]">
            <img src={sobreImage} alt="Tuagê Eventos" className="rounded-[2rem] shadow-soft w-full h-full object-cover object-top" />
            <div className="absolute -right-6 -top-6 hidden h-32 w-32 items-center justify-center rounded-full border border-gold/30 bg-cream/90 text-center backdrop-blur-md sm:flex">
              <p className="font-serif text-sm leading-tight text-charcoal">
                desde
                <br />
                <span className="text-xl text-gold">2015</span>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow">Sobre a Tuagê</span>
          </Reveal>

          <Reveal variant="heading" delay={0.05}>
            <h2 className="text-balance mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-charcoal">
              Um espaço construído para celebrar os momentos mais importantes
              da sua vida
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl leading-relaxed text-taupe">
              Atuamos da concepção ao desenvolvimento e realização de eventos
              festivos, sociais e corporativos, com conceitos criativos e
              inovadores para surpreender as expectativas de cada cliente.
              Nossa infraestrutura moderna atende aos mais altos padrões de
              segurança e acessibilidade, com ambientes amplos, requinte,
              conforto e mobiliário clássico.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-xl leading-relaxed text-taupe">
              Na cozinha, tecnologia de ponta garante agilidade sem abrir mão
              da segurança alimentar — tudo conduzido por uma equipe
              comprometida com a entrega e a satisfação de cada cliente, do
              primeiro contato ao último brinde.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex items-start gap-4 rounded-[1.5rem] border border-gold/20 bg-cream/70 p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg sm:mr-6">
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-lg text-gold animate-pulse">
                ✦
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  Da origem à experiência
                </p>
                <p className="mt-2 text-sm leading-relaxed text-taupe">
                  Tudo começou com a visão de quem acreditou que cada celebração merece acolhimento, beleza e um toque único de verdade.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
