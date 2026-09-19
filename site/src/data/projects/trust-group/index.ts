import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 15,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/trust-group/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "Trust group - HP design (demo)", alt: "Trust group - HP design (demo)" },
      ja: { title: "Trust group - HP デザイン（デモ）", alt: "Trust group - HP デザイン（デモ）" },
      vi: {
        title: "Trust group - Thiết kế trang chủ (bản mẫu)",
        alt: "Trust group - Thiết kế trang chủ (bản mẫu)",
      },
    },
  },
  metadata: {
    en: {
      title: "Trust group - HP design (demo) | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/trust-group/thumb.webp",
    },
    ja: {
      title: "Trust group - HP デザイン（デモ） | Thuy An Portfolio",
      description: "Caeruxlab 在籍中に担当したプロジェクトです。",
      ogImage: "/assets/images/projects/trust-group/thumb.webp",
    },
    vi: {
      title: "Trust group - Thiết kế trang chủ (bản mẫu) | Thuy An Portfolio",
      description: "Đây là dự án mình thực hiện trong thời gian làm việc tại công ty Caeruxlab.",
      ogImage: "/assets/images/projects/trust-group/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
