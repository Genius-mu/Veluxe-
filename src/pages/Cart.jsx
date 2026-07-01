import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import CartSummary, { calcTotals } from "../components/CartSummary";
import EmptyCart from "../components/EmptyCart";
import { useCart } from "../context/CartContext";

const parsePrice = (s) => parseFloat(String(s).replace(/[^0-9.]/g, "")) || 0;

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CartPage() {
  const { items, updateQty, remove, count } = useCart();
  const totals = useMemo(() => calcTotals(items, parsePrice), [items]);

  if (items.length === 0) return <EmptyCart />;

  return (
    <main className="min-h-screen bg-ink text-paper">
      <section className="px-6 pt-32 pb-12 sm:px-10 sm:pt-40 sm:pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mx-auto max-w-[1400px]"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="h-px w-8 bg-paper/40" />
            <span className="font-mono text-[11px] uppercase tracking-wider2 text-paper/50">
              {count} {count === 1 ? "piece" : "pieces"} · ready when you are
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-4 font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
          >
            Your Cart.
          </motion.h1>
        </motion.div>
      </section>

      <section className="px-6 pb-32 sm:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          <div>
            <div className="flex items-center justify-between border-b border-paper/15 pb-3 font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
              <span>Item</span>
              <span>Price</span>
            </div>
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CartItem
                    item={item}
                    onUpdate={updateQty}
                    onRemove={remove}
                  />
                </motion.div>
              ))}
            </AnimatePresence>

            <Link
              to="/products"
              className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider2 text-paper/60 transition-colors hover:text-paper"
            >
              ← Continue shopping
            </Link>
          </div>

          <div className="lg:sticky lg:top-32 lg:self-start">
            <CartSummary totals={totals} />
          </div>
        </div>
      </section>
    </main>
  );
}
