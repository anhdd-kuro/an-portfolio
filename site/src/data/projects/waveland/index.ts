import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 22,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/waveland/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "waveland LP design", alt: "waveland LP design" },
      ja: { title: "WAVELAND - LPデザイン", alt: "WAVELAND - LPデザイン" },
      vi: { title: "WAVELAND - Thiết kế trang đích", alt: "WAVELAND - Thiết kế trang đích" },
    },
  },
  metadata: {
    en: {
      title: "waveland LP design | Thuy An Portfolio",
      description:
        "Website design for WAVELAND - the Capital and X service pages plus About and Contact, in desktop and mobile. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/waveland/cover.webp",
    },
    ja: {
      title: "WAVELAND - LPデザイン | Thuy An Portfolio",
      description:
        "WAVELAND のWebサイトデザイン。Capital・Xのサービスページ、会社紹介、お問い合わせページを、パソコンとモバイル向けに制作しました。",
      ogImage: "/assets/images/projects/waveland/cover.webp",
    },
    vi: {
      title: "WAVELAND - Thiết kế trang đích | Thuy An Portfolio",
      description:
        "Thiết kế website WAVELAND với các trang dịch vụ Capital và X, trang giới thiệu và liên hệ, dành cho máy tính và thiết bị di động.",
      ogImage: "/assets/images/projects/waveland/cover.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
