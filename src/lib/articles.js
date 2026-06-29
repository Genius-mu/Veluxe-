import { images } from "../lib/images";

/**
 * The Veluxe Journal — eight pieces, one featured.
 * Categories: Rituals · Ingredients · People · Place
 */
export const articles = [
  {
    id: 1,
    slug: "the-three-drops",
    title: "The Three Drops",
    category: "Rituals",
    excerpt:
      "Why we measure mornings in pipettes, and what the smallest gestures say about a day.",
    image: images.heroFormula,
    author: "Ife Adebayo",
    date: "Jun 12, 2026",
    readTime: "4 min",
    featured: true,
  },
  {
    id: 2,
    slug: "on-velvet",
    title: "On Velvet",
    category: "Ingredients",
    excerpt:
      "A meditation on texture — what it means for skin to feel like velvet, and the small choices that get us there.",
    image: images.heroModel,
    author: "Ngozi Okafor",
    date: "Jun 04, 2026",
    readTime: "6 min",
  },
  {
    id: 3,
    slug: "field-notes-slow-press",
    title: "Field Notes from a Slow Press",
    category: "People",
    excerpt:
      "Inside the small Lagos workshop where every Velvet Lip is hand-decanted, batch by batch.",
    image: images.showcaseHero,
    author: "Tomi Bello",
    date: "May 27, 2026",
    readTime: "8 min",
  },
  {
    id: 4,
    slug: "skin-we-sleep-in",
    title: "The Skin We Sleep In",
    category: "Rituals",
    excerpt:
      "What ceramides and oat lipids actually do between last light and first coffee.",
    image: images.showcaseC,
    author: "Dr. Adaeze Eze",
    date: "May 18, 2026",
    readTime: "5 min",
  },
  {
    id: 5,
    slug: "coastal-salt-coastal-skin",
    title: "Coastal Salt, Coastal Skin",
    category: "Place",
    excerpt:
      "Notes from a week in Tarkwa Bay — humidity, salt, and the formulas that earned their keep.",
    image: images.journeyModel,
    author: "Ife Adebayo",
    date: "May 09, 2026",
    readTime: "7 min",
  },
  {
    id: 6,
    slug: "hands-like-glass",
    title: "Hands Like Glass",
    category: "Rituals",
    excerpt:
      "The most-touched, least-cared-for surface of the body. A small treatise on hand care.",
    image: images.heroLifestyle,
    author: "Mariam Sanusi",
    date: "Apr 30, 2026",
    readTime: "3 min",
  },
  {
    id: 7,
    slug: "what-we-leave-out",
    title: "What We Leave Out",
    category: "Ingredients",
    excerpt:
      "Twelve ingredients you'll never find in a Veluxe formula — and the reasons we drew the line.",
    image: images.darlingProduct,
    author: "Dr. Adaeze Eze",
    date: "Apr 21, 2026",
    readTime: "9 min",
  },
  {
    id: 8,
    slug: "first-light-last-call",
    title: "First Light, Last Call",
    category: "Rituals",
    excerpt:
      "Bookending the day with two rituals — one to wake the skin, one to set it down softly.",
    image: images.showcaseA,
    author: "Ngozi Okafor",
    date: "Apr 12, 2026",
    readTime: "5 min",
  },
];

export const categories = ["All", "Rituals", "Ingredients", "People", "Place"];
