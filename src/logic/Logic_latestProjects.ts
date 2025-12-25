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

// Projects Data
export const latestProjects: LatestProject[] = [
  {
    id: '1',
    slug: 'defi-exchange',
    title: 'DeFi Exchange',
    category: 'Web3',
    thumbnail: '/projects/defi.jpg',
    description: 'Decentralized exchange platform with AMM',
  },
  {
    id: '2',
    slug: 'nft-marketplace',
    title: 'NFT Marketplace',
    category: 'Blockchain',
    thumbnail: '/projects/nft.jpg',
    description: 'Multi-chain NFT trading platform',
  },
  {
    id: '3',
    slug: 'dao-governance',
    title: 'DAO Governance',
    category: 'Web3',
    thumbnail: '/projects/dao.jpg',
    description: 'On-chain governance system',
  },
  {
    id: '4',
    slug: 'crypto-wallet',
    title: 'Crypto Wallet',
    category: 'Mobile',
    thumbnail: '/projects/wallet.jpg',
    description: 'Multi-currency wallet app',
  },
  {
    id: '5',
    slug: 'metaverse-app',
    title: 'Metaverse Portal',
    category: 'Web3',
    thumbnail: '/projects/metaverse.jpg',
    description: '3D virtual world experience',
  },
  {
    id: '6',
    slug: 'blockchain-explorer',
    title: 'Chain Explorer',
    category: 'Tools',
    thumbnail: '/projects/explorer.jpg',
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
