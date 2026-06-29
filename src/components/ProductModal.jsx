import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

/**
 * Veluxe product modal.
 * - Open when `product` is non-null.
 * - Closes on: backdrop click, X button, Escape key.
 * - Locks body scroll while open.
 */
export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-y-auto bg-paper shadow-2xl md:grid-cols-2 md:overflow-hidden"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center bg-paper/90 backdrop-blur-sm transition-colors hover:bg-ink hover:text-paper"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Image */}
            <div className="relative aspect-square w-full md:aspect-auto md:h-full">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider2 text-ink backdrop-blur-sm">
                {product.badge}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-ink" />
                <span className="font-mono text-[11px] uppercase tracking-wider2 text-smoke">
                  {product.tagline}
                </span>
              </div>

              <h2
                id="modal-title"
                className="mt-3 font-display text-3xl font-medium uppercase leading-[0.95] tracking-tight sm:text-4xl"
              >
                {product.name}
              </h2>

              <div className="mt-3 font-mono text-sm text-ink/70">
                {product.price}
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-ink/70">
                {product.description}
              </p>

              {product.notes?.length > 0 && (
                <div className="mt-6">
                  <div className="font-mono text-[11px] uppercase tracking-wider2 text-smoke">
                    Notes
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.notes.map((n) => (
                      <li
                        key={n}
                        className="border border-ink/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider2 text-ink/70"
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto pt-8">
                <button
                  type="button"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden bg-ink px-7 py-4 text-paper"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 bg-coral transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <span className="relative font-mono text-[11px] uppercase tracking-wider2">
                    Add to Cart — {product.price}
                  </span>
                </button>
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider2 text-ink/40">
                  Free shipping over $60 · 30-day returns
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
