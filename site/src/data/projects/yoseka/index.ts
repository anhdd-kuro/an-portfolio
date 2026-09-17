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
      ja: { title: "yoseka themme design", alt: "yoseka themme design" },
      vi: { title: "yoseka themme design", alt: "yoseka themme design" },
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
      title: "yoseka themme design | Thuy An Portfolio",
      description:
        "Theme designs for Yoseka photo cards - eight themes, each laid out for the card view and the editor. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/yoseka/cover.webp",
    },
    vi: {
      title: "yoseka themme design | Thuy An Portfolio",
      description:
        "Theme designs for Yoseka photo cards - eight themes, each laid out for the card view and the editor. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/yoseka/cover.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
