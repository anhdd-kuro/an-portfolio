import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 6,
  listed: true,
  card: {
    image: { src: "/assets/images/work/f6f19e2e7c3a.webp", width: 1166, height: 1200 },
    title: {
      en: { title: "Hasu goes camping", alt: "Hasu goes camping" },
      ja: { title: "ハスのキャンプ", alt: "ハスのキャンプ" },
      vi: { title: "Hasu đi cắm trại", alt: "Hasu đi cắm trại" },
    },
  },
  metadata: {
    en: {
      title: "Hasu goes camping | Thuy An Portfolio",
      description:
        "This ehon book is part of a series of 4 books that revolve around the boy named Hasu and his adventures. The content of this book was edited by Trang ",
      ogImage: "/assets/images/work/cc804a71e720.webp",
    },
    ja: {
      title: "ハスのキャンプ | Thuy An Portfolio",
      description:
        "この絵本は、ハスという男の子とその冒険を描いた全4巻シリーズの一冊です。文章は Trang Kyu が担当し、イラストを私が担当しました。",
      ogImage: "/assets/images/work/cc804a71e720.webp",
    },
    vi: {
      title: "Hasu đi cắm trại | Thuy An Portfolio",
      description:
        "Cuốn ehon này thuộc bộ 4 cuốn xoay quanh cậu bé tên Hasu và những chuyến phiêu lưu của cậu. Phần nội dung do Trang Kyu biên tập, còn mình phụ trách phần minh hoạ.",
      ogImage: "/assets/images/work/cc804a71e720.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
