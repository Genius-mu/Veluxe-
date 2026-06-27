# Veluxe — Homepage

Quiet luxury, worn loud. Built with React + TypeScript + Tailwind + Framer Motion.

## Run it

```bash
npm install
npm run dev
```

## What's in the page

| Section       | File                             | Notes                                               |
| ------------- | -------------------------------- | --------------------------------------------------- |
| Navbar        | `src/components/Navbar.tsx`      | Fixed on dark hero, animated underlines             |
| Hero          | `src/components/Hero.tsx`        | 3-slide horizontal slider with V-letterform cutout  |
| Darling       | `src/components/Darling.tsx`     | Peach band, "Darling, we've got you" motif          |
| Showcase      | `src/components/Showcase.tsx`    | Founding-three grid + cobalt edition strip          |
| Journey       | `src/components/Journey.tsx`     | Mist/cyan band, "Carbon" / "Journey" floating words |
| Stay In Touch | `src/components/StayInTouch.tsx` | Newsletter + Contact CTA                            |
| Footer        | `src/components/Footer.tsx`      | Wordmark + policy links                             |

## Design tokens

Defined in `tailwind.config.js`:

- `ink` #0E0E10 — hero / type
- `paper` #FBFAF7 — base
- `champagne` #F4E2D2 — peach band
- `mist` #D6ECEC — cyan band
- `coral` #F26B7A — primary accent (CTAs, accent words)
- `velvet` #3DD0C5 — logo + secondary accent
- `smoke` #6B6B70 — muted body

Display: **Oswald** · Body: **Inter** · Utility: **JetBrains Mono**

## Motion

All animations are Framer Motion. The hero slider uses `AnimatePresence mode="wait"` with directional custom variants. Each scroll section uses `whileInView` with `viewport={{ once: true, margin: "-100px" }}` and staggered children for a "slide in" reveal. `prefers-reduced-motion` is honoured globally via `src/index.css`.

## Images

Image sources are centralized in `src/lib/images.ts` and use **Pollinations.ai** URLs that return real generated images at request time. To swap in production-grade assets, replace any value in that file with a CDN URL — nothing else changes. Prompts for hand-generation in Imagen / Midjourney / Flux are in `IMAGE_PROMPTS.md`.
