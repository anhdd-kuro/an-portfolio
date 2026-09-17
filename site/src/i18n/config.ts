export const localeEntries = [
  { locale: "en", route: "en", htmlLang: "en", label: "English", shortLabel: "EN" },
  { locale: "ja", route: "jp", htmlLang: "ja", label: "日本語", shortLabel: "JA" },
  { locale: "vi", route: "vi", htmlLang: "vi", label: "Tiếng Việt", shortLabel: "VI" },
] as const;

export type Locale = (typeof localeEntries)[number]["locale"];

export type RouteLocale = (typeof localeEntries)[number]["route"];

export const defaultLocale: Locale = "en";

export function routeFromLocale(locale: Locale): RouteLocale {
  const entry = localeEntries.find((candidate) => candidate.locale === locale);

  if (!entry) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return entry.route;
}

export function localeFromRoute(route: string): Locale | undefined {
  return localeEntries.find((candidate) => candidate.route === route)?.locale;
}

export function htmlLangFromLocale(locale: Locale) {
  const entry = localeEntries.find((candidate) => candidate.locale === locale);

  if (!entry) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return entry.htmlLang;
}

export function localizedPath(locale: Locale, page: string) {
  const prefix = routeFromLocale(locale);

  return page === "home" ? `/${prefix}` : `/${prefix}/${page}`;
}
