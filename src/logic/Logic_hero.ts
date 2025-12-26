// Hero Logic - Data and utility functions for Hero components

// Tech stack for HeroContent
export const techStack = [
  'Solidity',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Web3.js',
];

// Hero content text
export const heroContent = {
  badge: 'OPEN TO WORK',
  greeting: '<Hello World />',
  name: 'Alex Dev',
  title: 'UI/UX Designer & Frontend Developer',
  description:
    'Building immersive digital experiences for the decentralized web. I bridge the gap between complex blockchain protocols and intuitive user interfaces.',
  downloadButtonText: 'Download CV',
  contactButtonText: 'Contact Me',
  techStackLabel: 'Tech Stack',
};

// Particle configuration for Hero3DModel
export interface ParticleConfig {
  id: number;
  delay: number;
  size: number;
  x: number;
  y: number;
  colorType: 'cyan' | 'purple';
}

// Generate particles for Hero3DModel
export const generateParticles = (count: number = 30): ParticleConfig[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 3,
    size: 2 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    colorType: Math.random() > 0.5 ? 'cyan' : 'purple' as const,
  }));
};

// Orbiting ring configuration
export interface OrbitingRingConfig {
  size: number;
  duration: number;
  delay: number;
  colorType: 'cyan' | 'purple';
}

export const orbitingRings: OrbitingRingConfig[] = [
  { size: 280, duration: 20, delay: 0, colorType: 'cyan' },
  { size: 320, duration: 25, delay: 2, colorType: 'purple' },
  { size: 360, duration: 30, delay: 4, colorType: 'cyan' },
];

// Spring config for 3D effect
export const springConfig = {
  damping: 25,
  stiffness: 150,
};

// Mouse transform ranges
export const mouseTransformConfig = {
  input: [-0.5, 0.5],
  outputX: [-15, 15],
  outputY: [15, -15],
};
