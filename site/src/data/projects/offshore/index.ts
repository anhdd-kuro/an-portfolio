import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 13,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/offshore/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "Offshore - LP design", alt: "Offshore - LP design" },
      ja: { title: "オフショア - LP デザイン", alt: "オフショア - LP デザイン" },
      vi: { title: "Offshore - Thiết kế trang đích", alt: "Offshore - Thiết kế trang đích" },
    },
  },
  metadata: {
    en: {
      title: "Offshore - LP design | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/offshore/thumb.webp",
    },
    ja: {
      title: "オフショア - LP デザイン | Thuy An Portfolio",
      description: "Caeruxlab 在籍中に担当したプロジェクトです。",
      ogImage: "/assets/images/projects/offshore/thumb.webp",
    },
    vi: {
      title: "Offshore - Thiết kế trang đích | Thuy An Portfolio",
      description: "Đây là dự án mình thực hiện trong thời gian làm việc tại công ty Caeruxlab.",
      ogImage: "/assets/images/projects/offshore/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
