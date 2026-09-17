import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 9,
  listed: true,
  card: {
    image: { src: "/assets/images/work/6fd199499632.webp", width: 1400, height: 1224 },
    title: {
      en: { title: "asahi", alt: "asahi" },
      ja: { title: "asahi", alt: "asahi" },
      vi: { title: "asahi", alt: "asahi" },
    },
  },
  metadata: {
    en: {
      title: "asahi | Thuy An Portfolio",
      description:
        "Isometric illustration set - a rough layout first, then the finished scenes in two colour themes. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/work/a9ef1987abe2.webp",
    },
    ja: {
      title: "asahi | Thuy An Portfolio",
      description:
        "Isometric illustration set - a rough layout first, then the finished scenes in two colour themes. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/work/a9ef1987abe2.webp",
    },
    vi: {
      title: "asahi | Thuy An Portfolio",
      description:
        "Isometric illustration set - a rough layout first, then the finished scenes in two colour themes. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/work/a9ef1987abe2.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
