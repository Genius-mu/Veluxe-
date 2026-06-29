import { images } from "../lib/images";

const NGN = "₦";
export const formatPrice = (n) => `${NGN}${n.toLocaleString("en-NG")}`;

export const products = [
  {
    id: "velvet-lip-tint-07",
    name: "Velvet Lip Tint",
    collection: "Lip",
    price: 8500,
    size: "4.2g",
    shade: "№07 Coral",
    image: images.darlingProduct,
    aspect: "3/4",
    blurb: "A petal-soft stain that wears down to a mood, not a memory.",
    description:
      "A weightless lip stain that wears for hours and fades to a soft-stained finish. Built on a base of murumuru butter and vitamin E so the colour goes on cushioned, never dry. Apply one swipe for a wash; press two together for the velvet hour.",
    ingredients: ["Murumuru butter", "Vitamin E", "Squalane", "Mica"],
  },
  {
    id: "glow-primer",
    name: "Glow Primer",
    collection: "Skin",
    price: 12000,
    size: "30ml",
    image: images.showcaseB,
    aspect: "4/5",
    blurb: "The 60-second base that holds the rest of the day together.",
    description:
      "A silicone-free primer that smooths, hydrates, and gives skin a quiet inner-lit finish. Niacinamide 4% calms the surface; hyaluronic acid pulls water in; oat lipids seal it. Works as a standalone glow on no-makeup days.",
    ingredients: [
      "Niacinamide 4%",
      "Hyaluronic acid",
      "Oat lipids",
      "Glycerin",
    ],
  },
  {
    id: "overnight-mask",
    name: "Overnight Mask",
    collection: "Skin",
    price: 15500,
    size: "50ml",
    image: images.showcaseHero,
    aspect: "1/1",
    blurb: "Sleep in it. Wake up softer than you went to bed.",
    description:
      "A leave-on sleeping mask that works the long shift. Polyglutamic acid holds 4× the water of hyaluronic; ceramide-3 rebuilds barrier; squalane mimics the skin's own lipids. Wakes up dewy, not greasy.",
    ingredients: [
      "Polyglutamic acid",
      "Ceramide-3",
      "Squalane",
      "Centella asiatica",
    ],
  },
  {
    id: "aqua-glass-serum",
    name: "Aqua Glass Serum",
    collection: "Skin",
    price: 18000,
    size: "30ml",
    image: images.heroFormula,
    aspect: "3/4",
    blurb: "The hydrator that makes everything else work harder.",
    description:
      "A featherlight serum built around four molecular weights of hyaluronic acid — surface, mid-layer, deep, and time-release. Skin reads as glass within a week. Pairs with anything; competes with nothing.",
    ingredients: [
      "4-weight hyaluronic acid",
      "Beta-glucan",
      "Panthenol",
      "Glycerin",
    ],
  },
  {
    id: "cobalt-spf",
    name: "Cobalt Mineral SPF 50",
    collection: "Sun",
    price: 14000,
    size: "50ml",
    image: images.showcaseA,
    aspect: "4/5",
    blurb: "Daily mineral protection that never leaves a cast.",
    description:
      "Non-nano zinc oxide 21%, finished invisible on every shade we've tested. No white cast, no pilling under makeup, no heavy feel. Tinted with iron oxides to neutralise blue-light grey on deeper skin.",
    ingredients: ["Zinc oxide 21%", "Iron oxides", "Squalane", "Tocopherol"],
  },
  {
    id: "sleep-in-balm",
    name: "Sleep-In Balm",
    collection: "Lip",
    price: 11500,
    size: "12g",
    image: images.showcaseC,
    aspect: "1/1",
    blurb: "Honey, squalane, and an hour of your beauty sleep doing the work.",
    description:
      "A nighttime lip mask built on Manuka honey UMF 10+, squalane, and a quiet trio of fatty acids. Goes on cushioned, soaks in by morning. The closest thing to repair on a lip you'll find.",
    ingredients: ["Manuka honey", "Squalane", "Shea butter", "Vitamin E"],
  },
  {
    id: "velvet-pencil-03",
    name: "Velvet Pencil",
    collection: "Lip",
    price: 6500,
    size: "1.2g",
    shade: "№03 Nude",
    image: images.darlingProduct,
    aspect: "3/4",
    blurb: "Defines without a line. Wears like skin.",
    description:
      "A creamy lip pencil that disappears into the lip line. Designed to layer under the Velvet Lip Tint or wear alone for a my-lips-but-better finish. Twist-up, no sharpener.",
    ingredients: ["Jojoba ester", "Candelilla wax", "Vitamin E", "Mica"],
  },
  {
    id: "glow-drops",
    name: "Glow Drops",
    collection: "Cheek",
    price: 9800,
    size: "15ml",
    image: images.showcaseB,
    aspect: "4/5",
    blurb: "Three drops, mix into anything, light from inside.",
    description:
      "A liquid luminiser you can wear alone, mix into moisturiser, or layer over primer. Soft-focus pearl pigments — never glittery. Pairs especially well with bare skin and a half-tied silk.",
    ingredients: ["Pearl pigment", "Squalane", "Argan oil", "Vitamin E"],
  },
  {
    id: "velvet-blush-petal",
    name: "Velvet Blush",
    collection: "Cheek",
    price: 8200,
    size: "5g",
    shade: "Petal",
    image: images.heroFormula,
    aspect: "1/1",
    blurb: "A weightless cream that flushes like the real thing.",
    description:
      "A cream-to-velvet blush that melts into skin and stays put. Built on the same murumuru base as the Lip Tint — they layer together on cheeks for a monochrome wash. Three shades; this one's pink-petal.",
    ingredients: ["Murumuru butter", "Mica", "Squalane", "Tocopherol"],
  },
];

// Split into 3 columns for the marquee — modulo distribution keeps it balanced
export const columnProducts = (col) => products.filter((_, i) => i % 3 === col);
