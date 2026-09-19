import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 21,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/ketnoi/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "ketnoi LP design", alt: "ketnoi LP design" },
      ja: { title: "KET NOI - LPデザイン", alt: "KET NOI - LPデザイン" },
      vi: { title: "KET NOI - Thiết kế trang đích", alt: "KET NOI - Thiết kế trang đích" },
    },
  },
  metadata: {
    en: {
      title: "ketnoi LP design | Thuy An Portfolio",
      description:
        "Corporate landing page for KET NOI, designed for desktop and mobile. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/ketnoi/cover.webp",
    },
    ja: {
      title: "KET NOI - LPデザイン | Thuy An Portfolio",
      description:
        "KET NOI の企業向けランディングページ。パソコンとモバイルの両方に対応したデザインです。",
      ogImage: "/assets/images/projects/ketnoi/cover.webp",
    },
    vi: {
      title: "KET NOI - Thiết kế trang đích | Thuy An Portfolio",
      description:
        "Thiết kế trang đích doanh nghiệp cho KET NOI, dành cho máy tính và thiết bị di động.",
      ogImage: "/assets/images/projects/ketnoi/cover.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
