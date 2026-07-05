import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";
import logo from "/src/assets/images/Logo.png";
import { SITE } from "@/config/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-charcoal/10 bg-cream-soft">
      <img
        src={logo}
        alt="Tuagê Eventos"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-auto opacity-[0.05]"
      />

      <div className="section relative py-16">
        <RevealGroup stagger={0.08} className="grid gap-12 md:grid-cols-4">
          <RevealItem>
            <div className="flex items-center">
              <img src={logo} alt="Tuagê Eventos" className="h-10 w-auto sm:h-12" />
            </div>
            <p className="mt-4 max-w-xs leading-relaxed text-taupe">
              Espaço exclusivo para casamentos, festas de 15 anos e eventos
              corporativos que exigem sofisticação e cuidado em cada detalhe.
            </p>
          </RevealItem>

          <RevealItem>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-charcoal">
              Navegação
            </h4>
            <div className="flex flex-col gap-3 text-taupe">
              <a href="#sobre" className="transition hover:text-gold">Sobre</a>
              <a href="#eventos" className="transition hover:text-gold">Tipos de eventos</a>
              <a href="#galeria" className="transition hover:text-gold">Galeria</a>
              <a href="#faq" className="transition hover:text-gold">FAQ</a>
            </div>
          </RevealItem>

          <RevealItem>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-charcoal">
              Contato
            </h4>
            <div className="flex flex-col gap-3 text-taupe">
              <span className="flex items-center gap-2">
                <Phone size={15} className="text-gold" /> {SITE.phoneDisplay}
              </span>
              <span className="flex items-center gap-2">
                <Mail size={15} className="text-gold" /> {SITE.email}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-gold" /> {SITE.city}
              </span>
            </div>
          </RevealItem>

          <RevealItem>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-charcoal">
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              <a href="/privacidade" className="text-taupe transition hover:text-gold">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-taupe transition hover:text-gold">
                Termos de Uso
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-taupe transition hover:text-gold"
              >
                <Instagram size={15} /> Instagram
              </a>
            </div>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-charcoal/10 pt-6 text-sm text-taupe md:flex-row">
            <p>© {new Date().getFullYear()} Tuagê Eventos. Todos os direitos reservados.</p>
            <p>Tuagê Eventos — Eternizando sonhos.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
