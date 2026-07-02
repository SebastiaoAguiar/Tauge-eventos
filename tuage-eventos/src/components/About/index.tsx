import { Reveal } from "@/lib/motion";
import Frame from "@/components/ui/Frame";

export default function About() {
  return (
    <section id="sobre" className="section py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="image">
          <div className="relative">
            <Frame tone="sand" ratio="5 / 6" className="rounded-[2rem] shadow-soft" />
            <div className="absolute -right-6 -top-6 hidden h-32 w-32 items-center justify-center rounded-full border border-gold/30 bg-cream/90 text-center backdrop-blur-md sm:flex">
              <p className="font-serif text-sm leading-tight text-charcoal">
                desde
                <br />
                <span className="text-xl text-gold">2013</span>
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
              A Tuagê Eventos nasceu do desejo de oferecer uma experiência
              completa e sem preocupações: uma estrutura sofisticada, equipe
              especializada e um olhar cuidadoso para cada detalhe — do
              primeiro contato ao último brinde. Recebemos casamentos, festas
              de 15 anos e eventos corporativos com o mesmo padrão de
              excelência.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 grid grid-cols-3 gap-6 sm:grid-cols-3">
              {[
                { n: "1.200m²", l: "de área total" },
                { n: "500", l: "convidados sentados" },
                { n: "12", l: "anos de mercado" },
              ].map((item) => (
                <div key={item.l} className="border-l-2 border-gold/30 pl-4">
                  <p className="font-serif text-2xl text-charcoal">{item.n}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-taupe">
                    {item.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
