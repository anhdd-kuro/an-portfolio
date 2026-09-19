import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 19,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/game-find-me/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "game find me", alt: "game find me" },
      ja: { title: "Find Me - ゲームUIデザイン", alt: "Find Me - ゲームUIデザイン" },
      vi: {
        title: "Find Me - Thiết kế giao diện trò chơi",
        alt: "Find Me - Thiết kế giao diện trò chơi",
      },
    },
  },
  metadata: {
    en: {
      title: "game find me | Thuy An Portfolio",
      description:
        "UI design for “Find Me”, a mobile game built around a set of mini-games (Shuffle Cup, Flipme, Bomb, Num100). (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/game-find-me/cover.webp",
    },
    ja: {
      title: "Find Me - ゲームUIデザイン | Thuy An Portfolio",
      description:
        "モバイルゲーム「Find Me」のUIデザイン。ミニゲーム（Shuffle Cup / Flipme / Bomb / Num100）をまとめた構成です。",
      ogImage: "/assets/images/projects/game-find-me/cover.webp",
    },
    vi: {
      title: "Find Me - Thiết kế giao diện trò chơi | Thuy An Portfolio",
      description:
        "Thiết kế UI cho “Find Me” - game mobile gồm một bộ mini game (Shuffle Cup, Flipme, Bomb, Num100).",
      ogImage: "/assets/images/projects/game-find-me/cover.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
