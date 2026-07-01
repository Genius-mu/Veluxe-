import ProductCard from "./ProductCard";

export default function MarqueeColumn({
  products,
  direction = "up",
  delay = "0s",
  onSelect,
}) {
  const loop = [...products, ...products];
  const animClass =
    direction === "down" ? "animate-marquee-down" : "animate-marquee-up";

  return (
    <div className="group relative h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-ink via-ink/80 to-transparent" />

      <div
        className={`flex flex-col gap-4 ${animClass} group-hover:[animation-play-state:paused] motion-reduce:!animate-none`}
        style={{ animationDelay: delay }}
      >
        {loop.map((product, i) => (
          <ProductCard
            key={`${product.id}-${i}`}
            product={product}
            onClick={() => onSelect(product)}
            eager={i < 2}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
    </div>
  );
}
