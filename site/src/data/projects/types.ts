import type { Component } from "astro";
import type { Locale } from "../../i18n/config";

export type ProjectLocale = Locale;

export type ProjectCategory = "illustration" | "ui-design";

export interface LocalizedText {
  en: string;
  ja: string;
  vi: string;
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface ProjectCardCopy {
  title: string;
  alt: string;
}

export interface ProjectMetadata {
  title: string;
  description: string;
  ogImage: string;
}

export interface ProjectDefinition {
  category: ProjectCategory;
  order: number;
  listed: boolean;
  card: {
    image: ProjectImage;
    title: Partial<Record<ProjectLocale, ProjectCardCopy>>;
  };
  metadata: Record<ProjectLocale, ProjectMetadata>;
  content: Record<ProjectLocale, Component>;
}

export interface Project extends ProjectDefinition {
  slug: string;
}
