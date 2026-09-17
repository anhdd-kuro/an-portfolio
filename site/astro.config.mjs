import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
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
