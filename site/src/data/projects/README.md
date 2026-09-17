# Projects

Each project lives in its own folder. The folder name is the public slug, so
`src/data/projects/new-project/` becomes `/en/new-project`, `/jp/new-project`,
and `/vi/new-project`.

To add a project:

1. Copy an existing project folder and rename it with a URL-safe slug.
2. Keep `index.ts`, `en.astro`, `ja.astro`, and `vi.astro` in the folder.
3. Update the metadata and card copy in `index.ts`. The catalog in
   `src/data/projects.ts` imports every folder automatically.

The locale files contain only the page body. The dynamic `[lang]/[slug]` route
provides the shared layout, metadata, and localized URL prefix.
