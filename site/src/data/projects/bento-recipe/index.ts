import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 18,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/bento-recipe/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "Bento recipe - LP | App design", alt: "Bento recipe - LP | App design" },
      ja: {
        title: "お弁当レシピ - LP / アプリデザイン",
        alt: "お弁当レシピ - LP / アプリデザイン",
      },
      vi: { title: "Bento recipe - LP | App design", alt: "Bento recipe - LP | App design" },
    },
  },
  metadata: {
    en: {
      title: "Bento recipe - LP | App design | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/bento-recipe/thumb.webp",
    },
    ja: {
      title: "お弁当レシピ - LP / アプリデザイン | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/bento-recipe/thumb.webp",
    },
    vi: {
      title: "Bento recipe - LP | App design | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/bento-recipe/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
