import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pageFields = {
  locale: z.enum(["en", "ja", "vi"]),
  title: z.string(),
  description: z.string(),
  heading: z.string(),
};

const pages = defineCollection({
  loader: glob({ pattern: "**/*.json", base: new URL("./content/pages", import.meta.url) }),
  schema: z.discriminatedUnion("kind", [
    z.object({
      ...pageFields,
      kind: z.literal("home"),
      route: z.literal(""),
      heroLabel: z.string(),
      about: z.string(),
      illustrationIntro: z.string(),
      uiIntro: z.string(),
      contact: z.string(),
    }),
    z.object({
      ...pageFields,
      kind: z.literal("about"),
      route: z.literal("about"),
      sections: z.array(
        z.object({
          title: z.string(),
          body: z.string(),
        }),
      ),
    }),
    z.object({
      ...pageFields,
      kind: z.literal("portfolio"),
      route: z.enum(["illustration", "ui-design"]),
      category: z.enum(["illustration", "ui-design"]),
      intro: z.string(),
      introLabel: z.string(),
      projectsLabel: z.string(),
    }),
    z.object({
      ...pageFields,
      kind: z.literal("contact"),
      route: z.literal("contact"),
      body: z.string(),
    }),
    z.object({
      ...pageFields,
      kind: z.literal("not-found"),
      route: z.literal("404"),
      message: z.string(),
      homeLabel: z.string(),
    }),
  ]),
});

export const collections = { pages };
