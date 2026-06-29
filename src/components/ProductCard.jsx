/**
 * Single product tile.
 * Default state: just the image.
 * Hover state: dark gradient + name / price / view affordance slides up.
 * Click → opens the modal (handled by parent).
 */
export default function ProductCard({ product, onClick, eager = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group/card relative block w-full overflow-hidden bg-paper text-left"
      aria-label={`View ${product.name}`}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-mist/20">
        <img
          src={product.image}
          alt={product.name}
          loading={eager ? "eager" : "lazy"}
          draggable="false"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-[1.04]"
        />

        {/* Top badge — always visible, subtle */}
        <div className="absolute left-3 top-3 bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider2 text-ink backdrop-blur-sm">
          {product.badge}
        </div>

        {/* Hover overlay */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-5 opacity-0 transition-opacity duration-500 ease-out group-hover/card:opacity-100">
          <span className="font-mono text-[10px] uppercase tracking-wider2 text-paper/70">
            {product.tagline}
          </span>
          <span className="mt-1 font-display text-xl uppercase tracking-tight text-paper">
            {product.name}
          </span>
          <div className="mt-3 flex items-center justify-between border-t border-paper/20 pt-3 text-paper">
            <span className="font-mono text-xs">{product.price}</span>
            <span className="font-mono text-[10px] uppercase tracking-wider2">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
