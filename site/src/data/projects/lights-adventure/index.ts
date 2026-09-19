import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 2,
  listed: true,
  card: {
    image: { src: "/assets/images/work/e003c4d3bcb7.webp", width: 1200, height: 1066 },
    title: {
      en: { title: "Light's Adventure", alt: "Light's Adventure" },
      ja: { title: "ひかりのぼうけん", alt: "ひかりのぼうけん" },
      vi: { title: "Chuyện phiêu lưu của ánh nắng", alt: "Chuyện phiêu lưu của ánh nắng" },
    },
  },
  metadata: {
    en: {
      title: "Light's Adventure | Thuy An Portfolio",
      description:
        "This book was inspired by my love for Japan’s cherry blossom season. I had always dreamed of immersing myself in the soft pink world of sakura, and ev",
      ogImage: "/assets/images/work/5109733ee0bf.webp",
    },
    ja: {
      title: "ひかりのぼうけん | Thuy An Portfolio",
      description:
        "この絵本は、日本の桜の季節への憧れから生まれました。淡いピンク色に包まれた桜の世界に浸ることをずっと夢見ていて、その夢がやがてこの物語のインスピレーションになりました。",
      ogImage: "/assets/images/work/5109733ee0bf.webp",
    },
    vi: {
      title: "Chuyện phiêu lưu của ánh nắng | Thuy An Portfolio",
      description:
        "Cuốn sách này được truyền cảm hứng từ tình yêu của mình với mùa hoa anh đào ở Nhật Bản. Mình luôn mơ được đắm mình trong thế giới hồng dịu của sakura, và rồi giấc mơ ấy trở thành nguồn cảm hứng cho câu chuyện này.",
      ogImage: "/assets/images/work/5109733ee0bf.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
