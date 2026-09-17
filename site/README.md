# Thuy An - Portfolio website (Astro)

Astro rebuild of the static Thuy An portfolio, with path-based i18n and a
proper build pipeline for scaling to many project pages.

The pre-Astro static site (32 hand-written HTML pages) is preserved locally at
`../tmp/backup/site-legacy-20260910/` for reference. It is intentionally
excluded from the public repository.

## Stack

- **Astro** (static output, no server needed) - one small `.astro` file per
  page/locale, all sharing `src/layouts/BaseLayout.astro` and
  `src/components/Header.astro` instead of copy-pasting header/footer markup
  into every page like the old site did.
- **Tailwind CSS**, compiled at build time via `@astrojs/tailwind` (was the
  Play CDN before - same config, same utility classes, no runtime CDN
  dependency any more).
- Plain JS (`public/assets/js/main.js`) for the mobile menu, banner hover/tap
  hotspots, the language dropdown open/close, and the scroll/back-to-top
  button. No framework.

## i18n

Locales: `en`, `ja` (served under the `/jp` path), `vi` - as three parallel
page trees:

```
src/pages/en/...
src/pages/jp/...   (locale code 'ja', URL prefix 'jp' per the original request)
src/pages/vi/...
```

Each of the ~30 source pages was run through `generate.cjs` (kept in this
folder) once, which:
- read the legacy HTML in `../tmp/backup/site-legacy-20260910/`,
- applied the *same* substitution the old `main.js` did at runtime for
  `data-i18n` / `data-i18n-html` / `data-i18n-title` / `data-i18n-alt`
  (using `src/i18n/ui.json`, extracted from the legacy `translations.js`),
  but baked into static HTML per locale instead of swapped client-side,
  rewrote internal links (`about.html` -> `/en/about`, `/jp/about`, ...) and
  asset paths (`assets/...` -> `/assets/...`),
- and wrote one `.astro` file per page per locale under `src/pages/<prefix>/`.

Re-run `node generate.cjs` from this folder any time the legacy source pages
or `src/i18n/ui.json` change and you want to regenerate the locale pages
(it overwrites `src/pages/{en,jp,vi}/*.astro`).

### Landing / language redirect

`src/pages/index.astro` (served at `/`) is a tiny client-side redirect: it
reads `navigator.languages`/`navigator.language` and sends the visitor to
`/jp/` for Japanese, `/vi/` for Vietnamese, and `/en/` for everything else or
when the browser doesn't say - no permission prompt, no IP lookup. A
`<meta http-equiv="refresh">` fallback also points to `/en/` for no-JS
visitors.

## Adding a new project page (the "scale" part)

1. Add the new page's translation keys to `src/i18n/ui.json` (or, if you're
   still working from the legacy site, add them to
   `../tmp/backup/site-legacy-20260910/assets/js/translations.js` and re-extract
   with the one-liner in the project notes).
2. Either hand-write three small `.astro` files (one per locale, wrapped in
   `BaseLayout`), or add the new page's legacy HTML file to
   `../tmp/backup/site-legacy-20260910/` and re-run `node generate.cjs`.
3. `npm run build` and check `dist/`.

## Commands

```
npm install
npm run dev       # http://localhost:4321
npm run build     # -> dist/
npm run preview
```

## Known follow-ups

- `og:image` / hreflang links use root-relative paths (`/en/...`) - swap for
  absolute URLs once the site has a domain (same open item the legacy site
  had).
- `footer.copy` is identical across all three languages in the source data
  (not translated) - that's inherited from the legacy `translations.js`,
  not a bug in the Astro port.
