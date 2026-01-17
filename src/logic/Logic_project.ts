// Project Logic - Extended
import { Variants } from 'framer-motion';

// ========== TYPES ==========
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
}

export type ProjectFilter = 'all' | 'on-process' | 'completed';

// ========== DATA ==========
export const projectData = {
  title: 'Experience &',
  titleAccent: 'Project',
  loadMore: 'LOAD MORE PROJECTS',
  viewMoreDetail: 'View More Detail',
  viewMoreProjects: 'View More Projects',
  backButton: '← Back',
  detailTitle: 'DETAIL SINGKAT PROJEK',
  toolsTitle: 'TOOLS & TECH',
  projects: [
    {
      id: '1',
      title: 'NeoBank Mobile App',
      category: 'UI/UX DESIGN & BRANDING',
      shortDescription: 'A modern approach to personal finance management with advanced date visualisation and seamless transaction flows.',
      fullDescription: 'This project aimed to streamline user onboarding and boost engagement through a redesigned interface. I implemented a modern, intuitive layout using clean code and focused on performance optimization. The result is a seamless digital product that solves key user pain points.',
      image: '/Assets/Project/project1.png',
      link: '/project/1',
      status: 'completed' as const,
      tools: [
        { name: 'React Native', icon: '/Assets/Icon/react.png' },
        { name: 'Figma', icon: '/Assets/Icon/figma.png' },
        { name: 'TypeScript', icon: '/Assets/Icon/typescript.png' },
        { name: 'Firebase', icon: '/Assets/Icon/firebase.png' },
        { name: 'Tailwind', icon: '/Assets/Icon/tailwind.png' },
        { name: 'Node.js', icon: '/Assets/Icon/nodejs.png' },
      ],
      stats: [
        { value: '10+', label: 'PAGES' },
        { value: '2', label: 'MONTHS DURATION' },
        { value: '100%', label: 'SATISFACTION' },
      ],
      gallery: [
        { src: '/Assets/Project/project1-1.png', alt: 'NeoBank Screenshot 1' },
        { src: '/Assets/Project/project1-2.png', alt: 'NeoBank Screenshot 2' },
      ],
    },
    {
      id: '2',
      title: 'E-Commerce Dashboard',
      category: 'FRONT-END DEVELOPMENT',
      shortDescription: 'Scalable admin interface built with React and Tailwind CSS, featuring real time analytics and inventory management.',
      fullDescription: 'A comprehensive e-commerce dashboard solution designed for scalability and performance. Built with modern technologies to handle real-time data updates, inventory tracking, and advanced analytics visualization.',
      image: '/Assets/Project/project2.png',
      link: '/project/2',
      status: 'on-process' as const,
      tools: [
        { name: 'React', icon: '/Assets/Icon/react.png' },
        { name: 'Tailwind', icon: '/Assets/Icon/tailwind.png' },
        { name: 'TypeScript', icon: '/Assets/Icon/typescript.png' },
        { name: 'Redux', icon: '/Assets/Icon/redux.png' },
      ],
      stats: [
        { value: '15+', label: 'PAGES' },
        { value: '3', label: 'MONTHS DURATION' },
        { value: '95%', label: 'SATISFACTION' },
      ],
      gallery: [
        { src: '/Assets/Project/project2-1.png', alt: 'Dashboard Screenshot 1' },
      ],
    },
    {
      id: '3',
      title: 'Crypto Wallet',
      category: 'MOBILE UI/UX DESIGN',
      shortDescription: 'A secure and intuitive cryptocurrency wallet application with real-time market tracking and portfolio management.',
      fullDescription: 'Designed and developed a cryptocurrency wallet application that prioritizes security while maintaining an intuitive user experience. Features include real-time price tracking, portfolio analytics, and secure transaction management.',
      image: '/Assets/Project/project3.png',
      link: '/project/3',
      status: 'completed' as const,
      tools: [
        { name: 'Figma', icon: '/Assets/Icon/figma.png' },
        { name: 'React Native', icon: '/Assets/Icon/react.png' },
      ],
      stats: [
        { value: '8+', label: 'SCREENS' },
        { value: '1.5', label: 'MONTHS DURATION' },
        { value: '100%', label: 'SATISFACTION' },
      ],
      gallery: [],
    },
    {
      id: '4',
      title: 'Portfolio Website',
      category: 'WEB DEVELOPMENT',
      shortDescription: 'Personal portfolio showcasing projects and skills with modern animations and responsive design.',
      fullDescription: 'A modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations, dark theme, and responsive design to showcase professional work and skills.',
      image: '/Assets/Project/project4.png',
      link: '/project/4',
      status: 'completed' as const,
      tools: [
        { name: 'Next.js', icon: '/Assets/Icon/nextjs.png' },
        { name: 'Tailwind', icon: '/Assets/Icon/tailwind.png' },
        { name: 'TypeScript', icon: '/Assets/Icon/typescript.png' },
      ],
      stats: [
        { value: '5+', label: 'PAGES' },
        { value: '1', label: 'MONTH DURATION' },
        { value: '100%', label: 'SATISFACTION' },
      ],
      gallery: [],
    },
    {
      id: '5',
      title: 'Mobile Banking App',
      category: 'FINTECH SOLUTION DESIGN',
      shortDescription: 'A comprehensive mobile banking solution with intuitive UI and secure transaction processing.',
      fullDescription: 'Developed a full-featured mobile banking application focusing on user security and seamless transactions. Includes features like biometric authentication, real-time notifications, and comprehensive account management.',
      image: '/Assets/Project/project5.png',
      link: '/project/5',
      status: 'on-process' as const,
      tools: [
        { name: 'Flutter', icon: '/Assets/Icon/flutter.png' },
        { name: 'Firebase', icon: '/Assets/Icon/firebase.png' },
      ],
      stats: [
        { value: '12+', label: 'SCREENS' },
        { value: '4', label: 'MONTHS DURATION' },
        { value: '90%', label: 'SATISFACTION' },
      ],
      gallery: [],
    },
    {
      id: '6',
      title: 'AI Content Generator',
      category: 'NLP MODEL INTEGRATION',
      shortDescription: 'An AI-powered content generation tool leveraging natural language processing for automated content creation.',
      fullDescription: 'Built an intelligent content generation platform using advanced NLP models. The application helps users create high-quality content for various purposes including blog posts, social media, and marketing materials.',
      image: '/Assets/Project/project6.png',
      link: '/project/6',
      status: 'completed' as const,
      tools: [
        { name: 'Python', icon: '/Assets/Icon/python.png' },
        { name: 'React', icon: '/Assets/Icon/react.png' },
      ],
      stats: [
        { value: '6+', label: 'FEATURES' },
        { value: '2', label: 'MONTHS DURATION' },
        { value: '98%', label: 'SATISFACTION' },
      ],
      gallery: [],
    },
    {
      id: '7',
      title: 'Fitness Tracker',
      category: 'HEALTH & WELLNESS MOBILE APP',
      shortDescription: 'A comprehensive fitness tracking application with workout plans, progress monitoring, and health insights.',
      fullDescription: 'Created a holistic fitness tracking application that helps users monitor their workouts, track nutrition, and achieve their health goals with personalized recommendations and progress analytics.',
      image: '/Assets/Project/project7.png',
      link: '/project/7',
      status: 'on-process' as const,
      tools: [
        { name: 'Swift', icon: '/Assets/Icon/swift.png' },
      ],
      stats: [
        { value: '20+', label: 'FEATURES' },
        { value: '5', label: 'MONTHS DURATION' },
        { value: '92%', label: 'SATISFACTION' },
      ],
      gallery: [],
    },
  ] as Project[],
};

// ========== FILTER LOGIC ==========
export const filterProjects = (projects: Project[], filter: ProjectFilter): Project[] => {
  if (filter === 'all') return projects;
  return projects.filter(project => project.status === filter);
};

export const getProjectById = (id: string): Project | undefined => {
  return projectData.projects.find(project => project.id === id);
};

// ========== ANIMATION VARIANTS ==========
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

export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
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

export const detailVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const toolsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

// ========== HOOKS ==========
export const useProjectLogic = () => {
  return {
    projectData,
    filterProjects,
    getProjectById,
  };
};

export default {
  projectData,
  filterProjects,
  getProjectById,
  sectionVariants,
  cardVariants,
  slideVariants,
  buttonVariants,
  detailVariants,
  toolsVariants,
  useProjectLogic,
};
