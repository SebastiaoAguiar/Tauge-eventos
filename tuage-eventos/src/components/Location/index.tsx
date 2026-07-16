import { MapPin, Landmark, Clock, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";
import { GoldButton } from "@/components/ui/Buttons";
import MapCard from "@/components/Location/MapCard";
import { LOCATION, MAPS_LINK, SITE } from "@/config/site";

type InfoItem = { icon: LucideIcon; label: string; value: string };

const INFO_ITEMS: InfoItem[] = [
  {
    icon: MapPin,
    label: "Endereço",
    value: `${LOCATION.address} — ${LOCATION.city}, ${LOCATION.state} · CEP ${LOCATION.zip}`,
  },
  ...(LOCATION.reference
    ? [{ icon: Landmark, label: "Referência", value: LOCATION.reference }]
    : []),
  ...(LOCATION.hours
    ? [{ icon: Clock, label: "Atendimento", value: LOCATION.hours }]
    : []),
  { icon: Mail, label: "Contato", value: `${SITE.phoneDisplay} · ${SITE.email}` },
];

/**
 * Seção "Onde Estamos" — âncora #localizacao.
 * Desktop: informações à esquerda, mapa real à direita.
 * Mobile: informações primeiro, mapa logo abaixo.
 */
export default function Location() {
  return (
    <section id="localizacao" className="section py-20 md:py-28">
      <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Coluna de informações */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow">Onde estamos</span>
          </Reveal>

          <Reveal variant="heading" delay={0.05}>
            <h2 className="text-balance mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-charcoal">
              Um espaço fácil de chegar, difícil de esquecer
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md leading-relaxed text-taupe">
              A Tuagê fica em uma região de acesso tranquilo em {LOCATION.city},
              com estrutura completa para receber você e seus convidados. Venha
              conhecer o espaço de perto — será um prazer receber a sua visita.
            </p>
          </Reveal>

          <RevealGroup stagger={0.07} className="mt-9 flex flex-col gap-4">
            {INFO_ITEMS.map((item) => (
              <RevealItem
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-charcoal/8 bg-cream-soft/70 p-4 transition-colors duration-300 hover:border-gold/35"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-cream text-gold">
                  <item.icon size={17} strokeWidth={2} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-taupe">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-charcoal-soft">
                    {item.value}
                  </span>
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="mt-9">
            <GoldButton href={MAPS_LINK}>Abrir no Google Maps</GoldButton>
          </Reveal>
        </div>

        {/* Coluna do mapa */}
        <MapCard />
      </div>
    </section>
  );
}
