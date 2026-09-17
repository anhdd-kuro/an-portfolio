import ui from "./ui.json";
import type { Locale } from "./config";

export function useTranslations(locale: Locale) {
  const localizedUi = ui[locale];

  return (key: keyof typeof ui.en) => localizedUi[key] ?? ui.en[key] ?? key;
}
