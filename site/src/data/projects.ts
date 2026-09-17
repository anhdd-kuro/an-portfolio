import type {
  Project,
  ProjectCardCopy,
  ProjectCategory,
  ProjectDefinition,
  ProjectLocale,
} from "./projects/types";

const projectModules = import.meta.glob<{ default: ProjectDefinition }>("./projects/*/index.ts", {
  eager: true,
});

const folderName = (filePath: string) => {
  const match = filePath.match(/\/([^/]+)\/index\.ts$/);

  if (!match) {
    throw new Error(`Project module must live in a named folder: ${filePath}`);
  }

  return match[1];
};

export const projects: Project[] = Object.entries(projectModules)
  .map(([filePath, module]) => ({
    ...module.default,
    slug: folderName(filePath),
  }))
  .sort((a, b) => a.order - b.order);

export const getProjectsByCategory = (category: ProjectCategory) =>
  projects.filter((project) => project.category === category && project.listed);

export const getProjectCardCopy = (project: Project, locale: ProjectLocale): ProjectCardCopy => {
  const copy = project.card.title[locale] ?? project.card.title.en;

  if (!copy) {
    throw new Error(`Project ${project.slug} is missing card copy for ${locale}`);
  }

  return copy;
};
