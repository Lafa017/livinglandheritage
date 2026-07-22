# Design System — Living Land Heritage

## Concept
Real estate & construction brand in Taxco, Guerrero, México. Sells land + custom home building as "legacy" — an emotional, aspirational, premium-but-warm Mexican identity. Partner: ConstruVision (architecture/construction).

## Typography
- Display / headings: **Fraunces** (serif, warm, elegant) — via Google Fonts.
- Body / UI: **Manrope** (clean sans-serif) — via Google Fonts.
- Large type scale for hero (clamp 3rem–6rem), generous line-height on body (1.6–1.8).

## Color Palette
- Background base: `#FAF6F0` (warm ivory)
- Deep ink/text: `#241C15` (near-black warm brown)
- Primary earth: `#8C5A34` (terracotta/clay)
- Accent gold: `#C69A4B` (cantera gold)
- Deep green (Taxco hills accent): `#3E4B3A`
- Cream card surface: `#F1E9DC`
- Overlay dark (on images): `#1C140C` at 40–70% opacity

## Layout & Composition
- Asymmetric hero: full-bleed photo with dark gradient overlay, oversized serif headline offset left, gold divider line accent.
- Section rhythm: alternate image-left/text-right and text-left/image-right. Avoid predictable centered card grids.
- Generous negative space between sections (py-24 to py-32).
- Thin gold hairline dividers as section separators instead of hard borders.
- Rounded corners kept subtle (rounded-md/lg), never pill-shaped cards — this is a heritage/craft brand, not tech-startup.

## Imagery
- Warm, golden-hour, photorealistic photos of Taxco, land plots, homes under construction and finished homes (generated assets in `packages/web/public/`).
- Images treated with a subtle warm overlay/gradient for text legibility.

## Motion
- One staggered fade+rise reveal on scroll per section (Motion/framer-motion), no scattered micro effects.
- Hero: slow zoom (ken burns) on background image.

## Components
- Sticky top nav, transparent over hero, solid ivory on scroll, gold underline on active link.
- Floating WhatsApp button (bottom-right, terracotta circle, white icon).
- CTA buttons: solid terracotta bg / gold on hover, serif-adjacent letter spacing uppercase small text.
- Lead form: minimal, ivory card, gold-underline inputs (no boxed borders), single terracotta submit button.
- Testimonial block: quote mark accent in gold, serif italic quote text.

## Anti-patterns to avoid
- No purple, no generic SaaS gradients, no Inter/Roboto/Space Grotesk, no bouncy rounded-pill cards.
