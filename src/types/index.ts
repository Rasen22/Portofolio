// Project types
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: Technology[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
  completedAt?: string;
}

export interface Technology {
  name: string;
  icon?: string;
  color: 'cyan' | 'purple' | 'gradient';
}

export type ProjectCategory = 
  | 'web-development'
  | 'mobile-app'
  | 'ui-ux-design'
  | 'branding'
  | 'other';

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// Animation types
export interface AnimationVariants {
  initial: object;
  animate: object;
  exit?: object;
}

// Social links
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Profile/About data
export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'other';
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
}
