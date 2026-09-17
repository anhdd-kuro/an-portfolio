import EnContent from "./en.astro";
import JaContent from "./ja.astro";
import ViContent from "./vi.astro";
import type { ProjectDefinition } from "../types";

const project = {
  category: "ui-design",
  order: 22,
  listed: true,
  card: {
    image: { src: "/assets/images/projects/waveland/thumb.webp", width: 900, height: 900 },
    title: {
      en: { title: "waveland LP design", alt: "waveland LP design" },
      ja: { title: "waveland LP design", alt: "waveland LP design" },
      vi: { title: "waveland LP design", alt: "waveland LP design" },
    },
  },
  metadata: {
    en: {
      title: "waveland LP design | Thuy An Portfolio",
      description:
        "Website design for WAVELAND - the Capital and X service pages plus About and Contact, in desktop and mobile. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/waveland/cover.webp",
    },
    ja: {
      title: "waveland LP design | Thuy An Portfolio",
      description:
        "Website design for WAVELAND - the Capital and X service pages plus About and Contact, in desktop and mobile. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/waveland/cover.webp",
    },
    vi: {
      title: "waveland LP design | Thuy An Portfolio",
      description:
        "Website design for WAVELAND - the Capital and X service pages plus About and Contact, in desktop and mobile. (Placeholder text, to be updated.)",
      ogImage: "/assets/images/projects/waveland/cover.webp",
    },
  },
  content: { en: EnContent, ja: JaContent, vi: ViContent },
} satisfies ProjectDefinition;

export default project;
