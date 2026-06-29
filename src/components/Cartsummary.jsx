import { motion } from "framer-motion";
import { Check } from "lucide-react";

const formatPrice = (n) => `$${n.toFixed(2)}`;

const FREE_SHIPPING_THRESHOLD = 60;
const SHIPPING_FLAT = 8;
const TAX_RATE = 0.075;

export function calcTotals(items, parse) {
  const subtotal = items.reduce(
    (sum, item) => sum + parse(item.price) * item.quantity,
    0,
  );
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  return { subtotal, shipping, tax, total, remaining, progress };
}

export default function CartSummary({ totals }) {
  const { subtotal, shipping, tax, total, remaining, progress } = totals;

  return (
    <aside className="bg-paper/5 p-6 sm:p-8">
      <h2 className="font-display text-2xl font-medium uppercase tracking-tight text-paper">
        Summary
      </h2>

      {/* Free-shipping progress */}
      <div className="mt-6">
        {remaining > 0 ? (
          <>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider2">
              <span className="text-paper/50">
                Add {formatPrice(remaining)} for free shipping
              </span>
              <span className="text-paper/40 tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="mt-2 h-1 overflow-hidden bg-paper/10">
              <motion.div
                className="h-full bg-coral"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider2 text-velvet">
            <Check className="h-3 w-3" />
            <span>Free shipping unlocked</span>
          </div>
        )}
      </div>

      {/* Lines */}
      <dl className="mt-8 space-y-3 border-t border-paper/10 pt-6 text-sm">
        <div className="flex justify-between text-paper/70">
          <dt>Subtotal</dt>
          <dd className="font-mono tabular-nums">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between text-paper/70">
          <dt>Shipping</dt>
          <dd className="font-mono tabular-nums">
            {shipping === 0 ? "Free" : formatPrice(shipping)}
          </dd>
        </div>
        <div className="flex justify-between text-paper/70">
          <dt>
            Tax{" "}
            <span className="font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
              (est.)
            </span>
          </dt>
          <dd className="font-mono tabular-nums">{formatPrice(tax)}</dd>
        </div>
      </dl>

      {/* Total */}
      <div className="mt-6 flex items-baseline justify-between border-t border-paper/10 pt-6">
        <span className="font-mono text-[11px] uppercase tracking-wider2 text-paper/60">
          Total
        </span>
        <motion.span
          key={total}
          initial={{ opacity: 0.4, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="font-display text-3xl font-medium text-paper tabular-nums"
        >
          {formatPrice(total)}
        </motion.span>
      </div>

      {/* Checkout */}
      <button
        type="button"
        className="group relative mt-6 w-full overflow-hidden bg-coral px-7 py-4 text-paper"
      >
        <span className="absolute inset-0 origin-left scale-x-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-x-100" />
        <span className="relative font-mono text-[11px] uppercase tracking-wider2 transition-colors duration-300 group-hover:text-ink">
          Continue to Checkout
        </span>
      </button>

      {/* Promo code */}
      <details className="mt-6 group">
        <summary className="cursor-pointer font-mono text-[10px] uppercase tracking-wider2 text-paper/50 transition-colors hover:text-paper">
          <span className="group-open:hidden">＋ Have a promo code?</span>
          <span className="hidden group-open:inline">－ Promo code</span>
        </summary>
        <div className="mt-3 flex gap-2">
          <input
            type="text"
            placeholder="VELUXE10"
            className="flex-1 border border-paper/15 bg-paper/5 px-3 py-2 font-mono text-xs uppercase tracking-wider2 text-paper placeholder:text-paper/30 focus:border-paper focus:outline-none"
          />
          <button
            type="button"
            className="bg-paper px-4 py-2 font-mono text-[10px] uppercase tracking-wider2 text-ink transition-colors hover:bg-coral hover:text-paper"
          >
            Apply
          </button>
        </div>
      </details>

      <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
        Secure checkout · 30-day returns
      </p>
    </aside>
  );
}
