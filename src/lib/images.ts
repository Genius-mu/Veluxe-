/**
 * Veluxe image sources.
 *
 * We use Pollinations.ai during development — it accepts a prompt as a URL
 * and returns a generated image. Zero setup, real images. When you want
 * print-grade finals, take the same prompts to Imagen / Midjourney / Flux.
 *
 * Swap any value below for a CDN URL once you ship.
 */

const POLLI = "https://image.pollinations.ai/prompt";

const polli = (
  prompt: string,
  opts: { w?: number; h?: number; seed?: number; model?: string } = {}
) => {
  const { w = 900, h = 1200, seed = 42, model = "flux" } = opts;
  const q = encodeURIComponent(prompt.trim().replace(/\s+/g, " "));
  return `${POLLI}/${q}?width=${w}&height=${h}&seed=${seed}&model=${model}&nologo=true`;
};

export const images = {
  // Hero V-cutout — same model, three lighting moods (slices of the V)
  heroModel: polli(
    "editorial beauty portrait of a confident woman, dewy velvet skin, soft cinematic lighting, neutral background, high fashion magazine, sharp focus, 35mm, no text, no logo",
    { w: 1000, h: 1400, seed: 7 }
  ),

  // Slide 2 — product / formula focus
  heroFormula: polli(
    "minimalist beauty product still life, glass dropper bottle of velvety serum, soft shadow, off-white surface, editorial, no text, no labels",
    { w: 1000, h: 1400, seed: 22 }
  ),

  // Slide 3 — lifestyle moment
  heroLifestyle: polli(
    "candid moment, woman applying lip balm in a sunlit room, linen curtains, warm soft light, editorial fashion photography, no text",
    { w: 1000, h: 1400, seed: 91 }
  ),

  // Darling section — hero product on champagne backdrop
  darlingProduct: polli(
    "single luxury cosmetic tube standing on champagne peach surface, beside a small terracotta potted aloe plant, soft natural light, minimal editorial product photography, no text, no labels",
    { w: 900, h: 1200, seed: 14 }
  ),

  // Showcase trio — three products
  showcaseA: polli(
    "tall frosted glass cosmetic bottle, soft pastel pink background, minimalist product photo, no text",
    { w: 600, h: 800, seed: 31 }
  ),
  showcaseB: polli(
    "ceramic cosmetic jar with geometric faceted lid, off-white background, soft shadow, minimalist product photo, no text",
    { w: 600, h: 800, seed: 32 }
  ),
  showcaseC: polli(
    "elegant hand holding a slim cosmetic tube, black and white, editorial beauty photography, no text",
    { w: 600, h: 800, seed: 33 }
  ),

  // Showcase center hero — cobalt trio
  showcaseHero: polli(
    "three cosmetic tubes standing together, two cobalt blue and one cream, soft daylight, minimal editorial product photography, no text, no labels",
    { w: 1200, h: 900, seed: 44 }
  ),

  // Journey — woman against teal wall
  journeyModel: polli(
    "young woman with long wavy hair in red wrap top, smiling, leaning against bright teal wood-panel wall, golden hour light, fashion editorial portrait, no text",
    { w: 900, h: 1100, seed: 58 }
  ),
};
