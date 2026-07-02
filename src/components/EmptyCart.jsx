import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function EmptyCart() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-6 text-paper">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="mx-auto max-w-md text-center"
      >
        <motion.div
          variants={fadeUp}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-paper/40" />
          <span className="font-mono text-[11px] uppercase tracking-wider2 text-paper/50">
            Your cart
          </span>
          <span className="h-px w-8 bg-paper/40" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
        >
          Empty,
        </motion.h1>
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight text-coral sm:text-6xl md:text-7xl"
        >
          for now.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 text-[15px] leading-relaxed text-paper/60"
        >
          Nothing to slow down for yet. Browse the catalogue and find a piece
          worth keeping.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <a
            href="/products"
            className="group relative inline-flex overflow-hidden border border-paper px-7 py-3"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative font-mono text-[11px] uppercase tracking-wider2 text-paper transition-colors duration-300 group-hover:text-ink">
              Browse the Catalogue
            </span>
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
