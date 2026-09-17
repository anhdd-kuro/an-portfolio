import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 1,
  listed: true,
  card: {
    image: { src: "/assets/images/work/4aa20ea3d416.webp", width: 1177, height: 1200 },
    title: {
      en: {
        title: "Accidentally swallowed the watermelon seed",
        alt: "Accidentally swallowed the watermelon seed",
      },
      ja: {
        title: "Accidentally swallowed the watermelon seed",
        alt: "Accidentally swallowed the watermelon seed",
      },
      vi: { title: "Lỡ nuốt phải hạt dưa hấu", alt: "Lỡ nuốt phải hạt dưa hấu" },
    },
  },
  metadata: {
    en: {
      title: "Accidentally swallowed the watermelon seed | Thuy An Portfolio",
      description:
        "・The book has been selected as one of the top 10 nominees in the 21st ehon writing contest by Bungeisha Publishing House.",
      ogImage: "/assets/images/work/1f6a18f12f08.webp",
    },
    ja: {
      title: "Accidentally swallowed the watermelon seed | Thuy An Portfolio",
      description:
        "・The book has been selected as one of the top 10 nominees in the 21st ehon writing contest by Bungeisha Publishing House.",
      ogImage: "/assets/images/work/1f6a18f12f08.webp",
    },
    vi: {
      title: "Lỡ nuốt phải hạt dưa hấu | Thuy An Portfolio",
      description:
        "・The book has been selected as one of the top 10 nominees in the 21st ehon writing contest by Bungeisha Publishing House.",
      ogImage: "/assets/images/work/1f6a18f12f08.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
