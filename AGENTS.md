# Thuy An Portfolio — Agent Instructions

## Purpose and source boundaries

Maintain the static, multilingual Astro portfolio in `site/` while preserving
the portfolio's existing visual identity and content.

- Active application code lives in `site/src/` and `site/public/`.
- Locales are `en`, `ja` (served at the `/jp` URL prefix), and `vi`. Keep the
  three locale trees and their routes aligned when changing shared pages.
- Shared page structure is in `site/src/layouts/BaseLayout.astro` and
  `site/src/components/Header.astro`; shared styling is in
  `site/src/styles/global.css`; small site interactions are in
  `site/public/assets/js/main.js`.
- Translations live in `site/src/i18n/ui.json`. The local-only legacy static
  site in `tmp/backup/site-legacy-20260910/` is the reference for the original
  HTML, translations, links, and asset mapping. Original design material is
  in `design/`; high-resolution source assets are in `tmp/ta-hi-res/`.
- `tmp/` is intentionally ignored and is not part of the public repository.
- Treat `site/dist/`, `site/.astro/`, and `site/node_modules/` as generated or
  local dependency output. Do not hand-edit them as source.

## How to work

- Inspect the affected page, shared shell, translation keys, and referenced
  assets before editing. Make narrow changes and preserve unrelated work.
- Keep the existing static architecture: Astro, build-time Tailwind, and
  plain JavaScript. Do not introduce a runtime framework or CDN dependency
  unless the request specifically requires it.
- Prefer shared layout, component, or stylesheet changes for cross-cutting
  behavior; keep page files focused on page-specific content.
- When changing localized copy, add or update the corresponding key in all
  three locale dictionaries and verify the `/en`, `/jp`, and `/vi` routes.
- `site/generate.cjs` regenerates locale pages from the local-only legacy
  snapshot and `ui.json`, overwriting `site/src/pages/{en,jp,vi}/`. Run it only
  when that full regeneration is intended, then review the generated result.
- Preserve supplied artwork, asset filenames, proportions, and interaction
  conventions. New interactive behavior must remain keyboard-accessible and
  respect `prefers-reduced-motion` when animation is involved.

## Verification and handoff

- From `site/`, run `npm run build` for every code, content, routing, or style
  change. Inspect the affected files under `site/dist/` afterward.
- From `site/`, run `npm run lint` after source changes. Keep `@shadcn/lint`
  rules disabled until the design-system policies are explicitly defined;
  anti-slop generic rules are enabled by the Oxlint configuration. The root
  `.github/workflows/ci.yml` runs the same lint and build checks on pushes and
  pull requests.
- For UI or responsive changes, also inspect the running site in a local
  browser at the relevant desktop and mobile sizes. A passing build alone is
  not visual acceptance.
- For translation or navigation changes, spot-check the same page in all
  three locales and confirm that Japanese uses `/jp`, not `/ja`.
- Report the outcome first, then the checks performed and their results. State
  any browser, dependency, or other verification surface that was unavailable;
  do not claim unverified visual or runtime behavior as complete.
