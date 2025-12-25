import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import '@/styles/globals.css';
import { QueryProvider } from '@/lib/react-query';
import { Navbar, Footer, ScrollProgress } from '@/components/layout';

// Lazy load custom cursor
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    default: 'Alex Dev | Web3 Developer & UI/UX Designer',
    template: '%s | Alex Dev Portfolio',
  },
  description:
    'Crafting decentralized experiences with pixel-perfect precision. Full-stack developer specializing in Web3, blockchain, and modern UI/UX design.',
  keywords: [
    'web3 developer',
    'blockchain developer',
    'UI/UX designer',
    'react developer',
    'next.js',
    'solidity',
    'defi',
    'nft',
    'portfolio',
    'frontend developer',
  ],
  authors: [{ name: 'Alex Dev', url: 'https://alexdev.eth' }],
  creator: 'Alex Dev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexdev.eth',
    title: 'Alex Dev | Web3 Developer & UI/UX Designer',
    description:
      'Crafting decentralized experiences with pixel-perfect precision. Full-stack developer specializing in Web3, blockchain, and modern UI/UX design.',
    siteName: 'Alex Dev Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alex Dev Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Dev | Web3 Developer & UI/UX Designer',
    description:
      'Crafting decentralized experiences with pixel-perfect precision.',
    creator: '@alexdev',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <QueryProvider>
          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Navigation */}
          <Navbar />

          {/* Main content */}
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <main className="min-h-screen">{children}</main>
          </Suspense>

          {/* Footer */}
          <Footer />

          {/* Custom Cursor - Desktop only */}
          <CustomCursor />
        </QueryProvider>
      </body>
    </html>
  );
}
