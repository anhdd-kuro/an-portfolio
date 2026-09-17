/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Replaces Tailwind's default screens entirely -- matches the original
    // inline `tailwind.config` that every legacy page carried in <head>.
    screens: { sm: "480px", mb: "680px", md: "768px", dt: "1150px", xl: "1280px" },
    extend: {
      fontFamily: { serif: ["var(--font-quicksand)", "sans-serif"] },
      colors: { ink: "#000000", paper: "#ffffff", card: "#d9d9d9" },
      borderRadius: { card: "15px" },
      letterSpacing: { body: "0.08em", brand: "0.18em" },
    },
  },
  plugins: [],
};
