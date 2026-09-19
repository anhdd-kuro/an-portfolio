import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 14,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/lucky-money/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "Lucky money - LP design", alt: "Lucky money - LP design" },
      ja: { title: "お年玉 - LP デザイン", alt: "お年玉 - LP デザイン" },
      vi: { title: "Lì xì - Thiết kế trang đích", alt: "Lì xì - Thiết kế trang đích" },
    },
  },
  metadata: {
    en: {
      title: "Lucky money - LP design | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/lucky-money/thumb.webp",
    },
    ja: {
      title: "お年玉 - LP デザイン | Thuy An Portfolio",
      description: "Caeruxlab 在籍中に担当したプロジェクトです。",
      ogImage: "/assets/images/projects/lucky-money/thumb.webp",
    },
    vi: {
      title: "Lì xì - Thiết kế trang đích | Thuy An Portfolio",
      description: "Đây là dự án mình thực hiện trong thời gian làm việc tại công ty Caeruxlab.",
      ogImage: "/assets/images/projects/lucky-money/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
