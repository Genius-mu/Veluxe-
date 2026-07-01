import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, ArrowUp } from "lucide-react";
import { images } from "../lib/images";

const slides = [
  {
    index: "01 — Origin",
    headlineTop: "MAKE EVERYDAY",
    headlineBottom: "LUXURIOUS",
    body: "Veluxe is a clean cosmetics house. We craft velvet-finish skin and lip rituals that move with you — from first light to last call.",
    image: images.heroModel,
  },
  {
    index: "02 — Formula",
    headlineTop: "SKIN LIKE",
    headlineBottom: "VELVET",
    body: "Pressed in small batches. Squalane, ceramide-3, and oat lipids — never the noise. Every drop earns its place on your shelf.",
    image: images.heroFormula,
  },
  {
    index: "03 — Worn",
    headlineTop: "QUIET LUXURY,",
    headlineBottom: "WORN LOUD",
    body: "Built for the in-between — the run to dinner, the unmade morning, the night that turns into Sunday. Wear it your way.",
    image: images.heroLifestyle,
  },
];

const AUTOPLAY_MS = 7000;

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const textItem = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const [[index, dir], setSlide] = useState([0, 1]);
  const slide = slides[index];

  // Track user interaction to reset the autoplay timer.
  // Bumping this ref via a state counter re-runs the effect below.
  const [tick, setTick] = useState(0);

  // Functional update — never reads stale `index` from closure.
  const go = useCallback((delta) => {
    setSlide(([current]) => {
      const next = (current + delta + slides.length) % slides.length;
      return [next, delta];
    });
    setTick((t) => t + 1); // reset the timer
  }, []);

  // One interval, cleaned up properly.
  // Re-armed when the user clicks (tick changes) or on mount.
  useEffect(() => {
    const id = setInterval(() => {
      setSlide(([current]) => {
        const next = (current + 1) % slides.length;
        return [next, 1];
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [tick]);

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-ink text-paper">
      {/* Subtle grain / vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(61,208,197,0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(242,107,122,0.3), transparent 50%)",
        }}
      />

      {/* Vertical slider rail — left edge */}
      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 sm:left-10 md:block">
        <div className="flex flex-col items-center gap-8">
          {/* Previous — arrow up, label reads bottom-to-top */}
          <button
            onClick={() => go(-1)}
            className="group flex flex-col items-center gap-3 text-paper/70 transition-colors hover:text-paper"
            aria-label="Previous slide"
          >
            <ArrowUp className="h-4 w-4 text-paper/40 transition-transform group-hover:-translate-y-0.5 group-hover:text-paper" />
            <span className="label-eyebrow [writing-mode:vertical-rl] rotate-180">
              Previous
            </span>
          </button>

          {/* Slide counter */}
          <div className="font-mono text-[11px] tabular-nums text-paper/40">
            0{index + 1} / 0{slides.length}
          </div>

          {/* Next — label reads top-to-bottom, arrow down */}
          <button
            onClick={() => go(1)}
            className="group flex flex-col items-center gap-3 text-paper/70 transition-colors hover:text-paper"
            aria-label="Next slide"
          >
            <span className="label-eyebrow [writing-mode:vertical-rl]">
              Next
            </span>
            <ArrowUp className="h-4 w-4 rotate-180 text-coral transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pt-32 pb-24 sm:px-10 md:flex-row md:items-center md:gap-12 md:pt-40">
        {/* Left — text column */}
        <div className="relative flex-1 md:max-w-xl">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              variants={textContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <motion.div
                variants={textItem}
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-coral" />
                <span className="label-eyebrow text-paper/60">
                  {slide.index}
                </span>
              </motion.div>

              <motion.h1
                variants={textItem}
                className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-[5.5rem]"
              >
                {slide.headlineTop}
              </motion.h1>
              <motion.h1
                variants={textItem}
                className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight text-coral sm:text-6xl md:text-[5.5rem]"
              >
                {slide.headlineBottom}
              </motion.h1>

              <motion.p
                variants={textItem}
                className="mt-7 max-w-md text-sm leading-relaxed text-paper/70 sm:text-[15px]"
              >
                {slide.body}
              </motion.p>

              <motion.div variants={textItem} className="mt-10">
                <button
                  type="button"
                  className="group flex items-center gap-4 text-paper"
                >
                  <span className="relative grid h-12 w-12 place-items-center">
                    <span className="absolute inset-0 rounded-full border border-velvet/60 transition-transform duration-500 group-hover:scale-110" />
                    <span className="absolute inset-1 rounded-full bg-velvet/10" />
                    <Play className="relative h-4 w-4 fill-velvet text-velvet" />
                  </span>
                  <span className="label-eyebrow text-paper">Watch Intro</span>
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right — V cutout */}
        <div className="relative mt-16 flex flex-1 items-center justify-center md:mt-0">
          <VCutout image={slide.image} direction={dir} sliceKey={index} />
        </div>
      </div>

      {/* Bottom diagonal bleed into next section */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-32 bg-champagne"
        style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%)" }}
      />
    </section>
  );
}

/* ─────────────────────────────────────────────
   V cutout — same image through a V-shaped mask,
   sliced into two duotone panels (coral + teal)
   ───────────────────────────────────────────── */
function VCutout({ image, direction, sliceKey }) {
  return (
    <div className="relative aspect-[3/4] w-full max-w-[420px]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.svg
          key={sliceKey}
          viewBox="0 0 400 540"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          initial={{
            opacity: 0,
            scale: 0.96,
            x: direction > 0 ? 60 : -60,
          }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{
            opacity: 0,
            scale: 0.96,
            x: direction > 0 ? -60 : 60,
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <defs>
            <clipPath id={`v-left-${sliceKey}`}>
              <polygon points="0,0 130,0 200,540 175,540" />
            </clipPath>
            <clipPath id={`v-right-${sliceKey}`}>
              <polygon points="270,0 400,0 225,540 200,540" />
            </clipPath>

            <filter id={`duotone-coral-${sliceKey}`}>
              <feColorMatrix
                type="matrix"
                values="0.95 0 0 0 0
                        0.42 0 0 0 0
                        0.48 0 0 0 0
                        0 0 0 1 0"
              />
            </filter>
            <filter id={`duotone-teal-${sliceKey}`}>
              <feColorMatrix
                type="matrix"
                values="0.24 0 0 0 0
                        0.82 0 0 0 0
                        0.77 0 0 0 0
                        0 0 0 1 0"
              />
            </filter>
          </defs>

          <g clipPath={`url(#v-left-${sliceKey})`}>
            <image
              href={image}
              x="-50"
              y="-30"
              width="500"
              height="600"
              preserveAspectRatio="xMidYMid slice"
              filter={`url(#duotone-coral-${sliceKey})`}
            />
            <rect width="400" height="540" fill="#F26B7A" opacity="0.18" />
          </g>

          <g clipPath={`url(#v-right-${sliceKey})`}>
            <image
              href={image}
              x="-50"
              y="-30"
              width="500"
              height="600"
              preserveAspectRatio="xMidYMid slice"
              filter={`url(#duotone-teal-${sliceKey})`}
            />
            <rect width="400" height="540" fill="#3DD0C5" opacity="0.18" />
          </g>

          <polygon
            points="0,0 130,0 200,540 175,540"
            fill="none"
            stroke="#FBFAF7"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
          <polygon
            points="270,0 400,0 225,540 200,540"
            fill="none"
            stroke="#FBFAF7"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
        </motion.svg>
      </AnimatePresence>

      <div className="absolute -left-2 top-6 rotate-[-4deg] bg-paper px-3 py-1 font-mono text-[10px] uppercase tracking-wider2 text-ink shadow-sm">
        Vol. 01
      </div>
    </div>
  );
}
