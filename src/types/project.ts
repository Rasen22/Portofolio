// Project Types

export interface ProjectTool {
  name: string;
  icon: string;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectGalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  link: string;
  status: 'completed' | 'on-process';
  tools: ProjectTool[];
  stats: ProjectStat[];
  gallery: ProjectGalleryImage[];
  websiteLink?: string;
}

export interface ProjectData {
  title: string;
  titleAccent: string;
  loadMore: string;
  viewMoreDetail: string;
  viewMoreProjects: string;
  backButton: string;
  detailTitle: string;
  toolsTitle: string;
  projects: Project[];
}

export type ProjectFilter = 'all' | 'on-process' | 'completed';
