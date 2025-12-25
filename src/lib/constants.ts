import { NavItem, Project, ProfileData } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Profile', href: '/profile' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
];

export const PROFILE_DATA: ProfileData = {
  name: 'John Doe',
  title: 'Full Stack Developer & UI/UX Designer',
  bio: 'Passionate developer with 5+ years of experience building modern web applications. I specialize in React, Next.js, and creating beautiful user interfaces with attention to detail and performance.',
  avatar: '/images/avatar.jpg',
  location: 'San Francisco, CA',
  email: 'hello@johndoe.dev',
  resumeUrl: '/resume.pdf',
  socialLinks: SOCIAL_LINKS,
  skills: [
    { name: 'React/Next.js', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 95, category: 'frontend' },
    { name: 'Framer Motion', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },
    { name: 'Figma', level: 90, category: 'design' },
    { name: 'Git', level: 90, category: 'tools' },
  ],
  experience: [
    {
      company: 'Tech Corp',
      position: 'Senior Frontend Developer',
      startDate: '2022-01',
      current: true,
      description: 'Leading the frontend team in building scalable web applications using React and Next.js.',
      technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL'],
    },
    {
      company: 'StartUp Inc',
      position: 'Full Stack Developer',
      startDate: '2020-03',
      endDate: '2021-12',
      current: false,
      description: 'Developed and maintained multiple client projects from concept to deployment.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    },
  ],
  education: [
    {
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2016-09',
      endDate: '2020-05',
      current: false,
    },
  ],
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'metamask-clone',
    title: 'MetaMask Clone',
    description: 'A pixel-perfect clone of MetaMask website with advanced animations.',
    longDescription: 'This project showcases advanced animation techniques using Framer Motion and Locomotive Scroll. Features include parallax effects, smooth page transitions, and interactive UI elements.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
    images: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800',
    ],
    technologies: [
      { name: 'Next.js', color: 'cyan' },
      { name: 'Framer Motion', color: 'purple' },
      { name: 'Tailwind CSS', color: 'cyan' },
    ],
    category: 'web-development',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    createdAt: '2024-01-15',
    completedAt: '2024-03-20',
  },
  {
    id: '2',
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management.',
    longDescription: 'A comprehensive e-commerce platform built with Next.js and Stripe integration. Features include real-time inventory tracking, user authentication, and a beautiful checkout experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    technologies: [
      { name: 'React', color: 'cyan' },
      { name: 'Node.js', color: 'purple' },
      { name: 'PostgreSQL', color: 'cyan' },
      { name: 'Stripe', color: 'purple' },
    ],
    category: 'web-development',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    createdAt: '2024-02-01',
    completedAt: '2024-05-15',
  },
  {
    id: '3',
    slug: 'mobile-banking-app',
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking application UI design.',
    longDescription: 'A complete UI/UX design for a modern mobile banking application. Includes user research, wireframes, prototypes, and final designs with a focus on accessibility and security.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    technologies: [
      { name: 'Figma', color: 'cyan' },
      { name: 'Prototyping', color: 'purple' },
      { name: 'User Research', color: 'gradient' },
    ],
    category: 'ui-ux-design',
    featured: true,
    createdAt: '2024-03-10',
    completedAt: '2024-04-25',
  },
  {
    id: '4',
    slug: 'ai-dashboard',
    title: 'AI Analytics Dashboard',
    description: 'Real-time analytics dashboard with AI-powered insights.',
    longDescription: 'An advanced analytics dashboard featuring AI-powered data visualization and insights. Built with performance in mind, handling millions of data points with smooth interactions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    technologies: [
      { name: 'React', color: 'cyan' },
      { name: 'D3.js', color: 'purple' },
      { name: 'Python', color: 'cyan' },
      { name: 'TensorFlow', color: 'purple' },
    ],
    category: 'web-development',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    createdAt: '2024-04-05',
  },
  {
    id: '5',
    slug: 'brand-identity-startup',
    title: 'TechStart Brand Identity',
    description: 'Complete brand identity design for a tech startup.',
    longDescription: 'A comprehensive brand identity project including logo design, color palette, typography, and brand guidelines for a cutting-edge tech startup.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
    technologies: [
      { name: 'Illustrator', color: 'cyan' },
      { name: 'Photoshop', color: 'purple' },
      { name: 'Brand Strategy', color: 'gradient' },
    ],
    category: 'branding',
    featured: false,
    createdAt: '2024-05-20',
    completedAt: '2024-06-30',
  },
  {
    id: '6',
    slug: 'fitness-tracker-app',
    title: 'FitTrack Mobile App',
    description: 'Cross-platform fitness tracking application with social features.',
    longDescription: 'A React Native fitness tracking app with workout planning, progress tracking, and social features. Integrates with various fitness wearables and health APIs.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800',
    technologies: [
      { name: 'React Native', color: 'cyan' },
      { name: 'Firebase', color: 'purple' },
      { name: 'HealthKit', color: 'cyan' },
    ],
    category: 'mobile-app',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    createdAt: '2024-06-01',
  },
];

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  pageTransition: 0.4,
};

export const EASING = {
  smooth: [0.16, 1, 0.3, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  easeInOut: [0.4, 0, 0.2, 1],
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};
