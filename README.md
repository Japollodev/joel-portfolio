# Joel McGill — Personal Portfolio

A single-page editorial portfolio built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, with Framer Motion for scroll reveals.

## Run locally

Requires **Node 20.19+** (Node 22 recommended; pinned via Volta / `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

## Edit the copy

All text lives in **`src/content.ts`**. Change copy there; you don't need to touch components.

- Wrap a phrase in `*asterisks*` to italicize it.
- The word `*focus*` automatically renders in the accent blue.
- Photo alt text and crop focus (`position`, a CSS `object-position`) are set per photo in the same file.

## Media

- `assets/`: the original unzipped `portfolio-resources` (source of truth).
- `public/images/`: copies served by the site. To swap a photo, replace the file in `public/images/` with the same name, and update `width`/`height` in `content.ts` if the aspect ratio changes.
- `public/images/beyond-concert-poster.jpg` is a still frame from the concert loop. It is shown to visitors who prefer reduced motion.

## Project structure

```
src/
  app/          layout (fonts, metadata), page, globals.css (design tokens), icon
  components/   one file per section + shared primitives (Section, Photo, Reveal…)
  content.ts    all copy
```

Design tokens (ink `#0E0E0E`, paper `#F2EFE9`, accent `#2F6BFF`) are in `src/app/globals.css`. Each section sets `.tone-ink` or `.tone-paper`, and its text, muted, rule and accent colors follow automatically. Small accent text uses a slightly lighter or deeper tint of the same blue so it meets WCAG 4.5:1.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, choose **Add New → Project**, import the repo, and keep the detected Next.js defaults.
3. Deploy. Open Graph URLs resolve automatically from `VERCEL_PROJECT_PRODUCTION_URL`. For a custom domain, set `NEXT_PUBLIC_SITE_URL=https://your-domain.com`.

Or from the CLI: `npx vercel` (preview), then `npx vercel --prod`.
