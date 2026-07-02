import type { ReactNode } from "react";

export type Tone =
  | "gold"
  | "linen"
  | "charcoal"
  | "sand"
  | "taupe"
  | "terracotta"
  | "olive"
  | "wood";

const TONES: Record<Tone, string> = {
  gold: "linear-gradient(155deg, #E7D6AE 0%, #C9A768 45%, #9C7B44 100%)",
  linen: "linear-gradient(155deg, #FBF7EF 0%, #EFE4CC 55%, #DCC99B 100%)",
  charcoal: "linear-gradient(155deg, #4A423A 0%, #2A2521 60%, #171412 100%)",
  sand: "linear-gradient(155deg, #F1E6D2 0%, #E0CDA7 55%, #C6A468 100%)",
  taupe: "linear-gradient(155deg, #C9BCA6 0%, #A9977E 55%, #7C6B57 100%)",
  terracotta: "linear-gradient(155deg, #E9C3A8 0%, #C17A52 55%, #8C5334 100%)",
  olive: "linear-gradient(155deg, #C9CBA3 0%, #87895E 55%, #5C5E3C 100%)",
  wood: "linear-gradient(155deg, #8A6440 0%, #6B4A34 55%, #3E2A1C 100%)",
};

type FrameProps = {
  tone?: Tone;
  ratio?: string; // aspect-ratio css value, e.g. "4 / 5"
  className?: string;
  children?: ReactNode;
  label?: string;
};

/**
 * Bloco visual "photo-ready": até que as fotos reais do espaço/eventos
 * sejam enviadas, este componente ocupa o lugar das imagens com uma
 * composição editorial (gradiente + textura de grão), mantendo a
 * sensação premium do layout. Basta trocar por <img> quando as fotos
 * chegarem — a proporção (ratio) já está definida para cada seção.
 */
export default function Frame({
  tone = "gold",
  ratio = "4 / 5",
  className = "",
  children,
  label,
}: FrameProps) {
  return (
    <div
      className={`relative overflow-hidden grain ${className}`}
      style={{ aspectRatio: ratio, background: TONES[tone] }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
      {label ? (
        <span className="absolute bottom-4 left-4 text-[11px] tracking-[0.2em] uppercase text-white/70 font-medium">
          {label}
        </span>
      ) : null}
      {children}
    </div>
  );
}
