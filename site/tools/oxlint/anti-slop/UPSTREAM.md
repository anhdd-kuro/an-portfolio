# Upstream provenance

- Source repository: https://github.com/dmmulroy/anti-slop
- Source revision: `c44ef22ca116d0ba62a3ff663a0bd13a3f3fa40b`
- Copied source: `skills/install-anti-slop/assets/anti-slop/` at that revision
- Installed entry point: `site/tools/oxlint/anti-slop/index.ts`
- Companion dependency: `@oxlint/plugins` `1.83.0`, matching `oxlint` `1.83.0`
- Intentional deviations: the generic rules are enabled; the optional Effect
  plugin is not registered because this project has no direct `effect`
  dependency; the copied rule source is otherwise unmodified.

The vendored files are owned by this repository. Update them only after
reviewing a new upstream revision and preserving this provenance record.
