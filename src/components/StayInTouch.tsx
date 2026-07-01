import { motion } from "framer-motion";
import { useState } from "react";

export default function StayInTouch() {
  const [email, setEmail] = useState("");

  return (
    <section id="cart" className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span className="label-eyebrow mb-4">Stay close</span>
          <h2 className="font-display text-4xl font-medium uppercase tracking-[0.18em] sm:text-5xl md:text-6xl">
            Get In Touch
          </h2>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/60">
            One letter a month. New drops, small essays, the occasional
            wear-test invitation. No noise.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@elsewhere.com"
              className="flex-1 border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-ink focus:outline-none"
            />
            <button className="group relative overflow-hidden bg-coral px-7 py-3 text-paper">
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative font-mono text-[11px] uppercase tracking-wider2">
                Subscribe
              </span>
            </button>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden border border-ink px-7 py-3"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative font-mono text-[11px] uppercase tracking-wider2 text-ink transition-colors duration-300 group-hover:text-paper">
                Contact
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
