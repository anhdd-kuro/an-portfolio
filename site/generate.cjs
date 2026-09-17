// Codemod: legacy static HTML (with data-i18n runtime attrs) -> per-locale Astro pages.
// Run from inside site/ with: node generate.cjs
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const LEGACY_DIR = path.resolve(__dirname, '../tmp/backup/site-legacy-20260910');
const PAGES_DIR = path.resolve(__dirname, 'src/pages');
const ui = require('./src/i18n/ui.json');

const PREFIX = { en: 'en', ja: 'jp', vi: 'vi' };
const LANGS = ['en', 'ja', 'vi'];

const allFiles = fs.readdirSync(LEGACY_DIR).filter((f) => f.endsWith('.html') && f !== 'project.html');
const slugSet = new Set(allFiles.map((f) => f.replace(/\.html$/, ''))); // includes 'index'

function fixAssetPaths(html) {
  return html
    .replace(/(=["'])assets\//g, '$1/assets/')
    .replace(/\(assets\//g, '(/assets/');
}

function applyLangToDom($, lang) {
  const dict = ui[lang] || {};
  $('[data-i18n]').each((_, el) => {
    const key = $(el).attr('data-i18n');
    if (dict[key] != null) $(el).text(dict[key]);
    $(el).removeAttr('data-i18n');
  });
  $('[data-i18n-html]').each((_, el) => {
    const key = $(el).attr('data-i18n-html');
    if (dict[key] != null) $(el).html(dict[key]);
    $(el).removeAttr('data-i18n-html');
  });
  $('[data-i18n-title]').each((_, el) => {
    const key = $(el).attr('data-i18n-title');
    if (dict[key] != null) {
      $(el).attr('title', dict[key]);
      $(el).attr('aria-label', dict[key]);
    }
    $(el).removeAttr('data-i18n-title');
  });
  $('[data-i18n-alt]').each((_, el) => {
    const key = $(el).attr('data-i18n-alt');
    if (dict[key] != null) $(el).attr('alt', dict[key]);
    $(el).removeAttr('data-i18n-alt');
  });
}

function fixInternalLinks($, lang) {
  const prefix = PREFIX[lang];
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    const m = href.match(/^([\w-]+)\.html(#.*)?$/);
    if (m && slugSet.has(m[1])) {
      const base = m[1] === 'index' ? `/${prefix}` : `/${prefix}/${m[1]}`;
      $(el).attr('href', base + (m[2] || ''));
    }
  });
}

function pageSlugFor(file) {
  return file === 'index.html' ? 'home' : file.replace(/\.html$/, '');
}

function extractHead(html) {
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1].trim();
  const description = (html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1];
  let ogImage = (html.match(/<meta property="og:image" content="([^"]*)"/) || [, '/assets/images/logo.png'])[1];
  if (ogImage.startsWith('assets/')) ogImage = '/' + ogImage;
  return { title, description, ogImage };
}

function extractMainInner(html) {
  const m = html.match(/<main[^>]*>([\s\S]*)<\/main>/);
  if (!m) throw new Error('no <main> found');
  return m[1];
}

function generatePage(file) {
  const raw = fs.readFileSync(path.join(LEGACY_DIR, file), 'utf8');
  const slug = pageSlugFor(file);
  const hasDivider = raw.includes('class="divider"');
  const { title, description, ogImage } = extractHead(raw);
  const mainInner = extractMainInner(raw);

  const results = {};
  for (const lang of LANGS) {
    const $ = cheerio.load(`<div id="__root__">${mainInner}</div>`, {}, false);
    const $root = $('#__root__');
    applyLangToDom($, lang);
    fixInternalLinks($, lang);
    let fragment = $.html($root.contents());
    fragment = fixAssetPaths(fragment);

    const dict = ui[lang] || {};
    const localizedTitle = dict['meta.title.' + (slug === 'home' ? 'home' : slug)] || title;

    results[lang] = { fragment, localizedTitle, description, ogImage, hasDivider };
  }
  return { slug, results };
}

function writeAstroFile(prefix, outSlug, data) {
  const dir = path.join(PAGES_DIR, prefix);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, `${outSlug}.astro`);
  const depth = 2; // src/pages/<prefix>/<file>.astro -> ../../layouts
  const content = `---
import BaseLayout from '${'../'.repeat(depth)}layouts/BaseLayout.astro';
const title = ${JSON.stringify(data.localizedTitle)};
const description = ${JSON.stringify(data.description)};
const ogImage = ${JSON.stringify(data.ogImage)};
---
<BaseLayout lang=${JSON.stringify(data.lang)} page=${JSON.stringify(data.slug)} title={title} description={description} ogImage={ogImage} divider={${data.hasDivider}}>
${data.fragment}
</BaseLayout>
`;
  fs.writeFileSync(filePath, content);
}

let count = 0;
for (const file of allFiles) {
  const { slug, results } = generatePage(file);
  for (const lang of LANGS) {
    const outSlug = slug === 'home' ? 'index' : slug;
    writeAstroFile(PREFIX[lang], outSlug, { ...results[lang], lang, slug });
    count++;
  }
  // Also emit the site-wide 404 Astro auto-detects, using the English copy.
  if (slug === '404') {
    const dir = PAGES_DIR;
    const content = `---
import BaseLayout from '../layouts/BaseLayout.astro';
const title = ${JSON.stringify(results.en.localizedTitle)};
const description = ${JSON.stringify(results.en.description)};
const ogImage = ${JSON.stringify(results.en.ogImage)};
---
<BaseLayout lang="en" page="404" title={title} description={description} ogImage={ogImage} divider={${results.en.hasDivider}}>
${results.en.fragment}
</BaseLayout>
`;
    fs.writeFileSync(path.join(dir, '404.astro'), content);
    count++;
  }
}
console.log('Generated', count, 'astro page files for', allFiles.length, 'source pages x', LANGS.length, 'locales (+root 404).');
