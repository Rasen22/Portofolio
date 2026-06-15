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
    { name: 'GitHub', icon: 'github', url: 'https://github.com/Rasen22' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/farhan-rasendriya-319718352' },
    { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/6285282808785' },
    { name: 'Email', icon: 'email', url: 'mailto:farhanrasendriya2204@gmail.com' },
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
