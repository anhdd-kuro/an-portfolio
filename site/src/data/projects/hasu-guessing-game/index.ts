import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 7,
  listed: true,
  card: {
    image: { src: "/assets/images/work/04cb46a26902.webp", width: 1197, height: 1200 },
    title: {
      en: { title: "Hasu playing a guessing game", alt: "Hasu playing a guessing game" },
      ja: { title: "ハスのあてっこゲーム", alt: "ハスのあてっこゲーム" },
      vi: { title: "Hasu chơi trò đoán đồ", alt: "Hasu chơi trò đoán đồ" },
    },
  },
  metadata: {
    en: {
      title: "Hasu playing a guessing game | Thuy An Portfolio",
      description:
        "This ehon book is part of a series of 4 books that revolve around the boy named Hasu and his adventures. The content of this book was edited by Trang ",
      ogImage: "/assets/images/work/fd28fdd43dc0.webp",
    },
    ja: {
      title: "ハスのあてっこゲーム | Thuy An Portfolio",
      description:
        "この絵本は、ハスという男の子とその冒険を描いた全4巻シリーズの一冊です。文章は Trang Kyu が担当し、イラストを私が担当しました。",
      ogImage: "/assets/images/work/fd28fdd43dc0.webp",
    },
    vi: {
      title: "Hasu chơi trò đoán đồ | Thuy An Portfolio",
      description:
        "Cuốn ehon này thuộc bộ 4 cuốn xoay quanh cậu bé tên Hasu và những chuyến phiêu lưu của cậu. Phần nội dung do Trang Kyu biên tập, còn mình phụ trách phần minh hoạ.",
      ogImage: "/assets/images/work/fd28fdd43dc0.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
