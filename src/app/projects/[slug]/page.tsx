import { MOCK_PROJECTS } from '@/lib/constants';
import ProjectPageClient from './ProjectPageClient';

// Generate static params for all projects at build time (required for static export)
export function generateStaticParams() {
  return MOCK_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage() {
  return <ProjectPageClient />;
}
