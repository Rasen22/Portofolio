// Skill Logic
import { Variants } from 'framer-motion';

export interface SkillItem {
  name: string;
  filled: boolean;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const skillData = {
  badge: 'Tech Stack',
  title: 'Skill',
  subtitle: 'Detail singkat.....',
  categories: [
    {
      title: 'Web Development & Deployment',
      skills: [
        { name: '', filled: true },
        { name: '', filled: true },
        { name: '', filled: false },
        { name: '', filled: false },
        { name: '', filled: false },
        { name: '', filled: false },
        { name: '', filled: false },
        { name: '', filled: false },
      ],
    },
    {
      title: 'Design & Productivity Tools',
      skills: [
        { name: '', filled: true },
        { name: '', filled: true },
        { name: '', filled: false },
        { name: '', filled: false },
        { name: '', filled: false },
        { name: '', filled: false },
        { name: '', filled: false },
        { name: '', filled: false },
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
