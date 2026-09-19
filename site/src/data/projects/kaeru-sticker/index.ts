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
      ja: { title: "カエルのスタンプ", alt: "カエルのスタンプ" },
      vi: { title: "Bộ nhãn dán chú ếch", alt: "Bộ nhãn dán chú ếch" },
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
      title: "カエルのスタンプ | Thuy An Portfolio",
      description: "カエルのスタンプセット。同じセットを日本語版とベトナム語版で用意しました。",
      ogImage: "/assets/images/work/19208a312a4f.webp",
    },
    vi: {
      title: "Bộ nhãn dán chú ếch | Thuy An Portfolio",
      description:
        "Bộ sticker chú ếch - cùng một bộ, một bản chú thích tiếng Nhật và một bản tiếng Việt.",
      ogImage: "/assets/images/work/19208a312a4f.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
