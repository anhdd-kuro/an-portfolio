import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 17,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/kagu-page/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "Kagu page - EC design", alt: "Kagu page - EC design" },
      ja: { title: "家具ページ - EC デザイン", alt: "家具ページ - EC デザイン" },
      vi: { title: "Trang nội thất (Kagu) - EC design", alt: "Trang nội thất (Kagu) - EC design" },
    },
  },
  metadata: {
    en: {
      title: "Kagu page - EC design | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/kagu-page/thumb.webp",
    },
    ja: {
      title: "家具ページ - EC デザイン | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/kagu-page/thumb.webp",
    },
    vi: {
      title: "Trang nội thất (Kagu) - EC design | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/kagu-page/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
