type Tone = "gold" | "cream" | "charcoal" | "terracotta" | "currentColor";

const TONE_COLORS: Record<Tone, string> = {
  gold: "var(--color-gold)",
  cream: "var(--color-cream)",
  charcoal: "var(--color-charcoal)",
  terracotta: "var(--color-terracotta)",
  currentColor: "currentColor",
};

type TuageMarkProps = {
  size?: number;
  className?: string;
  tone?: Tone;
  strokeWidth?: number;
};

/**
 * Marca autoral da Tuagê: duas curvas espelhadas girando em torno de um
 * ponto central, inspiradas no movimento circular da dança Kahê-Tuagê e no
 * encontro entre duas presenças — abstrato, sem citar grafismos indígenas.
 * Reaproveitada como favicon, watermark, divisor de seção e hover.
 */
export default function TuageMark({
  size = 48,
  className = "",
  tone = "gold",
  strokeWidth = 3.4,
}: TuageMarkProps) {
  const color = TONE_COLORS[tone];

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50,14 C69,14 81,29 81,49 C81,66 68,79 51,81 C60,76 65,66 65,55 C65,41 55,31 41,31 C35,31 30,33 26,37 C32,21 40,14 50,14 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50,86 C31,86 19,71 19,51 C19,34 32,21 49,19 C40,24 35,34 35,45 C35,59 45,69 59,69 C65,69 70,67 74,63 C68,79 60,86 50,86 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="50" r="3.2" fill={color} />
    </svg>
  );
}
