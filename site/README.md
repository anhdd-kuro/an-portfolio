# Thuy An - Portfolio website (Astro)

Astro rebuild of the static Thuy An portfolio, with path-based i18n and a
proper build pipeline for scaling to many project pages.

The pre-Astro static site (32 hand-written HTML pages) is preserved locally at
`../tmp/backup/site-legacy-20260910/` for reference. It is intentionally
excluded from the public repository.

## Stack

- **Astro** (static output, no server needed) - shared dynamic routes and page
  components render validated locale content from an Astro content collection.
- **Tailwind CSS**, compiled at build time via `@tailwindcss/vite` (was the
  Play CDN before - same config, same utility classes, no runtime CDN
  dependency any more).
- **Oxlint** with `@shadcn/lint` registered for future design-system rules;
  no `@shadcn/lint` rules are enabled yet. The generic anti-slop rules are
  vendored under `tools/oxlint/anti-slop/` and enabled in `.oxlintrc.json`.
- **Oxfmt**, used to format supported source files and enforce formatting in CI.
  Oxfmt does not format `.astro` files, so Astro template formatting remains
  governed by the Astro parser and build.
- Plain JS (`src/scripts/main.js`) for the mobile menu, banner hover/tap
  hotspots, the language dropdown open/close, and the scroll/back-to-top
  button. No framework.

## i18n

Locales are `en`, `ja` (served under the `/jp` path), and `vi`. Route files are
shared; translated shell-page content lives in one typed collection:

```
src/content/pages/{en,jp,vi}/*.json
src/pages/[lang]/index.astro
src/pages/[lang]/[slug].astro
```

`src/content.config.ts` validates every entry. `src/i18n/config.ts` is the
single source of truth for locale-to-route mapping, including `ja` -> `/jp`.
Shared navigation labels remain in `src/i18n/ui.json` and are read through
`src/i18n/utils.ts`.

`generate.cjs` is a legacy migration utility only. Do not run it against the
current source tree: it predates the collection-backed routes and can recreate
the removed per-locale page files.

### Landing / language redirect

`src/pages/index.astro` (served at `/`) is a tiny client-side redirect: it
reads `navigator.languages`/`navigator.language` and sends the visitor to
`/jp/` for Japanese, `/vi/` for Vietnamese, and `/en/` for everything else or
when the browser doesn't say - no permission prompt, no IP lookup. A
`<meta http-equiv="refresh">` fallback also points to `/en/` for no-JS
visitors.

## Adding a new project page (the "scale" part)

1. Add the project once to `src/data/projects.ts`.
2. Add its localized body modules under
   `src/data/projects/<slug>/{en,ja,vi}.astro`.
3. Add shared navigation labels to `src/i18n/ui.json` only when needed.
4. Run `bun run lint` and `bun run build`, then check all three generated
   locale routes in `dist/`.

## Commands

```
bun install
bun run dev       # http://localhost:4321
bun run build     # -> dist/
bun run lint      # Oxlint + @shadcn/lint + anti-slop rules
bun run format    # format supported files with Oxfmt
bun run format:check
bun run preview
```

GitHub Actions runs `bun install --frozen-lockfile`, `bun run lint`,
`bun run format:check`, and `bun run build` on pushes to `main` and on pull
requests.

## Known follow-ups

- `og:image` / hreflang links use root-relative paths (`/en/...`) - swap for
  absolute URLs once the site has a domain (same open item the legacy site
  had).
- `footer.copy` is identical across all three languages in the source data
  (not translated) - that's inherited from the legacy `translations.js`,
  not a bug in the Astro port.
