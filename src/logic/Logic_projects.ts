// Logic for Projects Page
// Separated from interface for clean architecture

// Types
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  technologies: string[];
  year: string;
  featured: boolean;
}

export interface Category {
  id: string;
  label: string;
  color: 'white' | 'cyan' | 'purple' | 'green' | 'pink';
}

// Project Categories
export const categories: Category[] = [
  { id: 'all', label: 'All Projects', color: 'white' },
  { id: 'web3', label: 'Web3', color: 'cyan' },
  { id: 'frontend', label: 'Frontend', color: 'purple' },
  { id: 'mobile', label: 'Mobile', color: 'green' },
  { id: 'design', label: 'UI/UX', color: 'pink' },
];

// Projects Data
export const projects: Project[] = [
  {
    id: '1',
    slug: 'nexus-defi-protocol',
    title: 'Nexus DeFi Protocol',
    category: 'web3',
    thumbnail: '/projects/defi.jpg',
    description: 'Full-featured Solana DeFi platform with AMM, staking, and yield farming capabilities.',
    technologies: ['Solidity', 'React', 'Web3.js', 'Hardhat'],
    year: '2024',
    featured: true,
  },
  {
    id: '2',
    slug: 'ethereal-nft-market',
    title: 'Ethereal NFT Market',
    category: 'web3',
    thumbnail: '/projects/nft.jpg',
    description: 'Multi-chain NFT marketplace supporting Ethereum, Polygon, and Solana networks.',
    technologies: ['Next.js', 'TypeScript', 'IPFS', 'Moralis'],
    year: '2024',
    featured: true,
  },
  {
    id: '3',
    slug: 'vault-key-app',
    title: 'Vault Key App',
    category: 'mobile',
    thumbnail: '/projects/vault.jpg',
    description: 'Secure multi-currency crypto wallet with biometric authentication.',
    technologies: ['React Native', 'Redux', 'Node.js'],
    year: '2023',
    featured: false,
  },
  {
    id: '4',
    slug: 'dao-governance',
    title: 'DAO Governance',
    category: 'web3',
    thumbnail: '/projects/dao.jpg',
    description: 'Decentralized governance system with proposal creation and voting mechanisms.',
    technologies: ['Solidity', 'The Graph', 'React'],
    year: '2023',
    featured: true,
  },
  {
    id: '5',
    slug: 'metaverse-map',
    title: 'Metaverse Map',
    category: 'frontend',
    thumbnail: '/projects/metaverse.jpg',
    description: 'Interactive 3D world map for metaverse land exploration and trading.',
    technologies: ['Three.js', 'React', 'WebGL'],
    year: '2023',
    featured: false,
  },
  {
    id: '6',
    slug: 'cross-chain-bridge',
    title: 'Cross-Chain Bridge',
    category: 'web3',
    thumbnail: '/projects/bridge.jpg',
    description: 'Secure bridge protocol for asset transfers between different blockchains.',
    technologies: ['Rust', 'Solidity', 'TypeScript'],
    year: '2024',
    featured: true,
  },
  {
    id: '7',
    slug: 'portfolio-dashboard',
    title: 'Portfolio Dashboard',
    category: 'frontend',
    thumbnail: '/projects/dashboard.jpg',
    description: 'Real-time crypto portfolio tracker with advanced analytics and charts.',
    technologies: ['Next.js', 'D3.js', 'TailwindCSS'],
    year: '2023',
    featured: false,
  },
  {
    id: '8',
    slug: 'defi-mobile-app',
    title: 'DeFi Mobile App',
    category: 'mobile',
    thumbnail: '/projects/mobile-defi.jpg',
    description: 'Mobile-first DeFi application with swapping and liquidity features.',
    technologies: ['Flutter', 'Dart', 'Web3dart'],
    year: '2024',
    featured: false,
  },
  {
    id: '9',
    slug: 'nft-gallery-design',
    title: 'NFT Gallery Design',
    category: 'design',
    thumbnail: '/projects/gallery.jpg',
    description: 'Complete UI/UX design system for an immersive NFT gallery experience.',
    technologies: ['Figma', 'Protopie', 'Illustration'],
    year: '2023',
    featured: false,
  },
];

// Filter projects by category
export function filterProjects(categoryId: string): Project[] {
  if (categoryId === 'all') {
    return projects;
  }
  return projects.filter((p) => p.category === categoryId);
}
