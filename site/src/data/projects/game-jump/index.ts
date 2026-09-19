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
      ja: { title: "Jump Pi - ゲームUIデザイン", alt: "Jump Pi - ゲームUIデザイン" },
      vi: {
        title: "Jump Pi - Thiết kế giao diện trò chơi",
        alt: "Jump Pi - Thiết kế giao diện trò chơi",
      },
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
      title: "Jump Pi - ゲームUIデザイン | Thuy An Portfolio",
      description:
        "モバイルゲーム「Jump Pi」のUIデザイン。タイトル・プレイ中・リザルトの各画面です。",
      ogImage: "/assets/images/projects/game-jump/cover.webp",
    },
    vi: {
      title: "Jump Pi - Thiết kế giao diện trò chơi | Thuy An Portfolio",
      description:
        "Thiết kế UI cho “Jump Pi” - game mobile nhảy platform, gồm màn tiêu đề, trong game và kết quả.",
      ogImage: "/assets/images/projects/game-jump/cover.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
