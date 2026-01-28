// Logic index - Export all logic modules
// Import directly from specific files to avoid naming conflicts

export { navLinks, dropdownVariants, dropdownData, gsapConfig, useNavbarLogic } from './Logic_navbar';
export { heroData, heroVariants, itemVariants, photoVariants, boxVariants } from './Logic_hero';
export { aboutData, useAboutLogic } from './Logic_about';
export { aboutMeData, useAboutMeLogic } from './Logic_aboutMe';
export { skillData } from './Logic_skill';
export { projectData, filterProjects, getProjectById, useProjectLogic } from './Logic_project';
export type { Project, ProjectFilter, ProjectTool, ProjectStat, ProjectGalleryImage } from './Logic_project';
export { contactData } from './Logic_contact';
export { timelineData, timelineAnimations, useExperienceLogic } from './Logic_experience';
export { socialLinks, footerData, useFooterLogic, socialHoverAnimation, socialTapAnimation } from './Logic_footer';
export { contactPageData, pageAnimations, useContactForm, socialIconMap } from './Logic_contactPage';
export { 
  heroCardAnimation, 
  aboutCardAnimation, 
  cleanupScrollTriggers, 
  refreshScrollTrigger 
} from './Logic_scrollytelling';
