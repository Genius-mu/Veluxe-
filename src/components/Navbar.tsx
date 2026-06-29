import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 1. Properly create a motion-enabled Link component
const MotionLink = motion(Link);

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Journal", href: "/journal" },
  { label: "Cart", href: "/cart" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-30 px-6 py-6 sm:px-10 sm:py-8"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-medium tracking-wider2 text-velvet"
        >
          VELUXE
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group relative text-shadow-2xs text-sm font-light text-paper/90 transition-colors hover:text-paper"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-paper transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            to="#order"
            className="group relative text-sm font-medium text-coral"
          >
            Order
            <span className="absolute -bottom-1 left-0 h-px w-full bg-coral" />
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-50 grid h-10 w-10 place-items-center text-paper md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-6 top-full mt-2 flex flex-col border border-paper/10 bg-ink/95 backdrop-blur-md sm:inset-x-10 md:hidden"
          >
            {navItems.map((item, i) => (
              // 2. Swapped custom motion.Link out for MotionLink
              <MotionLink
                key={item.label}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                className="border-b border-paper/10 px-5 py-4 text-sm font-light text-paper/90 transition-colors hover:bg-paper/5 hover:text-paper"
              >
                {item.label}
              </MotionLink>
            ))}

            {/* 3. Corrected 'to' attribute to standard 'href' for motion.a */}
            <motion.a
              href="#order"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.05 + navItems.length * 0.04,
                duration: 0.3,
              }}
              className="group relative overflow-hidden bg-coral px-5 py-4 text-center"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative font-mono text-[11px] uppercase tracking-wider2 text-paper">
                Order Now
              </span>
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
