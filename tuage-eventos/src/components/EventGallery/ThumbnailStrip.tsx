import { useEffect, useRef } from "react";

type ThumbnailStripProps = {
  images: string[];
  index: number;
  title: string;
  onSelect: (index: number) => void;
};

/**
 * Faixa horizontal de miniaturas — inspirada nos Stories/Destaques.
 * A miniatura ativa ganha um anel dourado e é mantida sempre à vista
 * (a faixa rola sozinha acompanhando a navegação).
 */
export default function ThumbnailStrip({ images, index, title, onSelect }: ThumbnailStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Centraliza a miniatura ativa conforme o usuário navega.
  useEffect(() => {
    const container = containerRef.current;
    const thumb = thumbRefs.current[index];
    if (!container || !thumb) return;
    container.scrollTo({
      left: thumb.offsetLeft - container.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <div
      ref={containerRef}
      className="no-scrollbar -mx-1 flex gap-3 overflow-x-auto px-1 py-2"
    >
      {images.map((src, i) => {
        const isActive = i === index;
        return (
          <button
            key={src}
            ref={(el) => {
              thumbRefs.current[i] = el;
            }}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Ver foto ${i + 1} de ${title}`}
            aria-current={isActive}
            className={`group relative h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-[0_10px_24px_-12px_rgba(38,34,32,0.4)] transition-all duration-300 md:h-20 md:w-20 ${
              isActive
                ? "ring-2 ring-gold ring-offset-2 ring-offset-cream"
                : "opacity-60 hover:-translate-y-0.5 hover:opacity-100"
            }`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-400 ease-out group-hover:scale-110"
            />
          </button>
        );
      })}
    </div>
  );
}
