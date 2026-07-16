import { Reveal } from "@/lib/motion";
import { MAPS_EMBED_URL, SITE } from "@/config/site";

/**
 * Mapa real do Google (Embed) com o pin fixo na Tuagê.
 * Moldura no mesmo padrão das fotos do site: cantos generosos,
 * sombra suave e leve realce dourado.
 */
export default function MapCard() {
  return (
    <Reveal variant="image" className="h-full">
      <div className="group relative h-full overflow-hidden rounded-[2rem] border border-charcoal/8 bg-sand shadow-soft">
        <iframe
          title={`Mapa — ${SITE.name}`}
          src={MAPS_EMBED_URL}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full min-h-[320px] w-full border-0 grayscale-[18%] transition-[filter] duration-500 ease-out group-hover:grayscale-0 md:min-h-[420px]"
        />

        {/* Realce dourado sutil na borda inferior, seguindo o padrão editorial */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>
    </Reveal>
  );
}
