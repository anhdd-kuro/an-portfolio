import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 1020,
  listed: false,
  card: {
    image: { src: "/assets/images/projects/tarot/thumb.webp", width: 900, height: 900 },
    title: {},
  },
  metadata: {
    en: {
      title: "Tarot | Thuy An Portfolio",
      description: "A set of hand-drawn Major Arcana tarot card illustrations.",
      ogImage: "/assets/images/projects/tarot/thumb.webp",
    },
    ja: {
      title: "Tarot | Thuy An Portfolio",
      description: "手描きの大アルカナ・タロットカードのイラストシリーズです。",
      ogImage: "/assets/images/projects/tarot/thumb.webp",
    },
    vi: {
      title: "Tarot | Thuy An Portfolio",
      description: "Bộ minh họa bài Tarot (Major Arcana) vẽ tay.",
      ogImage: "/assets/images/projects/tarot/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
