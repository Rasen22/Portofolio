// Logic for Latest Projects Section
// Separated from interface for clean architecture

// Types
export type ProjectStatus = 'IN PROGRESS' | 'COMPLETED' | 'ARCHIVED';

export interface LatestProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  status: ProjectStatus;
}

// Status color mapping
export const statusColors: Record<ProjectStatus, { border: string; bg: string; shadow: string; text: string }> = {
  'IN PROGRESS': {
    border: '#00f3ff',
    bg: 'rgba(0, 243, 255, 0.2)',
    shadow: '0 0 20px rgba(0, 243, 255, 0.5)',
    text: '#00f3ff',
  },
  'COMPLETED': {
    border: '#00c36d',
    bg: 'rgba(0, 195, 109, 0.2)',
    shadow: '0 0 20px rgba(0, 195, 109, 0.5)',
    text: '#00c36d',
  },
  'ARCHIVED': {
    border: '#b967ff',
    bg: 'rgba(185, 103, 255, 0.2)',
    shadow: '0 0 20px rgba(185, 103, 255, 0.5)',
    text: '#b967ff',
  },
};

// Projects Data - Using placeholder images
export const latestProjects: LatestProject[] = [
  {
    id: '1',
    slug: 'defi-exchange',
    title: 'DeFi Exchange',
    category: 'Web3',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    description: 'Decentralized exchange platform with AMM',
    status: 'IN PROGRESS',
  },
  {
    id: '2',
    slug: 'nft-marketplace',
    title: 'NFT Marketplace',
    category: 'Blockchain',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&h=600&fit=crop',
    description: 'Multi-chain NFT trading platform',
    status: 'COMPLETED',
  },
  {
    id: '3',
    slug: 'dao-governance',
    title: 'DAO Governance',
    category: 'Web3',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    description: 'On-chain governance system',
    status: 'COMPLETED',
  },
  {
    id: '4',
    slug: 'crypto-wallet',
    title: 'Crypto Wallet',
    category: 'Mobile',
    thumbnail: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
    description: 'Multi-currency wallet app',
    status: 'IN PROGRESS',
  },
  {
    id: '5',
    slug: 'metaverse-app',
    title: 'Metaverse Portal',
    category: 'Web3',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop',
    description: '3D virtual world experience',
    status: 'ARCHIVED',
  },
  {
    id: '6',
    slug: 'blockchain-explorer',
    title: 'Chain Explorer',
    category: 'Tools',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'Real-time blockchain analytics',
    status: 'COMPLETED',
  },
];

// Calculate center index from scroll position
export function calculateCenterIndex(
  scrollLeft: number,
  cardWidth: number,
  gap: number,
  totalProjects: number
): number {
  const cardWithGap = cardWidth + gap;
  const newCenter = Math.round(scrollLeft / cardWithGap) + 1;
  return Math.min(Math.max(newCenter, 0), totalProjects - 1);
}
