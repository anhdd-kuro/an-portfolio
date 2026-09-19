import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 23,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/yoseka/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "yoseka themme design", alt: "yoseka themme design" },
      ja: { title: "Yoseka - テーマデザイン", alt: "Yoseka - テーマデザイン" },
      vi: { title: "Yoseka - Thiết kế chủ đề", alt: "Yoseka - Thiết kế chủ đề" },
    },
  },
  metadata: {
    en: {
      title: "yoseka themme design | Thuy An Portfolio",
      description:
        "Theme designs for Yoseka photo cards - eight themes, each laid out for the card view and the editor. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/yoseka/cover.webp",
    },
    ja: {
      title: "Yoseka - テーマデザイン | Thuy An Portfolio",
      description:
        "Yoseka のフォトカード向けテーマデザイン。8 テーマそれぞれをカード表示と編集画面のかたちで作成しました。",
      ogImage: "/assets/images/projects/yoseka/cover.webp",
    },
    vi: {
      title: "Yoseka - Thiết kế chủ đề | Thuy An Portfolio",
      description:
        "Thiết kế theme cho thiệp ảnh Yoseka - 8 theme, mỗi theme dựng cho cả phần thiệp và phần chỉnh sửa.",
      ogImage: "/assets/images/projects/yoseka/cover.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
