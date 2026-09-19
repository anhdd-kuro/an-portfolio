import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 1019,
  listed: false,
  card: {
    image: { src: "/assets/images/projects/qwiq-logo/thumb.webp", width: 900, height: 900 },
    title: {},
  },
  metadata: {
    en: {
      title: "Qwiq logo | Thuy An Portfolio",
      description: "Logo design for QwiQ - Karabiner company.",
      ogImage: "/assets/images/projects/qwiq-logo/thumb.webp",
    },
    ja: {
      title: "QwiQ - ロゴデザイン | Thuy An Portfolio",
      description: "QwiQ - Karabiner company のロゴデザインです。",
      ogImage: "/assets/images/projects/qwiq-logo/thumb.webp",
    },
    vi: {
      title: "QwiQ - Thiết kế logo | Thuy An Portfolio",
      description: "Thiết kế logo cho QwiQ - Karabiner company.",
      ogImage: "/assets/images/projects/qwiq-logo/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
