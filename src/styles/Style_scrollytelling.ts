// Scrollytelling Styles
import type { CSSProperties } from 'react';

export const scrollytellingStyles = {
  // Main scroll container - provides scroll height
  scrollContainer: {
    position: 'relative' as const,
    height: '300vh',
    backgroundColor: '#0a0a0a',
  } as CSSProperties,

  // Sticky view - stays in place while scrolling
  stickyView: {
    position: 'sticky' as const,
    top: 0,
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#0a0a0a',
    perspective: '1200px',
    perspectiveOrigin: 'center center',
  } as CSSProperties,

  // Content wrapper inside sticky view
  contentWrapper: {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d' as const,
  } as CSSProperties,

  // Hero section container
  heroContainer: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    zIndex: 2,
    transformStyle: 'preserve-3d' as const,
    pointerEvents: 'auto' as const,
  } as CSSProperties,

  // About section container
  aboutContainer: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
    transformStyle: 'preserve-3d' as const,
    pointerEvents: 'auto' as const,
  } as CSSProperties,

  // Hero photo card - animated element
  heroPhotoCard: {
    position: 'relative' as const,
    transformOrigin: 'center center',
    willChange: 'transform, opacity',
    transformStyle: 'preserve-3d' as const,
    backfaceVisibility: 'hidden' as const,
  } as CSSProperties,

  // About photo card - animated element
  aboutPhotoCard: {
    position: 'relative' as const,
    transformOrigin: 'center center',
    willChange: 'transform, opacity',
    transformStyle: 'preserve-3d' as const,
    backfaceVisibility: 'hidden' as const,
  } as CSSProperties,
};

// Global CSS for scrollytelling
export const scrollytellingGlobalCSS = `
  .scrollytelling-hero-card {
    will-change: transform, opacity;
    transform-origin: center center;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
  
  .scrollytelling-about-card {
    will-change: transform, opacity;
    transform-origin: center center;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
  
  @media (max-width: 1024px) {
    .scrollytelling-hero-grid {
      grid-template-columns: 1fr !important;
      gap: 48px !important;
    }
    
    .scrollytelling-about-container {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
  }
`;

export default scrollytellingStyles;
