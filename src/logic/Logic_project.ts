// Project Logic
import { Variants } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

export const projectData = {
  title: 'Experience &',
  titleAccent: 'Project',
  loadMore: 'LOAD MORE PROJECTS',
  projects: [
    {
      id: '1',
      title: 'NeoBank Mobile App',
      category: 'UI/UX DESIGN & BRANDING',
      description: 'A modern approach to personal finance management with advanced date visualisation and seamless transaction flows.',
      image: '/Assets/Project/project1.png',
      link: '#',
    },
    {
      id: '2',
      title: 'E-Commerce Dashboard',
      category: 'FRONT-END DEVELOPMENT',
      description: 'Scalable admin interface built with React and Tailwind CSS, featuring real time analytics and inventory management.',
      image: '/Assets/Project/project2.png',
      link: '#',
    },
    {
      id: '3',
      title: 'Portfolio Website',
      category: 'WEB DEVELOPMENT',
      description: 'Personal portfolio showcasing projects and skills with modern animations and responsive design.',
      image: '/Assets/Project/project3.png',
      link: '#',
    },
    {
      id: '4',
      title: 'Task Management App',
      category: 'FULL-STACK DEVELOPMENT',
      description: 'Collaborative task management platform with real-time updates and team collaboration features.',
      image: '/Assets/Project/project4.png',
      link: '#',
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
