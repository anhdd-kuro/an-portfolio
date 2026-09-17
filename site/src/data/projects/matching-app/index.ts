import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 16,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/matching-app/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "Matching app - App mobile design", alt: "Matching app - App mobile design" },
      ja: {
        title: "マッチングアプリ - モバイルアプリデザイン",
        alt: "マッチングアプリ - モバイルアプリデザイン",
      },
      vi: {
        title: "Ứng dụng matching - App mobile design",
        alt: "Ứng dụng matching - App mobile design",
      },
    },
  },
  metadata: {
    en: {
      title: "Matching app - App mobile design | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/matching-app/thumb.webp",
    },
    ja: {
      title: "マッチングアプリ - モバイルアプリデザイン | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/matching-app/thumb.webp",
    },
    vi: {
      title: "Ứng dụng matching - App mobile design | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/matching-app/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
