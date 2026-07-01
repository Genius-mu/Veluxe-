import { motion } from "framer-motion";
import { images } from "../lib/images";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Darling() {
  return (
    <section className="relative overflow-hidden bg-champagne">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 sm:px-10 sm:py-32 md:grid-cols-2 md:items-center md:gap-20 md:py-40">
        {/* Image column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { x: -60, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="relative"
        >
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden">
            <img
              src={images.darlingProduct}
              alt="Veluxe primer beside a potted aloe"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Floating SKU tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 left-6 bg-ink px-4 py-2 text-paper"
          >
            <div className="label-eyebrow text-paper/60">No. 01</div>
            <div className="font-display text-sm tracking-wider2">EVERYTHING PRIMER</div>
          </motion.div>
        </motion.div>

        {/* Text column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-ink" />
            <span className="label-eyebrow">For the everyday</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl"
          >
            Darling,
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl"
          >
            we've got you.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/70"
          >
            Whether it's a velvet lip, an overnight mask, or a 60-second glow
            primer — we build the small rituals that hold up the big days.
            Naturally. Effortlessly. Dope, if we're being honest.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9">
            <a
              href="/products"
              className="group relative inline-flex items-center overflow-hidden border border-ink px-7 py-3"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative font-mono text-[11px] uppercase tracking-wider2 transition-colors duration-300 group-hover:text-paper">
                Order Now
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
