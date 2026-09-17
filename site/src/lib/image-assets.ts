import type { ImageMetadata } from "astro:assets";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/**/*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

export function resolveImageAsset(publicPath: string): ImageMetadata | undefined {
  if (!publicPath.startsWith("/assets/")) return undefined;

  return images[`../assets/${publicPath.slice("/assets/".length)}`]?.default;
}
