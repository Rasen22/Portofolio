// Logic for Latest Projects Section
// Separated from interface for clean architecture

// Types
export interface LatestProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
}

// Projects Data - Using placeholder images
export const latestProjects: LatestProject[] = [
  {
    id: '1',
    slug: 'defi-exchange',
    title: 'DeFi Exchange',
    category: 'Web3',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    description: 'Decentralized exchange platform with AMM',
  },
  {
    id: '2',
    slug: 'nft-marketplace',
    title: 'NFT Marketplace',
    category: 'Blockchain',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&h=600&fit=crop',
    description: 'Multi-chain NFT trading platform',
  },
  {
    id: '3',
    slug: 'dao-governance',
    title: 'DAO Governance',
    category: 'Web3',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    description: 'On-chain governance system',
  },
  {
    id: '4',
    slug: 'crypto-wallet',
    title: 'Crypto Wallet',
    category: 'Mobile',
    thumbnail: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
    description: 'Multi-currency wallet app',
  },
  {
    id: '5',
    slug: 'metaverse-app',
    title: 'Metaverse Portal',
    category: 'Web3',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop',
    description: '3D virtual world experience',
  },
  {
    id: '6',
    slug: 'blockchain-explorer',
    title: 'Chain Explorer',
    category: 'Tools',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'Real-time blockchain analytics',
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
