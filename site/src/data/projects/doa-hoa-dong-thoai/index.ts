import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 1004,
  listed: false,
  card: {
    image: {
      src: "/assets/images/projects/doa-hoa-dong-thoai/thumb.webp",
      width: 900,
      height: 900,
    },
    title: {},
  },
  metadata: {
    en: {
      title: "Đóa hoa đồng thoại - minh họa trang sách | Thuy An Portfolio",
      description:
        'Book illustrations for children\'s stories from the "Đóa hoa đồng thoại" collection.',
      ogImage: "/assets/images/projects/doa-hoa-dong-thoai/thumb.webp",
    },
    ja: {
      title: "Đóa hoa đồng thoại - 挿絵 | Thuy An Portfolio",
      description: "「Đóa hoa đồng thoại」に収録された子ども向けのお話のための挿絵です。",
      ogImage: "/assets/images/projects/doa-hoa-dong-thoai/thumb.webp",
    },
    vi: {
      title: "Đóa hoa đồng thoại - minh họa trang sách | Thuy An Portfolio",
      description:
        'Minh họa trang sách cho các câu chuyện thiếu nhi trong tuyển tập "Đóa hoa đồng thoại".',
      ogImage: "/assets/images/projects/doa-hoa-dong-thoai/thumb.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
