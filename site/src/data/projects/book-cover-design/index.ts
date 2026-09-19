import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 8,
  listed: true,
  card: {
    image: { src: "/assets/images/work/d952af45a500.webp", width: 1200, height: 1200 },
    title: {
      en: { title: "Book cover design", alt: "Book cover design" },
      ja: { title: "ブックカバーデザイン", alt: "ブックカバーデザイン" },
      vi: { title: "Thiết kế bìa sách", alt: "Thiết kế bìa sách" },
    },
  },
  metadata: {
    en: {
      title: "Book cover design | Thuy An Portfolio",
      description:
        "・Category : Book cover design ・Client : Quang Van publishing company, Wabooks vn ・Tool used : Adobe Illustrator, Adobe Photoshop, Procreate",
      ogImage: "/assets/images/work/bff049fc167c.webp",
    },
    ja: {
      title: "ブックカバーデザイン | Thuy An Portfolio",
      description: "カテゴリ：ブックカバーデザイン",
      ogImage: "/assets/images/work/bff049fc167c.webp",
    },
    vi: {
      title: "Thiết kế bìa sách | Thuy An Portfolio",
      description: "Hạng mục : Thiết kế bìa sách",
      ogImage: "/assets/images/work/bff049fc167c.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
