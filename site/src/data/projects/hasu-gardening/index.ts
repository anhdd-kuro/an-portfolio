import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "illustration",
  order: 5,
  listed: true,
  card: {
    image: { src: "/assets/images/work/dbcd3708f4f3.webp", width: 1184, height: 1200 },
    title: {
      en: { title: "Hasu doing gardening", alt: "Hasu doing gardening" },
      ja: { title: "Hasu doing gardening", alt: "Hasu doing gardening" },
      vi: { title: "Hasu làm vườn", alt: "Hasu làm vườn" },
    },
  },
  metadata: {
    en: {
      title: "Hasu doing gardening | Thuy An Portfolio",
      description:
        "This ehon book is part of a series of 4 books that revolve around the boy named Hasu and his adventures. The content of this book was edited by Trang ",
      ogImage: "/assets/images/work/99641c8a559e.webp",
    },
    ja: {
      title: "Hasu doing gardening | Thuy An Portfolio",
      description:
        "This ehon book is part of a series of 4 books that revolve around the boy named Hasu and his adventures. The content of this book was edited by Trang ",
      ogImage: "/assets/images/work/99641c8a559e.webp",
    },
    vi: {
      title: "Hasu làm vườn | Thuy An Portfolio",
      description:
        "This ehon book is part of a series of 4 books that revolve around the boy named Hasu and his adventures. The content of this book was edited by Trang ",
      ogImage: "/assets/images/work/99641c8a559e.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
