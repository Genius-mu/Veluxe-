import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { images } from "../lib/images";

const journeys = [
  {
    eyebrow: "Our quiet promise",
    headline: "Beauty that",
    headlineAccent: "leaves room.",
    body: "Carbon-positive packaging. Refillable everything. No rituals you can't pronounce. We measure what we make — every batch, every shipment, every shelf.",
    image: images.journeyModel,
    floatTop: "Carbon",
    floatBottom: "Journey",
  },
  {
    eyebrow: "Our slow craft",
    headline: "Small batch,",
    headlineAccent: "long memory.",
    body: "Pressed by hand, poured by hand, labelled by hand. If it doesn't hold up on the second-to-last day of the batch, it doesn't ship.",
    image: images.heroFormula,
    floatTop: "Slow",
    floatBottom: "Made",
  },
  {
    eyebrow: "Our long return",
    headline: "Refill.",
    headlineAccent: "Return. Repeat.",
    body: "Send back any Veluxe glass or aluminium in its shipping mailer. We clean, refill, and take $6 off your next.",
    image: images.heroLifestyle,
    floatTop: "Empty",
    floatBottom: "Back",
  },
];

const fadeRight = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
};

export default function Journey() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const j = journeys[index];

  const go = (delta) => {
    setDir(delta);
    setIndex((i) => (i + delta + journeys.length) % journeys.length);
  };

  return (
    <section id="journal" className="relative overflow-hidden bg-mist">
      {/* top diagonal accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24 bg-paper"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 sm:px-10 sm:py-32 md:grid-cols-2 md:items-center md:gap-20 md:py-40">
        {/* ── Image column ──────────────────────────────────── */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md pl-8 pr-8"
        >
          <div className="relative aspect-[3/4] w-full">
            {/* mint backplate — behind image, hangs off top-left */}
            <div
              aria-hidden
              className="absolute -left-6 -top-6 z-0 hidden h-24 w-24 bg-velvet/30 sm:block"
            />
            {/* striped backplate — behind image, hangs off right */}
            <div
              aria-hidden
              className="absolute -right-6 top-12 z-0 hidden h-32 w-24 sm:block"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(14,14,16,0.14) 0 1px, transparent 1px 8px)",
              }}
            />

            {/* Image + floating words cross-fade on slide change */}
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 h-full w-full"
            >
              <img
                src={j.image}
                alt={`${j.floatTop} ${j.floatBottom}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />

              {/* Floating words — z-20 so they sit above the image */}
              <span className="absolute -left-4 top-4 z-20 bg-coral px-3 font-display text-lg italic text-paper sm:-left-6 sm:text-xl">
                {j.floatTop}
              </span>
              <span className="absolute -right-4 bottom-10 z-20 bg-blue-400 px-3 font-display text-lg italic text-ink sm:-right-6 sm:text-xl">
                {j.floatBottom}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Text column ───────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={fadeRight}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-ink" />
            <motion.span
              key={`eyebrow-${index}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="label-eyebrow"
            >
              {j.eyebrow}
            </motion.span>
          </motion.div>

          <motion.h2
            key={`h2-${index}`}
            initial={{ opacity: 0, x: dir * 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl"
          >
            {j.headline}
            <br />
            <span className="text-coral">{j.headlineAccent}</span>
          </motion.h2>

          <motion.p
            key={`body-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/70"
          >
            {j.body}
          </motion.p>

          <motion.div
            variants={fadeRight}
            className="mt-9 flex items-center gap-4"
          >
            <a
              href="/order"
              className="group relative inline-flex items-center overflow-hidden border border-ink px-7 py-3"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative font-mono text-[11px] uppercase tracking-wider2 transition-colors duration-300 group-hover:text-paper">
                Order Now
              </span>
            </a>

            {/* Paginator — now functional */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous story"
                className="grid h-9 w-9 place-items-center border border-ink/20 text-ink/60 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <span className="mx-2 font-mono text-[10px] tabular-nums uppercase tracking-wider2 text-ink/40">
                0{index + 1} / 0{journeys.length}
              </span>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next story"
                className="grid h-9 w-9 place-items-center border border-ink/20 text-ink/60 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
