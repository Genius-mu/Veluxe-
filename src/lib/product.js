import { images } from "../lib/images";

/**
 * The Veluxe catalogue.
 * Distributed 4 / 4 / 4 across the three marquee columns.
 */
export const products = [
  // ── Column 1 ─────────────────────────────────────────────
  {
    id: "velvet-lip",
    name: "Velvet Lip",
    tagline: "Velvet-finish lip oil",
    price: "$28",
    description:
      "Pressed from squalane and a quiet blush of rosehip — the lip oil that started Veluxe. Wears like a glaze, settles like a balm, finishes like velvet. No stick, no sting, no shimmer.",
    notes: ["Squalane", "Rosehip oil", "Vitamin E"],
    image: images.heroFormula,
    badge: "No. 01",
  },
  {
    id: "everything-primer",
    name: "Everything Primer",
    tagline: "Sixty-second glow primer",
    price: "$34",
    description:
      "A featherweight primer that turns any morning into a soft-focus one. Niacinamide brightens, hyaluronic plumps, and a whisper of mica catches the light without announcing it.",
    notes: ["Niacinamide", "Hyaluronic acid", "Mica"],
    image: images.darlingProduct,
    badge: "No. 02",
  },
  {
    id: "overnight-mask",
    name: "Overnight Mask",
    tagline: "Sleep-in velvet mask",
    price: "$42",
    description:
      "Apply at last light. Wake to skin that feels like the second day of a good vacation. Ceramides and oat lipids do the quiet work while you don't.",
    notes: ["Ceramide-3", "Oat lipids", "Squalane"],
    image: images.showcaseC,
    badge: "No. 03",
  },
  {
    id: "glow-drops",
    name: "Glow Drops",
    tagline: "Daily vitamin serum",
    price: "$48",
    description:
      "Four drops, every morning. Stabilised vitamin C, ferulic acid, and a touch of squalane to keep things kind. The shelf-life is six months. The result is forever.",
    notes: ["Vitamin C", "Ferulic acid", "Squalane"],
    image: images.heroFormula,
    badge: "No. 04",
  },

  // ── Column 2 ─────────────────────────────────────────────
  {
    id: "cocoon-oil",
    name: "Cocoon Body Oil",
    tagline: "Organic coconut body oil",
    price: "$52",
    description:
      "A cold-pressed coconut body oil for the moments after the bath. Sinks in fast, lingers longer than expected. The bottle smells like a slow Tuesday.",
    notes: ["Coconut", "Argan oil", "Vitamin E"],
    image: images.showcaseA,
    badge: "No. 05",
  },
  {
    id: "sundial-spf",
    name: "Sundial SPF 50",
    tagline: "Mineral sunscreen",
    price: "$38",
    description:
      "A no-cast mineral SPF that finishes like a moisturiser. Zinc oxide does the heavy lifting; oat extract does the calming. Reapply at noon — your future face will thank you.",
    notes: ["Zinc oxide", "Oat extract", "Vitamin E"],
    image: images.showcaseB,
    badge: "No. 06",
  },
  {
    id: "ribbon-crayon",
    name: "Ribbon Crayon",
    tagline: "Velvet matte lip crayon",
    price: "$24",
    description:
      "A creamy, weightless lip crayon in six wearable shades — from first coffee to last call. Goes on like balm, sets like velvet, kisses like a question.",
    notes: ["Shea butter", "Jojoba oil", "Beeswax"],
    image: images.darlingProduct,
    badge: "No. 07",
  },
  {
    id: "stillness-toner",
    name: "Stillness Toner",
    tagline: "Balancing daily toner",
    price: "$32",
    description:
      "A quiet, alcohol-free toner that prepares skin for everything that comes next. Centella, panthenol, and a little bit of patience in a frosted glass bottle.",
    notes: ["Centella", "Panthenol", "Glycerin"],
    image: images.heroFormula,
    badge: "No. 08",
  },

  // ── Column 3 ─────────────────────────────────────────────
  {
    id: "embers-lip-oil",
    name: "Embers Lip Oil",
    tagline: "Warm-tone lip oil",
    price: "$28",
    description:
      "A sunset-warm version of Velvet Lip — sheer cinnamon, baked terracotta, slow gold. Glides on, never tugs. Wears down to a soft stain by hour six.",
    notes: ["Squalane", "Rosehip", "Mica"],
    image: images.darlingProduct,
    badge: "No. 09",
  },
  {
    id: "hush-eye",
    name: "Hush Eye Cream",
    tagline: "Quiet eye contour cream",
    price: "$54",
    description:
      "A weightless cream for the hours before and after sleep. Peptides firm, caffeine wakes, and a hint of mica catches the light when you do.",
    notes: ["Caffeine", "Peptides", "Mica"],
    image: images.showcaseB,
    badge: "No. 10",
  },
  {
    id: "daybreak-cleanser",
    name: "Daybreak Cleanser",
    tagline: "Gentle morning cleanser",
    price: "$26",
    description:
      "A pH-balanced cream cleanser for the first wash of the day. Lifts, never strips. Rinses clear, finishes soft. The kind of clean you forget about an hour later.",
    notes: ["Amino acids", "Glycerin", "Oat"],
    image: images.showcaseC,
    badge: "No. 11",
  },
  {
    id: "aura-bronzer",
    name: "Aura Bronzer",
    tagline: "Cream-to-powder bronzer",
    price: "$36",
    description:
      "A buildable cream that sets to a soft powder finish. Three universal shades, blendable with a fingertip. No streaks, no sparkle, no statement — just a long Sunday in August.",
    notes: ["Mica", "Jojoba", "Shea"],
    image: images.showcaseA,
    badge: "No. 12",
  },
];
