// Hero Logic
import { Variants } from 'framer-motion';
import type { HeroData } from '@/types';

export const heroData: HeroData = {
  badge: 'OPEN TO WORK',
  greeting: "Hi, I'm",
  name: 'Farhan Rasendriya',
  role: 'UI/UX & Front-end Developer.',
  buttons: {
    download: 'DOWNLOAD CV',
    contact: 'CONTACT ME',
  },
  stats: [
    { value: '5+', label: 'Projects', icon: '📁' },
    { value: '10+', label: 'Technical Skills', icon: '💻' },
    { value: '3+', label: 'Years Experience', icon: '⚡' },
  ],
};

export const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export const boxVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

export default { heroData, heroVariants, itemVariants, photoVariants, boxVariants };
