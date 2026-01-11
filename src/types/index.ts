// Types for Portfolio Website

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Personal Info
export interface PersonalInfo {
  name: string;
  highlightedName: string;
  title: string;
  description: string;
  isOpenToWork: boolean;
}

// Skill
export interface Skill {
  id: string;
  name: string;
  icon?: string;
  filled: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

// Project
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  tags?: string[];
}

// Social Media
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Animation Variants
export interface AnimationVariant {
  hidden: object;
  visible: object;
}
