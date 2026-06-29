import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import MarqueeColumn from "../components/MarqueeColumn";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { products } from "../lib/product";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProductsPage() {
  const [selected, setSelected] = useState(null);

  // Split the catalogue across three columns.
  const [col1, col2, col3] = useMemo(() => {
    const a = products.slice(0, 4);
    const b = products.slice(4, 8);
    const c = products.slice(8, 12);
    return [a, b, c];
  }, []);

  return (
    <main className="min-h-screen bg-black text-ink">
      {/* ── Page header ─────────────────────────────────────────── */}
      <section className="px-6 pt-32 pb-12 sm:px-10 sm:pt-40 sm:pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mx-auto flex max-w-[1400px] flex-col items-center text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-ink" />
            <span className="font-mono text-[11px] uppercase tracking-wider2 text-smoke">
              The Catalogue
            </span>
            <span className="h-px w-8 bg-ink" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl text-white/30"
          >
            Slowly made.
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight text-coral sm:text-6xl md:text-7xl"
          >
            Worth keeping.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/60"
          >
            Every Veluxe piece earns its shelf. Hover any column to linger, tap
            any piece to read the full story.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Marquee grid (desktop) ──────────────────────────────── */}
      <section className="hidden px-4 pb-24 sm:px-6 md:block">
        <div className="mx-auto grid h-[78vh] min-h-[640px] max-w-[1400px] grid-cols-3 gap-4">
          <MarqueeColumn
            products={col1}
            direction="up"
            delay="0s"
            onSelect={setSelected}
          />
          <MarqueeColumn
            products={col2}
            direction="down"
            delay="-30s"
            onSelect={setSelected}
          />
          <MarqueeColumn
            products={col3}
            direction="up"
            delay="-60s"
            onSelect={setSelected}
          />
        </div>
      </section>

      {/* ── Mobile grid (no marquee — easier on small screens) ──── */}
      <section className="px-4 pb-24 md:hidden">
        <div className="mx-auto grid max-w-[680px] grid-cols-2 gap-3">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </section>

      {/* ── Modal ───────────────────────────────────────────────── */}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
