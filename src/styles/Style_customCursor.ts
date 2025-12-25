// Styles for Custom Cursor Component
export const customCursorStyles = {
  // Main Cursor
  mainCursor: 'fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference',
  
  // Cursor Ring
  cursorRing: 'rounded-full',

  // Trailing Dot
  trailingDot: 'fixed top-0 left-0 w-1 h-1 bg-cyan-400 rounded-full pointer-events-none z-[9998]',
};

// Inline styles for cursor
export const customCursorInlineStyles = {
  ring: {
    getStyle: (isHovering: boolean) => ({
      border: '2px solid transparent',
      backgroundImage: 'linear-gradient(#0A0A0A, #0A0A0A), linear-gradient(135deg, #00f3ff, #b967ff)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      width: isHovering ? 48 : 16,
      height: isHovering ? 48 : 16,
    }),
  },
};

// Animation variants
export const customCursorAnimations = {
  main: {
    getAnimate: (mousePosition: { x: number; y: number }, isHovering: boolean) => ({
      x: mousePosition.x - (isHovering ? 24 : 8),
      y: mousePosition.y - (isHovering ? 24 : 8),
      scale: 1,
    }),
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 28,
      mass: 0.5,
    },
  },

  ring: {
    getAnimate: (isHovering: boolean) => ({
      width: isHovering ? 48 : 16,
      height: isHovering ? 48 : 16,
      borderWidth: 2,
    }),
    transition: { duration: 0.2 },
  },

  trail: {
    getAnimate: (mousePosition: { x: number; y: number }, isHovering: boolean) => ({
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      opacity: isHovering ? 0 : 1,
    }),
    transition: {
      type: 'spring',
      stiffness: 1000,
      damping: 40,
    },
  },
};

export default customCursorStyles;
