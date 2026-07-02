type CarouselDotsProps = {
  count: number;
  selectedIndex: number;
  onDotClick: (index: number) => void;
  tone?: "light" | "dark";
};

export default function CarouselDots({
  count,
  selectedIndex,
  onDotClick,
  tone = "dark",
}: CarouselDotsProps) {
  const active = tone === "light" ? "w-6 bg-cream" : "w-6 bg-gold";
  const inactive = tone === "light" ? "w-1.5 bg-cream/30" : "w-1.5 bg-charcoal/15";

  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onDotClick(i)}
          aria-label={`Ir para item ${i + 1}`}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === selectedIndex ? active : inactive
          }`}
        />
      ))}
    </div>
  );
}
