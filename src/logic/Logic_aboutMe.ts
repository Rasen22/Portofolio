// About Me Section Logic (Profile Singkat di Homepage)
import { Variants } from 'framer-motion';
import { AboutMeData } from '@/types/aboutMe';

// ========== DATA ==========
export const aboutMeData: AboutMeData = {
  badge: 'ABOUT ME',
  title: 'PERSONAL PROFILE',
  description:
    'A dedicated and detail-oriented Front-end Developer & UI/UX Designer with experience in creating user-friendly digital experiences. As a semester 5 Information Systems student at Universitas Nasional (GPA: 3.88), I combine technical expertise in HTML, CSS, JavaScript, and Figma with creative problem-solving skills. My experience includes developing responsive website interfaces, designing intuitive user flows, and implementing digital solutions that enhance user experience. I specialize in transforming into visually appealing interfaces while maintaining strong collaboration with UI/UX teams to deliver high-quality, functional solutions.',
  image: '/Assets/Profile/profile.jpg',
  buttons: [
    {
      label: 'VIEW MORE DETAIL',
      href: '/about',
      variant: 'primary',
    },
    {
      label: 'VIEW EXPERIENCE',
      href: '/experience',
      variant: 'secondary',
    },
  ],
};

// ========== ANIMATION VARIANTS ==========
export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

export const imageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const contentVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const titleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
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
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: 'easeOut',
    },
  }),
};

// ========== HOOK ==========
export const useAboutMeLogic = () => {
  return {
    data: aboutMeData,
  };
};

export default {
  aboutMeData,
  sectionVariants,
  imageVariants,
  contentVariants,
  titleVariants,
  buttonVariants,
  useAboutMeLogic,
};
