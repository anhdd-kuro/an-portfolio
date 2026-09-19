import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 0,
  listed: true,
  card: {
    image: { src: "/assets/images/work/70338b4f401c.webp", width: 1200, height: 1200 },
    title: {
      en: { title: "My artwork", alt: "My artwork" },
      ja: { title: "パーソナルワーク", alt: "パーソナルワーク" },
      vi: { title: "Tranh cá nhân", alt: "Tranh cá nhân" },
    },
  },
  metadata: {
    en: {
      title: "My artwork | Thuy An Portfolio",
      description:
        "Here are some of my personal artworks. I create pieces that reflect aspects of life, and psychology, and my hope is to evoke a sense of comfort for th",
      ogImage: "/assets/images/work/70338b4f401c.webp",
    },
    ja: {
      title: "パーソナルワーク | Thuy An Portfolio",
      description:
        "こちらは私の個人制作の作品です。暮らしのひとこまや心のうごきを写しとるように描いています。見てくださる方が、少しほっとできたらうれしいです。",
      ogImage: "/assets/images/work/70338b4f401c.webp",
    },
    vi: {
      title: "Tranh cá nhân | Thuy An Portfolio",
      description:
        "Đây là một số tranh cá nhân của mình. Mình vẽ những điều phản chiếu các mảnh của đời sống và tâm lý con người, và mong sao người xem cảm thấy được an ủi phần nào.",
      ogImage: "/assets/images/work/70338b4f401c.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
