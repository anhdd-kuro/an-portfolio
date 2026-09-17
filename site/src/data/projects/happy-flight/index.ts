import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 3,
  listed: true,
  card: {
    image: { src: "/assets/images/work/95b49d0f1af8.webp", width: 786, height: 974 },
    title: {
      en: { title: "Happy flight", alt: "Happy flight" },
      ja: { title: "Happy flight", alt: "Happy flight" },
      vi: { title: "Chuyến bay hạnh phúc", alt: "Chuyến bay hạnh phúc" },
    },
  },
  metadata: {
    en: {
      title: "Happy flight | Thuy An Portfolio",
      description:
        "The ehon “Happy Flight” is the winner of the special prize at the 6th Doa hoa dong thoai Awards and has been adapted into an ehon by Doa hoa dong thoa",
      ogImage: "/assets/images/work/ef3a16f3008e.webp",
    },
    ja: {
      title: "Happy flight | Thuy An Portfolio",
      description:
        "The ehon “Happy Flight” is the winner of the special prize at the 6th Doa hoa dong thoai Awards and has been adapted into an ehon by Doa hoa dong thoa",
      ogImage: "/assets/images/work/ef3a16f3008e.webp",
    },
    vi: {
      title: "Chuyến bay hạnh phúc | Thuy An Portfolio",
      description:
        "The ehon “Happy Flight” is the winner of the special prize at the 6th Doa hoa dong thoai Awards and has been adapted into an ehon by Doa hoa dong thoa",
      ogImage: "/assets/images/work/ef3a16f3008e.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
