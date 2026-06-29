import ProductCard from "./ProductCard";

/**
 * A vertical marquee column.
 *
 * - `direction`: "up" | "down"
 * - `delay`: negative CSS animationDelay string ("-20s") to stagger columns
 * - Pauses when the user hovers anywhere in the column (group-hover).
 *
 * The track contains the products list twice, so a translateY of -50%
 * lines the second copy up exactly where the first started → seamless loop.
 */
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
      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black via-black/80 to-transparent" />

      {/* Track */}
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

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  );
}
