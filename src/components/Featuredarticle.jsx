import { motion } from "framer-motion";

/**
 * Hero feature for the journal — asymmetric, image left, copy right.
 */
export default function FeaturedArticle({ article }) {
  return (
    <a
      href={`#${article.slug}`}
      className="group block"
      aria-label={`Read ${article.title}`}
    >
      <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
        {/* Image */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:col-span-7"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[5/4]">
            <img
              src={article.image}
              alt={article.title}
              draggable="false"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
            />

            {/* Featured badge */}
            <div className="absolute left-4 top-4 bg-coral px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider2 text-paper">
              Featured · Vol. 03
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
          className="md:col-span-5"
        >
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
            className="font-mono text-[11px] uppercase tracking-wider2 text-coral"
          >
            {article.category}
          </motion.div>

          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
            className="mt-4 font-display text-4xl font-medium uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl md:text-6xl"
          >
            {article.title}
          </motion.h2>

          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/70"
          >
            {article.excerpt}
          </motion.p>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
            className="mt-8 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-wider2 text-paper/50"
          >
            <span>{article.author}</span>
            <span className="h-px w-6 bg-paper/20" />
            <span>{article.date}</span>
            <span className="h-px w-6 bg-paper/20" />
            <span>{article.readTime} read</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
            className="mt-10"
          >
            <span className="group/btn relative inline-flex overflow-hidden border border-paper px-7 py-3">
              <span className="absolute inset-0 origin-left scale-x-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative font-mono text-[11px] uppercase tracking-wider2 text-paper transition-colors duration-300 group-hover:text-ink">
                Read the essay
              </span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </a>
  );
}
