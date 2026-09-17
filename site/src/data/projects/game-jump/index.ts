import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 20,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/game-jump/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "Game jump", alt: "Game jump" },
      ja: { title: "Game jump", alt: "Game jump" },
      vi: { title: "Game jump", alt: "Game jump" },
    },
  },
  metadata: {
    en: {
      title: "Game jump | Thuy An Portfolio",
      description:
        "UI design for “Jump Pi”, a mobile jumping game - title, play and result screens. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/game-jump/cover.webp",
    },
    ja: {
      title: "Game jump | Thuy An Portfolio",
      description:
        "UI design for “Jump Pi”, a mobile jumping game - title, play and result screens. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/game-jump/cover.webp",
    },
    vi: {
      title: "Game jump | Thuy An Portfolio",
      description:
        "UI design for “Jump Pi”, a mobile jumping game - title, play and result screens. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/game-jump/cover.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
