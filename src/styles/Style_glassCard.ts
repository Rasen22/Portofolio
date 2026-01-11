// Styles for Glass Card Component
export const glassCardStyles = {
  // Base card container
  container: 'relative bg-white/40 backdrop-blur-md border border-[#4988C4]/30 rounded-xl overflow-hidden transition-colors duration-300',

  // Gradient overlay
  overlay: 'absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50 pointer-events-none',

  // Content wrapper
  content: 'relative z-10',

  // Skeleton
  skeleton: {
    container: 'relative bg-white/30 backdrop-blur-md border border-[#4988C4]/20 rounded-xl overflow-hidden animate-pulse',
    shimmer: 'absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer',
  },
};

// Glow styles for hover effect
export const glassCardGlowStyles = {
  cyan: '0 0 30px rgba(73, 136, 196, 0.4)',
  purple: '0 0 30px rgba(28, 77, 141, 0.4)',
  gradient: '0 0 20px rgba(73, 136, 196, 0.3), 0 0 40px rgba(28, 77, 141, 0.2)',
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
