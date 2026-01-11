// Hero Logic
import { Variants } from 'framer-motion';

export const heroData = {
  badge: 'Open To work',
  greeting: "Hi, I'M",
  name: 'Farhan Rasendriya Putra Ismanto',
  role: 'UI/UX & Front end Developer',
  description: 'Detail Singkat ......',
  buttons: {
    contact: 'Contact me',
    download: 'Download Cv',
  },
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
