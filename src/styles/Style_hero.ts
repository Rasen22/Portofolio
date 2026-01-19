// Hero Section Styles
import type { CSSProperties } from 'react';

// Inline Styles for Hero Section (JS Object format)
export const heroInlineStyles = {
  section: {
    minHeight: '100vh',
    padding: '100px 24px 64px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0a0a0a',
  } as CSSProperties,

  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%',
  } as CSSProperties,

  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '64px',
    alignItems: 'center',
  } as CSSProperties,

  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  } as CSSProperties,

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 16px',
    borderRadius: '6px',
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    color: 'rgba(233, 227, 223, 0.7)',
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
  } as CSSProperties,

  greeting: {
    fontSize: 'clamp(48px, 8vw, 72px)',
    fontWeight: 700,
    color: '#E9E3DF',
    lineHeight: 1.1,
    margin: 0,
  } as CSSProperties,

  nameAccent: {
    color: '#FF7A30',
  } as CSSProperties,

  role: {
    color: 'rgba(233, 227, 223, 0.5)',
    fontSize: '14px',
    maxWidth: '480px',
    lineHeight: 1.6,
    margin: 0,
  } as CSSProperties,

  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    paddingTop: '8px',
  } as CSSProperties,

  btnDownload: {
    padding: '14px 24px',
    backgroundColor: '#FF7A30',
    color: '#0a0a0a',
    fontSize: '11px',
    fontWeight: 700,
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
  } as CSSProperties,

  btnContact: {
    padding: '14px 24px',
    backgroundColor: 'transparent',
    color: '#E9E3DF',
    fontSize: '11px',
    fontWeight: 700,
    borderRadius: '8px',
    border: '1px solid #444',
    cursor: 'pointer',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
  } as CSSProperties,

  // Stats Section
  statsWrapper: {
    paddingTop: '48px',
    marginTop: '32px',
  } as CSSProperties,

  statsGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: '16px',
  } as CSSProperties,

  statItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 24px',
    backgroundColor: 'rgba(20, 20, 20, 0.8)',
    border: '1px solid #2a2a2a',
    borderRadius: '12px',
  } as CSSProperties,

  statIcon: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 122, 48, 0.15)',
    borderRadius: '8px',
    fontSize: '18px',
  } as CSSProperties,

  statIconText: {
    color: '#FF7A30',
  } as CSSProperties,

  statValue: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#E9E3DF',
  } as CSSProperties,

  statLabel: {
    fontSize: '11px',
    color: 'rgba(233, 227, 223, 0.5)',
    marginTop: '2px',
  } as CSSProperties,

  // Photo Card Side (Right)
  photoWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  } as CSSProperties,

  photoCard: {
    position: 'relative',
    width: '340px',
    height: '420px',
    borderRadius: '16px',
  } as CSSProperties,

  photoGlowOuter: {
    position: 'absolute',
    inset: '-8px',
    background: 'linear-gradient(135deg, rgba(10, 77, 140, 0.3), rgba(30, 107, 184, 0.2), rgba(10, 77, 140, 0.3))',
    borderRadius: '24px',
    filter: 'blur(24px)',
    zIndex: -1,
  } as CSSProperties,

  photoCardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #1a3a5c, #0d2840, #071a2b)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(30, 73, 118, 0.3)',
  } as CSSProperties,

  photoImage: {
    objectFit: 'cover',
    objectPosition: 'center',
  } as CSSProperties,

  photoGlow: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(10, 77, 140, 0.3), transparent, transparent)',
  } as CSSProperties,
};

// Tailwind class-based styles (for convenience)
export const heroStyles = {
  section: `min-h-screen pt-24 pb-16 px-6 sm:px-8 lg:px-12 flex items-center bg-[#0a0a0a]`,
  container: `max-w-7xl mx-auto w-full`,
  
  // Main Grid - Content left, Photo right
  mainGrid: `grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center`,
  
  // Content Side (Left)
  content: `text-left space-y-5 order-2 lg:order-1`,
  badge: `inline-flex items-center px-4 py-1.5 rounded-md bg-[#1a1a1a] border border-[#333] text-[#E9E3DF]/70 text-[10px] font-semibold tracking-[0.2em] uppercase`,
  greeting: `text-5xl md:text-6xl lg:text-7xl font-bold text-[#E9E3DF] leading-[1.1]`,
  nameAccent: `text-[#FF7A30]`,
  role: `text-[#E9E3DF]/50 text-sm md:text-base max-w-lg leading-relaxed`,
  
  // Buttons
  buttonGroup: `flex flex-row gap-4 pt-2`,
  btnDownload: `px-6 py-3 bg-[#FF7A30] text-[#0a0a0a] text-xs font-bold rounded-md hover:bg-[#ff8c4a] transition-all duration-300 tracking-wider uppercase`,
  btnContact: `px-6 py-3 bg-transparent text-[#E9E3DF] text-xs font-bold rounded-md border border-[#444] hover:border-[#FF7A30] hover:text-[#FF7A30] transition-all duration-300 tracking-wider uppercase`,
  
  // Photo Card Side (Right)
  photoWrapper: `flex justify-center lg:justify-end order-1 lg:order-2`,
  photoCard: `relative w-[300px] h-[380px] md:w-[340px] md:h-[420px] rounded-2xl overflow-visible`,
  photoCardInner: `relative w-full h-full bg-gradient-to-br from-[#1a3a5c] via-[#0d2840] to-[#071a2b] rounded-2xl overflow-hidden border border-[#1e4976]/30`,
  photoImage: `w-full h-full object-cover object-center`,
  photoGlow: `absolute inset-0 bg-gradient-to-t from-[#0a4d8c]/30 via-transparent to-transparent`,
  photoGlowOuter: `absolute -inset-2 bg-gradient-to-br from-[#0a4d8c]/30 via-[#1e6bb8]/20 to-[#0a4d8c]/30 rounded-3xl blur-2xl -z-10`,
  
  // Stats Section
  statsWrapper: `pt-12 border-t border-[#222] mt-8`,
  statsGrid: `flex flex-row items-center gap-8 md:gap-12`,
  statItem: `text-left`,
  statValue: `text-2xl md:text-3xl font-bold text-[#E9E3DF]`,
  statLabel: `text-[10px] text-[#E9E3DF]/40 mt-1 tracking-wider uppercase`,
  statDivider: `w-px h-10 bg-[#333]`,
};

// Global CSS for responsive
export const heroGlobalCSS = `
  @media (max-width: 1024px) {
    .hero-grid {
      grid-template-columns: 1fr !important;
      gap: 48px !important;
    }
  }
`;

export default heroStyles;
