// Logic for Profile Page
// Separated from interface for clean architecture

// Types
export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
  iconType: 'github' | 'linkedin' | 'twitter';
}

export interface Badge {
  iconType: 'react' | 'mobile' | 'design';
  label: string;
  positionKey: 'react' | 'mobile' | 'design';
}

// Experience Timeline Data
export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior UI/UX Designer',
    company: 'MetaVerse Labs',
    period: '2023 - Present',
    description:
      'Leading the design team for decentralized applications, creating intuitive interfaces for complex blockchain interactions.',
    technologies: ['Figma', 'React', 'Web3'],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'CryptoFinance Inc',
    period: '2021 - 2023',
    description:
      'Built and maintained DeFi protocols, smart contracts, and front-end interfaces for trading platforms.',
    technologies: ['Solidity', 'Next.js', 'Node.js'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'TechStartup Co',
    period: '2019 - 2021',
    description:
      'Developed responsive web applications and contributed to the component library.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 4,
    role: 'Junior Developer',
    company: 'Digital Agency',
    period: '2018 - 2019',
    description:
      'Started my journey in web development, learning modern frameworks and best practices.',
    technologies: ['JavaScript', 'HTML/CSS', 'Vue.js'],
  },
];

// Stats Data
export const stats: Stat[] = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '10+', label: 'Awards Won' },
];

// Social Links Data
export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: '#', iconType: 'github' },
  { name: 'LinkedIn', href: '#', iconType: 'linkedin' },
  { name: 'Twitter', href: '#', iconType: 'twitter' },
];

// Profile Photo Badges - no emojis, using icon types instead
export const profileBadges: Badge[] = [
  { iconType: 'react', label: 'React', positionKey: 'react' },
  { iconType: 'mobile', label: 'Mobile', positionKey: 'mobile' },
  { iconType: 'design', label: 'Design', positionKey: 'design' },
];

// Animation variants
export const profileAnimations = {
  dotPulse: {
    boxShadow: [
      '0 0 0 0 rgba(0, 243, 255, 0.4)',
      '0 0 0 10px rgba(0, 243, 255, 0)',
      '0 0 0 0 rgba(0, 243, 255, 0)',
    ],
  },
  photoGlow: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  },
  photoShadow: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 0.8, 0.5],
  },
  floatingBadge: {
    y: [0, -10, 0],
  },
};

// Get icon SVG by type
export function getSocialIcon(iconType: SocialLink['iconType']): string {
  const icons = {
    github: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    twitter: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  };
  return icons[iconType];
}

// Get badge icon SVG by type
export function getBadgeIcon(iconType: Badge['iconType']): string {
  const icons = {
    react: 'M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-10c-.465 0-1.093.135-1.785.51A11.86 11.86 0 008 6.18c.09-.12.195-.24.3-.345.45-.45.93-.765 1.41-.93.21-.075.405-.12.585-.135.135 0 .27.015.39.045.465.12.84.48 1.11.99.12.225.225.48.315.765.075-.285.165-.54.285-.765.27-.51.645-.87 1.11-.99.12-.03.255-.045.39-.045.18.015.375.06.585.135.48.165.96.48 1.41.93.105.105.21.225.3.345a11.86 11.86 0 00-2.215-2.19C13.093 3.635 12.465 3.5 12 3.5z',
    mobile: 'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-5 2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
    design: 'M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0112 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 00-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 012.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm3 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
  };
  return icons[iconType];
}
