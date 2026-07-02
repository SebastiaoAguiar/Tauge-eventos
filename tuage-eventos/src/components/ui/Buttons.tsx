import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function GoldButton({ href, children, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative inline-flex items-center justify-center gap-2.5
        overflow-hidden rounded-full bg-charcoal px-8 py-4
        text-sm font-semibold tracking-wide text-cream
        transition-all duration-500 hover:shadow-[0_18px_40px_-12px_rgba(38,34,32,0.55)]
        ${className}
      `}
    >
      <span
        className="
          pointer-events-none absolute inset-0 -translate-x-full
          bg-gradient-to-r from-transparent via-gold-mist/25 to-transparent
          transition-transform duration-700 group-hover:translate-x-full
        "
      />
      <span className="relative z-10">{children}</span>
      <ArrowUpRight
        size={16}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

export function OutlineButton({ href, children, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-2.5 rounded-full
        border border-charcoal/25 px-8 py-4 text-sm font-semibold tracking-wide
        text-charcoal transition-all duration-400
        hover:border-charcoal hover:bg-charcoal hover:text-cream
        ${className}
      `}
    >
      {children}
    </a>
  );
}

/** Variante clara para uso sobre fotos/fundos escuros (ex.: Hero em tela cheia). */
export function GhostButton({ href, children, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`
        inline-flex items-center justify-center gap-2.5 rounded-full
        border border-cream/40 px-8 py-4 text-sm font-semibold tracking-wide
        text-cream backdrop-blur-sm transition-all duration-400
        hover:border-cream hover:bg-cream hover:text-charcoal
        ${className}
      `}
    >
      {children}
    </a>
  );
}
