import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Farhan Rasendriya | UI/UX & Front-end Developer',
    template: '%s | Farhan Portfolio',
  },
  description:
    'UI/UX Designer dan Front-end Developer yang passionate dalam menciptakan pengalaman digital yang menarik dan fungsional.',
  keywords: [
    'UI/UX designer',
    'frontend developer',
    'react developer',
    'next.js',
    'portfolio',
    'web developer',
  ],
  authors: [{ name: 'Farhan Rasendriya' }],
  creator: 'Farhan Rasendriya',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    title: 'Farhan Rasendriya | UI/UX & Front-end Developer',
    description:
      'UI/UX Designer dan Front-end Developer yang passionate dalam menciptakan pengalaman digital yang menarik dan fungsional.',
    siteName: 'Farhan Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <body className="min-h-screen bg-background text-primary antialiased flex flex-col">
        <div className="flex-grow flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
