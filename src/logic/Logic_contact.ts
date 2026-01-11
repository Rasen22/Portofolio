// Contact Logic (Social Media Section)
import { Variants } from 'framer-motion';

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export const contactData = {
  title: "Let's Connect on",
  titleAccent: 'Sosial Media',
  socials: [
    { name: 'GitHub', icon: 'github', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
  ] as SocialLink[],
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

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const socialVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

export default { contactData, sectionVariants, titleVariants, socialVariants };
