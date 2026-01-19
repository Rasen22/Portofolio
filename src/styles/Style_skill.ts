// Skill Section Styles
import type { CSSProperties } from 'react';

// Inline Styles for Skill Section (JS Object format)
export const skillInlineStyles = {
  section: {
    padding: '80px 24px',
    backgroundColor: '#0a0a0a',
  } as CSSProperties,

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  } as CSSProperties,

  // Header
  header: {
    textAlign: 'center',
    marginBottom: '48px',
  } as CSSProperties,

  badge: {
    display: 'inline-block',
    color: 'rgba(233, 227, 223, 0.5)',
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  } as CSSProperties,

  title: {
    fontSize: '42px',
    fontWeight: 700,
    color: '#E9E3DF',
    margin: '0 0 12px 0',
  } as CSSProperties,

  subtitle: {
    color: 'rgba(233, 227, 223, 0.5)',
    fontSize: '14px',
    margin: 0,
  } as CSSProperties,

  // Skills Grid
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '48px',
  } as CSSProperties,

  // Category
  categoryTitle: {
    color: '#E9E3DF',
    fontSize: '16px',
    fontWeight: 600,
    marginBottom: '24px',
    textAlign: 'center',
  } as CSSProperties,

  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '24px',
  } as CSSProperties,

  // Skill Item
  skillItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  } as CSSProperties,

  skillCircle: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    border: '2px solid #FF7A30',
    backgroundColor: 'rgba(255, 122, 48, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  } as CSSProperties,

  skillIcon: {
    objectFit: 'contain',
  } as CSSProperties,

  skillLabel: {
    color: 'rgba(233, 227, 223, 0.7)',
    fontSize: '11px',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    textAlign: 'center',
  } as CSSProperties,
};

// Tailwind class-based styles (for convenience)
export const skillStyles = {
  section: `py-16 px-4 sm:px-6 lg:px-8`,
  container: `max-w-6xl mx-auto`,
  
  // Header
  header: `mb-10`,
  badge: `inline-block px-3 py-1 bg-transparent border border-primary/30 text-primary rounded text-xs font-medium mb-3`,
  title: `text-2xl md:text-3xl font-bold text-primary mb-2`,
  subtitle: `text-primary/50 text-sm`,
  
  // Skills Grid - Two columns with vertical divider
  gridWrapper: `relative`,
  grid: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16`,
  verticalDivider: `hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2`,
  
  // Category Card
  category: ``,
  categoryHeader: `mb-6`,
  categoryTitle: `inline-block text-xs font-medium text-primary/70 px-3 py-1.5 border border-primary/20 rounded`,
  
  // Circles Grid - 4 columns, 2 rows
  circlesGrid: `grid grid-cols-4 gap-4`,
  
  // Circle Styles
  circleEmpty: `w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-secondary bg-transparent transition-all duration-300 hover:scale-110 hover:border-accent cursor-pointer`,
  circleFilled: `w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer`,
  circleText: `text-background text-xs font-medium`,
};

// Global CSS for responsive
export const skillGlobalCSS = `
  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

export default skillStyles;
