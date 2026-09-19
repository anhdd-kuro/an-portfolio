import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 12,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/top-member-page/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "Top member page - LP design", alt: "Top member page - LP design" },
      ja: { title: "会員トップページ - LP デザイン", alt: "会員トップページ - LP デザイン" },
      vi: {
        title: "Trang chủ thành viên - Thiết kế trang đích",
        alt: "Trang chủ thành viên - Thiết kế trang đích",
      },
    },
  },
  metadata: {
    en: {
      title: "Top member page - LP design | Thuy An Portfolio",
      description: "This is a project that I worked on while at Caeruxlab company.",
      ogImage: "/assets/images/projects/top-member-page/thumb.webp",
    },
    ja: {
      title: "会員トップページ - LP デザイン | Thuy An Portfolio",
      description: "Caeruxlab 在籍中に担当したプロジェクトです。",
      ogImage: "/assets/images/projects/top-member-page/thumb.webp",
    },
    vi: {
      title: "Trang chủ thành viên - Thiết kế trang đích | Thuy An Portfolio",
      description: "Đây là dự án mình thực hiện trong thời gian làm việc tại công ty Caeruxlab.",
      ogImage: "/assets/images/projects/top-member-page/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
