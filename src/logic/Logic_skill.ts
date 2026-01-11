// Skill Logic
import { Variants } from 'framer-motion';

export interface SkillItem {
  name: string;
  icon: string; // Path to icon in /Assets/Icon/
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const skillData = {
  badge: 'Tech Stack',
  title: 'Skill',
  subtitle: 'Tools and technologies I master to bring ideas to life.',
  categories: [
    {
      title: 'Web Development & Deployment',
      skills: [
        { name: 'LARAVEL', icon: '/Assets/Icon/laravel.png' },
        { name: 'PHP', icon: '/Assets/Icon/php.png' },
        { name: 'XAMPP', icon: '/Assets/Icon/xampp.png' },
        { name: 'TYPESCRIPT', icon: '/Assets/Icon/typescript.png' },
        { name: 'REACT.JS', icon: '/Assets/Icon/react.png' },
        { name: 'REACT QUERY', icon: '/Assets/Icon/react-query.png' },
      ],
    },
    {
      title: 'Design & Productivity Tools',
      skills: [
        { name: 'FIGMA', icon: '/Assets/Icon/figma.png' },
        { name: 'CANVA', icon: '/Assets/Icon/canva.png' },
        { name: 'POWERPOINT', icon: '/Assets/Icon/powerpoint.png' },
        { name: 'WORD', icon: '/Assets/Icon/word.png' },
        { name: 'EXCEL', icon: '/Assets/Icon/excel.png' },
      ],
    },
  ] as SkillCategory[],
};

export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const circleVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

export default { skillData, sectionVariants, headerVariants, circleVariants };
