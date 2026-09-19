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
      vi: {
        title: "Công thức Bento - Thiết kế trang đích và ứng dụng",
        alt: "Công thức Bento - Thiết kế trang đích và ứng dụng",
      },
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
      description: "Caeruxlab 在籍中に担当したプロジェクトです。",
      ogImage: "/assets/images/projects/bento-recipe/thumb.webp",
    },
    vi: {
      title: "Công thức Bento - Thiết kế trang đích và ứng dụng | Thuy An Portfolio",
      description: "Đây là dự án mình thực hiện trong thời gian làm việc tại công ty Caeruxlab.",
      ogImage: "/assets/images/projects/bento-recipe/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
