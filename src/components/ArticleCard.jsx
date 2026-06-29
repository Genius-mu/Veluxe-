/**
 * Article tile for the journal grid.
 * Dark-theme variant — sits on ink background.
 */
export default function ArticleCard({ article }) {
  return (
    <a
      href={`#${article.slug}`}
      className="group block"
      aria-label={`Read ${article.title}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-paper/5">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          draggable="false"
          className="h-full w-full object-cover opacity-90 grayscale-[20%] transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:opacity-100"
        />

        {/* Category tag */}
        <div className="absolute left-3 top-3 bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-wider2 text-ink">
          {article.category}
        </div>
      </div>

      <div className="mt-5">
        {/* Meta strip */}
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider2 text-paper/40">
          <span>{article.date}</span>
          <span className="h-px w-4 bg-paper/20" />
          <span>{article.readTime} read</span>
        </div>

        <h3 className="mt-3 font-display text-2xl font-medium uppercase leading-[1.05] tracking-tight text-paper transition-colors duration-300 group-hover:text-coral">
          {article.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-paper/60">
          {article.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-paper/10 pt-4">
          <span className="font-mono text-[10px] uppercase tracking-wider2 text-paper/50">
            by {article.author}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider2 text-paper/40 transition-colors duration-300 group-hover:text-coral">
            Read →
          </span>
        </div>
      </div>
    </a>
  );
}
