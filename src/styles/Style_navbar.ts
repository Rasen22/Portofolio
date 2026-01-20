// Navbar Styles
import type { CSSProperties } from 'react';

// Inline Styles for Navbar (JS Object format)
export const navbarInlineStyles = {
  nav: (isScrolled: boolean): CSSProperties => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    padding: isScrolled ? '12px 0' : '16px 0',
    transition: 'all 0.3s ease',
  }),

  desktopMenu: {
    display: 'none',
    alignItems: 'center',
    gap: '3px',
    padding: '3px',
    backgroundColor: 'rgba(26, 26, 26, 0.9)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(51, 51, 51, 0.5)',
    borderRadius: '9999px',
    listStyle: 'none',
    margin: 0,
    height: '42px',
  } as CSSProperties,

  menuItem: {
    position: 'relative',
    display: 'flex',
    height: '100%',
  } as CSSProperties,

  // New Pill-style menu link - transparent background (circle appears on hover)
  pillLink: (isActive: boolean): CSSProperties => ({
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '0 18px',
    backgroundColor: 'transparent',
    color: '#E9E3DF',
    fontSize: '13px',
    fontWeight: 600,
    textDecoration: 'none',
    borderRadius: '9999px',
    textTransform: 'uppercase',
    letterSpacing: '0.2px',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    lineHeight: 0,
  }),

  // Hover circle that expands from bottom
  hoverCircle: {
    position: 'absolute',
    left: '50%',
    bottom: 0,
    borderRadius: '50%',
    zIndex: 1,
    display: 'block',
    pointerEvents: 'none',
    backgroundColor: '#FF7A30',
    willChange: 'transform',
  } as CSSProperties,

  // Label stack container
  labelStack: {
    position: 'relative',
    display: 'inline-block',
    lineHeight: 1,
    zIndex: 2,
  } as CSSProperties,

  // Default label
  pillLabel: {
    position: 'relative',
    zIndex: 2,
    display: 'inline-block',
    lineHeight: 1,
    willChange: 'transform',
  } as CSSProperties,

  // Hover label (slides in from bottom)
  pillLabelHover: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 3,
    display: 'inline-block',
    color: '#0a0a0a',
    willChange: 'transform, opacity',
  } as CSSProperties,

  // Active indicator - underline style
  activeIndicator: {
    position: 'absolute',
    left: '50%',
    bottom: '2px',
    transform: 'translateX(-50%)',
    width: '60%',
    height: '2px',
    borderRadius: '9999px',
    backgroundColor: '#FF7A30',
    zIndex: 4,
  } as CSSProperties,

  menuLink: (isActive: boolean): CSSProperties => ({
    display: 'block',
    padding: '8px 16px',
    color: isActive ? '#FF7A30' : '#E9E3DF',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'none',
    borderRadius: '9999px',
    transition: 'color 0.3s ease',
  }),

  activeUnderline: {
    position: 'absolute',
    bottom: '4px',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '2px',
    width: '50%',
    backgroundColor: 'rgba(255, 122, 48, 0.7)',
    borderRadius: '9999px',
  } as CSSProperties,

  // Dropdown styles
  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 12px)',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '380px',
    backgroundColor: 'rgba(26, 26, 26, 0.98)',
    backdropFilter: 'blur(16px)',
    borderRadius: '16px',
    border: '1px solid rgba(51, 51, 51, 0.5)',
    padding: '16px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
  } as CSSProperties,

  dropdownHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    paddingBottom: '12px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  } as CSSProperties,

  dropdownTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#E9E3DF',
    margin: 0,
  } as CSSProperties,

  dropdownViewAll: {
    fontSize: '12px',
    color: '#FF7A30',
    textDecoration: 'none',
    fontWeight: 500,
  } as CSSProperties,

  dropdownGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    maxHeight: '320px',
    overflowY: 'auto',
  } as CSSProperties,

  dropdownProjectCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    overflow: 'hidden',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  } as CSSProperties,

  dropdownProjectImage: {
    position: 'relative',
    width: '100%',
    height: '70px',
    backgroundColor: '#1a1a1a',
  } as CSSProperties,

  dropdownProjectStatus: (status: string): CSSProperties => ({
    position: 'absolute',
    top: '6px',
    left: '6px',
    padding: '2px 6px',
    backgroundColor: status === 'completed' ? 'rgba(74, 222, 128, 0.9)' : 'rgba(255, 122, 48, 0.9)',
    color: '#fff',
    fontSize: '8px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    borderRadius: '3px',
  }),

  dropdownProjectInfo: {
    padding: '10px',
  } as CSSProperties,

  dropdownProjectTitle: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#E9E3DF',
    margin: '0 0 2px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } as CSSProperties,

  dropdownProjectCategory: {
    fontSize: '9px',
    color: 'rgba(233, 227, 223, 0.5)',
    margin: 0,
  } as CSSProperties,

  // Mobile Menu Button
  mobileMenuButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    width: '42px',
    height: '42px',
    padding: 0,
    backgroundColor: 'rgba(26, 26, 26, 0.9)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(51, 51, 51, 0.5)',
    borderRadius: '9999px',
    cursor: 'pointer',
    color: '#E9E3DF',
  } as CSSProperties,

  // GSAP hamburger lines (2 lines that animate to X)
  hamburgerLineGsap: {
    display: 'block',
    width: '16px',
    height: '2px',
    backgroundColor: '#E9E3DF',
    borderRadius: '2px',
    transformOrigin: 'center',
    transition: 'none', // GSAP handles animation
  } as CSSProperties,

  hamburgerLine: (isOpen: boolean, position: 'top' | 'middle' | 'bottom'): CSSProperties => {
    const base: CSSProperties = {
      display: 'block',
      width: '20px',
      height: '2px',
      backgroundColor: 'currentColor',
      transition: 'all 0.3s ease',
    };

    if (position === 'top') {
      return {
        ...base,
        transform: isOpen ? 'rotate(45deg) translateY(6px)' : 'none',
      };
    }
    if (position === 'middle') {
      return {
        ...base,
        marginTop: '6px',
        opacity: isOpen ? 0 : 1,
      };
    }
    return {
      ...base,
      marginTop: '6px',
      transform: isOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
    };
  },

  // Mobile Menu
  mobileMenu: {
    position: 'fixed',
    top: '64px',
    left: '16px',
    right: '16px',
    padding: '3px',
    backgroundColor: 'rgba(26, 26, 26, 0.95)',
    backdropFilter: 'blur(12px)',
    borderRadius: '27px',
    border: '1px solid rgba(51, 51, 51, 0.5)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
    visibility: 'hidden',
    opacity: 0,
  } as CSSProperties,

  mobileMenuInner: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  } as CSSProperties,

  mobileMenuLink: (isActive: boolean): CSSProperties => ({
    display: 'block',
    padding: '12px 16px',
    color: isActive ? '#FF7A30' : '#E9E3DF',
    fontSize: '16px',
    fontWeight: 500,
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '50px',
    backgroundColor: '#0a0a0a',
    transition: 'all 0.2s ease',
  }),
};

// Tailwind class-based styles (for convenience)
export const navbarStyles = {
  nav: `fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 pb-4`,
  navScrolled: `pt-3 pb-3`,
  navTop: ``,
  container: ``,
  inner: `flex items-center justify-center`,
  
  // Desktop Menu - Pill shaped transparent background
  desktopMenu: `hidden md:flex items-center gap-0 px-1.5 py-1.5 bg-[#1a1a1a]/90 backdrop-blur-md border border-[#333]/50 rounded-full`,
  menuItem: `relative`,
  menuLink: `relative block px-4 py-1.5 text-[#E9E3DF] text-sm font-medium transition-all duration-300 hover:text-[#FF7A30] rounded-full`,
  menuLinkActive: `text-[#FF7A30]`,
  activeUnderline: `absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-1/2 bg-[#FF7A30]/70 rounded-full`,
  
  // Mobile Menu Button
  mobileMenuBtn: `md:hidden p-3 text-[#E9E3DF] bg-[#1a1a1a]/90 backdrop-blur-md border border-[#333]/50 rounded-full hover:text-[#FF7A30] transition-colors`,
  hamburgerLine: `block w-5 h-0.5 bg-current transition-all duration-300`,
  
  // Mobile Menu
  mobileMenu: `md:hidden fixed top-16 left-4 right-4 p-4 bg-[#1a1a1a]/95 backdrop-blur-md rounded-2xl border border-[#333]/50`,
  mobileMenuInner: `flex flex-col space-y-1`,
  mobileMenuLink: `block text-[#E9E3DF] hover:text-[#FF7A30] transition-all duration-300 text-base font-medium py-3 text-center rounded-lg hover:bg-white/5`,
  mobileMenuLinkActive: `text-[#FF7A30] bg-white/5`,
};

// Global CSS for hover effects
export const navbarGlobalCSS = `
  .dropdown-view-all:hover {
    text-decoration: underline;
  }
  .dropdown-project-card:hover {
    background-color: rgba(255, 122, 48, 0.1) !important;
    transform: translateY(-2px);
  }
`;

export default navbarStyles;
