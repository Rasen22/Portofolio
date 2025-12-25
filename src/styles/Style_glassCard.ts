// Styles for Glass Card Component
export const glassCardStyles = {
  // Base card container
  container: 'relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-colors duration-300',

  // Gradient overlay
  overlay: 'absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none',

  // Content wrapper
  content: 'relative z-10',

  // Skeleton
  skeleton: {
    container: 'relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden animate-pulse',
    shimmer: 'absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer',
  },
};

// Glow styles for hover effect
export const glassCardGlowStyles = {
  cyan: '0 0 30px rgba(0, 243, 255, 0.4)',
  purple: '0 0 30px rgba(168, 85, 247, 0.4)',
  gradient: '0 0 20px rgba(0, 243, 255, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)',
};

// Animation variants
export const glassCardAnimations = {
  hover: {
    getConfig: (glowColor: 'cyan' | 'purple' | 'gradient') => ({
      scale: 1.02,
      boxShadow: glassCardGlowStyles[glowColor],
      borderColor: 'rgba(255, 255, 255, 0.2)',
    }),
  },
  transition: {
    duration: 0.3,
    ease: [0.16, 1, 0.3, 1],
  },
};

export default glassCardStyles;
