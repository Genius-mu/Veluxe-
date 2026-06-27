import { motion } from "framer-motion";
import { images } from "../lib/images";

const products = [
  { name: "Velvet Lip", src: images.showcaseA, eyebrow: "01" },
  { name: "Glow Primer", src: images.showcaseB, eyebrow: "02" },
  { name: "Overnight Mask", src: images.showcaseC, eyebrow: "03" },
];

export default function Showcase() {
  return (
    <section id="products" className="relative overflow-hidden bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-ink" />
              <span className="label-eyebrow">The Founding Three</span>
            </div>
            <h2 className="font-display text-4xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Built quietly,
              <br />
              <span className="text-coral">worn boldly.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            Three pieces. One ritual. Every formula passes a 47-day wear test
            before it earns the V on the label.
          </p>
        </div>

        {/* Product trio */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {products.map((p, i) => (
            <motion.figure
              key={p.name}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-mist/30">
                <img
                  src={p.src}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 bg-paper px-2 py-1 font-mono text-[10px] tracking-wider2 text-ink">
                  {p.eyebrow}
                </div>
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="font-display text-lg uppercase tracking-wider2">
                  {p.name}
                </span>
                <span className="font-mono text-xs text-ink/50">
                  → Discover
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Hero trio strip */}
        <div className="mt-32 grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] w-full overflow-hidden"
          >
            <img
              src={images.showcaseHero}
              alt="Veluxe cobalt trio"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div
              variants={{
                hidden: { x: 40, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
              }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-ink" />
              <span className="label-eyebrow">The Cobalt Edition</span>
            </motion.div>

            <motion.h3
              variants={{
                hidden: { x: 40, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
              }}
              className="font-display text-3xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl"
            >
              Darling,
            </motion.h3>
            <motion.h3
              variants={{
                hidden: { x: 40, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
              }}
              className="font-display text-3xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl"
            >
              we've got you.
            </motion.h3>

            <motion.p
              variants={{
                hidden: { x: 40, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
              }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70"
            >
              Mineral SPF. Glass-skin serum. Sleep-in balm. Three formulas in
              the new cobalt ceramic. Refill the bottle, keep the ritual.
            </motion.p>

            <motion.a
              variants={{
                hidden: { x: 40, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
              }}
              href="#order"
              className="group relative mt-8 inline-flex items-center overflow-hidden border border-ink px-7 py-3"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative font-mono text-[11px] uppercase tracking-wider2 transition-colors duration-300 group-hover:text-paper">
                Details
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
