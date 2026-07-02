import { Minus, Plus } from "lucide-react";

const parsePrice = (s) => parseFloat(String(s).replace(/[^0-9.]/g, "")) || 0;
const formatPrice = (n) => `$${n.toFixed(2)}`;

function QuantityControl({ value, onChange }) {
  return (
    <div className="inline-flex items-center border border-paper/15">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        disabled={value <= 1}
        aria-label="Decrease quantity"
        className="grid h-9 w-9 place-items-center text-paper transition-colors hover:bg-paper/10 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Minus className="h-3 w-3" />
      </button>
      <span className="grid h-9 w-10 place-items-center font-mono text-sm tabular-nums text-paper">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
        className="grid h-9 w-9 place-items-center text-paper transition-colors hover:bg-paper/10"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
}

/**
 * One row in the cart — image · content · price/qty · remove.
 */
export default function CartItem({ item, onUpdate, onRemove }) {
  const unit = parsePrice(item.price);
  const lineTotal = unit * item.quantity;

  return (
    <div className="flex gap-4 border-b border-paper/10 py-6 sm:gap-6">
      {/* Image */}
      <a
        href={`#${item.id}`}
        className="block aspect-[4/5] w-20 flex-shrink-0 overflow-hidden bg-paper/5 sm:w-24"
        aria-label={`View ${item.name}`}
      >
        <img
          src={item.image}
          alt={item.name}
          draggable="false"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.05]"
        />
      </a>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top row — name + line total */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
              {item.badge}
            </span>
            <h3 className="mt-1 truncate font-display text-xl font-medium uppercase tracking-tight text-paper sm:text-2xl">
              {item.name}
            </h3>
            <p className="mt-1 text-xs text-paper/50">{item.tagline}</p>
            {item.quantity > 1 && (
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
                {formatPrice(unit)} each
              </p>
            )}
          </div>
          <div className="whitespace-nowrap font-display text-xl text-paper sm:text-2xl">
            {formatPrice(lineTotal)}
          </div>
        </div>

        {/* Bottom row — qty + remove */}
        <div className="mt-auto flex items-center justify-between pt-4">
          <QuantityControl
            value={item.quantity}
            onChange={(q) => onUpdate(item.id, q)}
          />
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="font-mono text-[10px] uppercase tracking-wider2 text-paper/40 transition-colors hover:text-coral"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
