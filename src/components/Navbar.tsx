import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Journal", href: "#journal" },
  { label: "Cart", href: "#cart" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-30 px-6 py-6 sm:px-10 sm:py-8"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <a
          href="#"
          className="font-display text-xl font-medium tracking-wider2 text-velvet text-green-400"
        >
          VELUXE
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-sm font-light text-paper/90 transition-colors hover:text-paper"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-paper transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#order"
            className="group relative text-sm font-medium text-coral"
          >
            Order
          </a>
        </nav>

        {/* Mobile — single Order CTA */}
        <div className="w-full">
          <nav className="md:hidden top-[90%] w-full bg-black/90 backdrop-blur-2xl absolute flex p-4 flex-col left-0 gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-sm font-light text-paper/90 transition-colors hover:text-paper py-3 px-3 hover:bg-coral transition duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-paper transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#order"
              className="group relative text-sm font-medium text-white py-3 rounded-3xl text-center bg-coral"
            >
              Order
            </a>
          </nav>
        </div>
        <div>
          <span>
            <Menu className="text-white" />
          </span>
        </div>
      </div>
    </motion.header>
  );
}
