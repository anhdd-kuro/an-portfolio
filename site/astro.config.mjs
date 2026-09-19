import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://thuy-an-portfolio.anhdd-kuro.chatgpt.site",
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/+$/, "") || "/";

        return pathname !== "/" && !pathname.endsWith("/404");
      },
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          jp: "ja",
          vi: "vi",
        },
      },
    }),
  ],
  image: {
    breakpoints: [640, 960, 1280, 1920],
  },
  fonts: [
    {
      name: "Quicksand",
      cssVariable: "--font-quicksand",
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
      formats: ["woff2"],
      fallbacks: ["sans-serif"],
      display: "swap",
    },
    {
      name: "Hina Mincho",
      cssVariable: "--font-hina-mincho",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
      subsets: ["japanese"],
      formats: ["woff2"],
      fallbacks: ["serif"],
      display: "swap",
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
