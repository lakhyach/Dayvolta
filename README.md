# Goreno — Solar Landing Page

A polished, single-page marketing site for **Goreno**, a concept residential
solar + home-battery brand. It presents the product story across a hero,
savings overview, service steps, a product showcase, system specs, scrolling
testimonials, and a footer with a working newsletter form.

> This is a front-end **design/Portfolio demonstration**. It is not connected to
> a real solar company, backend, payment system, or email service. The
> product metrics, testimonials, and specs are illustrative sample content.

![Goreno hero preview](./docs/preview.png)

## Purpose & audience

Built to showcase production-grade front-end craft — component architecture,
scroll-driven motion, responsive layout, accessibility, and performance — for
recruiters, clients, and other developers.

## Key features & interactions

- **Sticky adaptive header** that transitions from transparent (over the hero)
  to a frosted light bar as you scroll, with correct contrast over both light
  and dark sections.
- **Working in-page navigation** — every nav link smooth-scrolls to its section
  (`#home`, `#about`, `#technology`, `#specs`, `#reviews`) with a header offset.
- **Animated full-screen mobile menu** with staggered link reveals (Framer
  Motion) and a correctly layered close control.
- **Interactive energy chart** where hovering a bar updates the displayed value.
- **Vertical marquee testimonials** across responsive column counts.
- **Validated newsletter form** (react-hook-form) with required/format errors,
  a submitting state, and an honest local success message — no fake backend.
- **Accessibility**: keyboard focus outlines, `aria-label`s on icon buttons,
  labelled form input, `role="alert"`/`role="status"` feedback, and a
  `prefers-reduced-motion` fallback that disables animations and smooth scroll.
- **Metadata & branding**: custom SVG favicon, descriptive `<title>`, meta
  description, theme color, and Open Graph / Twitter preview tags.

## Tech stack (verified)

| Layer      | Choice                                             |
|------------|----------------------------------------------------|
| Framework  | React 19                                           |
| Build tool | Vite 7 (`@vitejs/plugin-react`)                    |
| Styling    | Tailwind CSS v4 (`@tailwindcss/vite`)              |
| Animation  | Framer Motion 12                                   |
| Icons      | lucide-react, react-icons                          |
| Forms      | react-hook-form                                    |
| Linting    | ESLint 9 (flat config) + react-hooks / react-refresh |

Fonts are self-hosted locally (Helvetica, Space Grotesk) — no external font
network requests.

## Architecture & directory structure

Single-page app rendered directly by `App.jsx` (no client-side router). Each
page section is its own component; shared sample data lives in `assets/data.jsx`.

```
├─ index.html              # App shell, metadata, favicon
├─ public/
│  ├─ favicon.svg          # Branded solar mark
│  ├─ fonts/               # Self-hosted Helvetica, Space Grotesk
│  └─ images/              # Hero, product, service, avatar imagery
├─ src/
│  ├─ App.jsx              # Composes all sections in order
│  ├─ main.jsx             # React root
│  ├─ index.css            # Tailwind v4, fonts, theme tokens, a11y rules
│  ├─ assets/
│  │  └─ data.jsx          # navLinks, chartData, specs, services, testimonials
│  └─ components/
│     ├─ Navigation.jsx    # Adaptive header + mobile menu
│     ├─ Hero.jsx          # #home
│     ├─ About.jsx         # #about — savings + interactive chart
│     ├─ Services.jsx      # order-to-power-on steps
│     ├─ ProductShowcase.jsx # #technology — Powerwall showcase
│     ├─ More.jsx          # #specs — system specs + previews
│     ├─ Testimonials.jsx  # #reviews — vertical marquee
│     └─ Footer.jsx        # #contact — CTA + validated newsletter
└─ docs/preview.png        # README screenshot
```

## Prerequisites

- **Node.js 18+** (developed and verified on Node 24)
- npm (bundled with Node)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Lint
npm run lint

# 4. Create a production build (outputs to dist/)
npm run build

# 5. Preview the production build locally
npm run preview
```

## Environment variables

None required. This is a fully static front-end app with no secrets or backend
services.

## Deployment

The build produces a static `dist/` folder that can be hosted on any static
provider. For Vercel:

```bash
npm i -g vercel
vercel
# Framework preset: Vite  •  Build command: npm run build  •  Output: dist
```

Netlify, Cloudflare Pages, or GitHub Pages work equally well — point them at the
`dist/` output above.

## Implementation notes

- **Performance**: local fonts and images only; no runtime analytics or external
  requests. Vite code-splits and tree-shakes; production bundle is minified with
  gzipped assets.
- **Accessibility**: reduced-motion support, visible focus states, semantic
  section landmarks with ids, and labelled/aria-described interactive controls.
- **Motion**: all reveal/hover/marquee animations honor `prefers-reduced-motion`.

## Known limitations

- Newsletter submission is local-only (validation + confirmation); it does not
  send email or persist data.
- Product metrics, testimonials, and availability dates are illustrative sample
  content for a concept brand, not verified real-world claims.
- Secondary demo buttons ("Configure System", "View Model", etc.) are visual
  placeholders without dedicated destinations.

## License & attribution

Original project scaffolded from the Vite + React template; design and code
subsequently reworked for this portfolio. No third-party licensed assets are
redistributed beyond project imagery included in this repository. Add a license
of your choice before publishing if you reuse this code.
