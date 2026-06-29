import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "../lib/images";

export default function Journey() {
  return (
    <section
      id="journal"
      className="relative overflow-hidden bg-mist"
    >
      {/* top diagonal accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24 bg-paper"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 sm:px-10 sm:py-32 md:grid-cols-2 md:items-center md:gap-20 md:py-40">
        {/* Image with floating words */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[3/4] w-full max-w-md">
            {/* small mint backplate */}
            <div className="absolute -left-4 -top-4 hidden h-24 w-24 bg-velvet/30 sm:block" />
            {/* striped backplate */}
            <div
              aria-hidden
              className="absolute -right-4 top-8 hidden h-32 w-24 sm:block"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(14,14,16,0.12) 0 1px, transparent 1px 8px)",
              }}
            />

            <img
              src={images.journeyModel}
              alt="A Veluxe wearer"
              className="relative h-full w-full object-cover"
              loading="lazy"
            />

            {/* Floating "Carbon" / "Journey" */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -left-6 top-4 font-display text-lg italic text-ink/80 sm:-left-8 sm:text-xl"
            >
              Carbon
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -right-2 bottom-10 font-display text-lg italic text-ink/80 sm:-right-4 sm:text-xl"
            >
              Journey
            </motion.span>
          </div>
        </motion.div>

        {/* Text */}
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
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-ink" />
            <span className="label-eyebrow">Our quiet promise</span>
          </motion.div>

          <motion.h2
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
            className="font-display text-4xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl"
          >
            Beauty that
            <br />
            <span className="text-coral">leaves room.</span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/70"
          >
            Carbon-positive packaging. Refillable everything. No rituals you
            can't pronounce. We measure what we make — every batch, every
            shipment, every shelf.
          </motion.p>

          <motion.div
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
            className="mt-9 flex items-center gap-4"
          >
            <a
              href="#order"
              className="group relative inline-flex items-center overflow-hidden border border-ink px-7 py-3"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative font-mono text-[11px] uppercase tracking-wider2 transition-colors duration-300 group-hover:text-paper">
                Order Now
              </span>
            </a>

            {/* mini paginator nod from the reference */}
            <div className="flex items-center gap-1 text-ink/40">
              <button
                aria-label="Previous"
                className="grid h-9 w-9 place-items-center border border-ink/20 transition-colors hover:bg-ink hover:text-paper"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next"
                className="grid h-9 w-9 place-items-center border border-ink/20 transition-colors hover:bg-ink hover:text-paper"
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
