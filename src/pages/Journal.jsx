import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import ArticleCard from "../components/ArticleCard";
import FeaturedArticle from "../components/FeaturedArticle";
import { articles, categories } from "../lib/articles";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function JournalPage() {
  const [active, setActive] = useState("All");
  const [email, setEmail] = useState("");

  const featured = useMemo(() => articles.find((a) => a.featured), []);
  const rest = useMemo(() => articles.filter((a) => !a.featured), []);

  const visible = useMemo(() => {
    if (active === "All") return rest;
    return rest.filter((a) => a.category === active);
  }, [active, rest]);

  return (
    <main className="min-h-screen bg-ink text-paper">
      {/* ── Page header ─────────────────────────────────────────── */}
      <section className="px-6 pt-32 pb-16 sm:px-10 sm:pt-40 sm:pb-20">
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
            <span className="h-px w-8 bg-paper/40" />
            <span className="font-mono text-[11px] uppercase tracking-wider2 text-paper/50">
              Vol. 03 · 2026
            </span>
            <span className="h-px w-8 bg-paper/40" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
          >
            The Journal.
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight text-coral sm:text-6xl md:text-7xl"
          >
            Slow words, slow skin.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-paper/60"
          >
            Field notes from the workshop, ingredient deep-dives, and the
            rituals we keep. New essays the first Sunday of every month.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Featured ────────────────────────────────────────────── */}
      {featured && (
        <section className="px-6 pb-24 sm:px-10 sm:pb-32">
          <div className="mx-auto max-w-[1400px]">
            <FeaturedArticle article={featured} />
          </div>
        </section>
      )}

      {/* ── Filter strip ────────────────────────────────────────── */}
      <section className="border-y border-paper/10 px-6 py-5 sm:px-10">
        <div className="mx-auto flex max-w-[1400px] items-center gap-3 overflow-x-auto no-scrollbar">
          <span className="hidden font-mono text-[10px] uppercase tracking-wider2 text-paper/40 sm:inline">
            Filter by —
          </span>
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`relative whitespace-nowrap border px-4 py-2 font-mono text-[11px] uppercase tracking-wider2 transition-all duration-300 ${
                  isActive
                    ? "border-coral bg-coral text-paper"
                    : "border-paper/20 text-paper/60 hover:border-paper hover:text-paper"
                }`}
              >
                {cat}
              </button>
            );
          })}
          <div className="ml-auto hidden font-mono text-[10px] uppercase tracking-wider2 text-paper/40 sm:inline">
            {visible.length} {visible.length === 1 ? "piece" : "pieces"}
          </div>
        </div>
      </section>

      {/* ── Grid ────────────────────────────────────────────────── */}
      <section className="px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </motion.div>
          </AnimatePresence>

          {visible.length === 0 && (
            <div className="py-20 text-center font-mono text-sm uppercase tracking-wider2 text-paper/40">
              Nothing here yet. Check back soon.
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────────────── */}
      <section className="border-t border-paper/10 px-6 py-24 sm:px-10 sm:py-28">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-[1400px] flex-col items-center text-center"
        >
          <span className="mb-4 font-mono text-[11px] uppercase tracking-wider2 text-paper/50">
            Read on
          </span>
          <h2 className="font-display text-4xl font-medium uppercase tracking-[0.18em] sm:text-5xl md:text-6xl">
            Letters from the Press
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/60">
            One essay a month, sent on Sundays. Ingredient stories, slow
            recipes, and the occasional invitation to a tasting. No noise.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@elsewhere.com"
              className="flex-1 border border-paper/15 bg-paper/5 px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-paper focus:outline-none"
            />
            <button
              type="button"
              className="group relative overflow-hidden bg-coral px-7 py-3 text-paper"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative font-mono text-[11px] uppercase tracking-wider2 transition-colors duration-300 group-hover:text-ink">
                Subscribe
              </span>
            </button>
          </div>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
            Unsubscribe in one click · We never share email
          </p>
        </motion.div>
      </section>
    </main>
  );
}
