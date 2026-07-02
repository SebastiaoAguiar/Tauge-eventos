import TuageMark from "@/components/ui/TuageMark";

type SectionDividerProps = {
  className?: string;
  flip?: boolean;
};

/**
 * Costura orgânica entre seções: uma única onda suave em vez de uma linha
 * reta, com a marca da Tuagê centralizada — usada com moderação, apenas ao
 * redor da seção de origem do nome.
 */
export default function SectionDivider({ className = "", flip = false }: SectionDividerProps) {
  return (
    <div className={`relative h-14 w-full overflow-hidden md:h-20 ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,50 C240,88 480,12 720,50 C960,88 1200,12 1440,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-charcoal/12"
        />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <TuageMark size={26} tone="gold" className="opacity-40" />
      </div>
    </div>
  );
}
