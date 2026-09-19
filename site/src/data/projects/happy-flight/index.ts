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
      ja: { title: "しあわせのフライト", alt: "しあわせのフライト" },
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
      title: "しあわせのフライト | Thuy An Portfolio",
      description:
        "絵本『しあわせのフライト』は、第6回 Doa hoa dong thoai 賞の特別賞受賞作で、Doa hoa dong thoai - Quy Bac Cau により絵本化されました。2024年3月初旬、ベトナム文学館での記者発表会でお披露目されました。",
      ogImage: "/assets/images/work/ef3a16f3008e.webp",
    },
    vi: {
      title: "Chuyến bay hạnh phúc | Thuy An Portfolio",
      description:
        "Ehon “Chuyến bay hạnh phúc” là tác phẩm đoạt giải đặc biệt tại Giải thưởng Đoá hoa đồng thoại lần thứ 6, được Đoá hoa đồng thoại - Quỹ Bắc Cầu chuyển thể thành ehon. Sách ra mắt tại buổi họp báo đầu tháng 3 năm 2024 ở Bảo tàng Văn học Việt Nam.",
      ogImage: "/assets/images/work/ef3a16f3008e.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
