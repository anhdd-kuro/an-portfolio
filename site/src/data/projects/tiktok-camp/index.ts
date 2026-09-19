import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 11,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/tiktok-camp/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "Tiktok camp - UI design", alt: "Tiktok camp - UI design" },
      ja: { title: "TikTok キャンペーン - UI デザイン", alt: "TikTok キャンペーン - UI デザイン" },
      vi: {
        title: "Chiến dịch TikTok - Thiết kế giao diện",
        alt: "Chiến dịch TikTok - Thiết kế giao diện",
      },
    },
  },
  metadata: {
    en: {
      title: "Tiktok camp - UI design | Thuy An Portfolio",
      description:
        "“I worked on these projects when I was freelancing, collaborating with a close friend. My friend took care of the sketching and working with clients, while I handled the coloring and UI design based on the wireframes provided by TikTok VietNam.”",
      ogImage: "/assets/images/projects/tiktok-camp/thumb.webp",
    },
    ja: {
      title: "TikTok キャンペーン - UI デザイン | Thuy An Portfolio",
      description: "「フリーランス時代に、親しい友人と協力して手がけたプロジェクトです。",
      ogImage: "/assets/images/projects/tiktok-camp/thumb.webp",
    },
    vi: {
      title: "Chiến dịch TikTok - Thiết kế giao diện | Thuy An Portfolio",
      description:
        "“Đây là những dự án mình làm khi còn freelance, hợp tác cùng một người bạn thân.",
      ogImage: "/assets/images/projects/tiktok-camp/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
