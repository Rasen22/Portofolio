// Project Logic
import { Variants } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
}

export const projectData = {
  title: 'Experience &',
  titleAccent: 'Project',
  loadMore: 'Load More...',
  projects: [
    {
      id: '1',
      title: 'Nama Project',
      description: 'Detail project ...',
      link: 'Detail >>>',
    },
    {
      id: '2',
      title: 'Nama Project',
      description: 'Detail project ...',
      link: 'Detail >>>',
    },
  ] as Project[],
};

export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  },
};

export default { projectData, sectionVariants, cardVariants, buttonVariants };
