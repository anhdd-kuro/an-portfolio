import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 10,
  listed: true,
  card: {
    image: { src: "/assets/images/work/1a7133ed05e9.webp", width: 998, height: 964 },
    title: {
      en: { title: "kaeru sticker", alt: "kaeru sticker" },
      ja: { title: "kaeru sticker", alt: "kaeru sticker" },
      vi: { title: "kaeru sticker", alt: "kaeru sticker" },
    },
  },
  metadata: {
    en: {
      title: "kaeru sticker | Thuy An Portfolio",
      description:
        "A frog sticker set - the same set drawn once with Japanese captions and once with Vietnamese. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/work/19208a312a4f.webp",
    },
    ja: {
      title: "kaeru sticker | Thuy An Portfolio",
      description:
        "A frog sticker set - the same set drawn once with Japanese captions and once with Vietnamese. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/work/19208a312a4f.webp",
    },
    vi: {
      title: "kaeru sticker | Thuy An Portfolio",
      description:
        "A frog sticker set - the same set drawn once with Japanese captions and once with Vietnamese. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/work/19208a312a4f.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
