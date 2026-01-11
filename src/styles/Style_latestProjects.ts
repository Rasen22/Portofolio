// Styles for Latest Projects Component
export const latestProjectsStyles = {
  // Section
  section: 'py-20 md:py-32 overflow-hidden',
  
  // Container
  container: 'relative',

  // Header
  header: {
    wrapper: 'container mx-auto px-4 flex flex-col md:flex-row md:items-end md:justify-between mb-12',
    container: 'container mx-auto px-4 flex flex-col md:flex-row md:items-end md:justify-between mb-12',
    labelContainer: '',
    label: 'text-[#1C4D8D] font-mono text-sm tracking-wider uppercase',
    heading: 'text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-[#0F2854]',
    gradientText: 'bg-gradient-to-r from-[#4988C4] to-[#1C4D8D] bg-clip-text text-transparent',
    viewAllLink: 'mt-6 md:mt-0 group flex items-center gap-2 text-[#1C4D8D] hover:text-[#4988C4] transition-colors',
    viewAllIcon: 'w-5 h-5 transform group-hover:translate-x-1 transition-transform',
  },

  // Progress Bar
  progressBar: {
    container: 'container mx-auto px-4 relative h-1 bg-[#4988C4]/20 rounded-full mb-8 overflow-hidden',
    fill: 'absolute inset-y-0 left-0 bg-gradient-to-r from-[#4988C4] to-[#1C4D8D] rounded-full',
  },

  // Scroll Progress (alias)
  scrollProgress: {
    container: 'container mx-auto px-4 relative h-1 bg-[#4988C4]/20 rounded-full mb-8 overflow-hidden',
    fill: 'absolute inset-y-0 left-0 bg-gradient-to-r from-[#4988C4] to-[#1C4D8D] rounded-full',
  },

  // Scroll Container
  scrollContainer: 'flex gap-6 overflow-x-auto pb-8 px-4 md:px-[calc(50vw-600px)] snap-x snap-mandatory cursor-grab active:cursor-grabbing',

  // Spacer
  spacer: 'flex-shrink-0 w-4 md:w-8',

  // Card Wrapper
  cardWrapper: 'snap-center flex-shrink-0',

  // Navigation Dots
  dots: {
    container: 'flex justify-center gap-2 mt-8',
    dot: 'rounded-full transition-all duration-300 cursor-pointer',
    active: 'w-8 h-2 bg-gradient-to-r from-[#4988C4] to-[#1C4D8D]',
    inactive: 'w-2 h-2 bg-[#4988C4]/30 hover:bg-[#4988C4]/50',
  },

  // Project Card
  card: {
    container: 'relative flex-shrink-0 w-[320px] md:w-[400px] h-[280px] md:h-[350px] rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br from-white/50 to-white/30 border border-[#4988C4]/30',
    base: 'relative flex-shrink-0 w-[320px] md:w-[400px] h-[280px] md:h-[350px] rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br from-white/50 to-white/30 border border-[#4988C4]/30',
    centerZ: 'z-10',
    normalZ: 'z-0',
    borderGlow: {
      wrapper: 'absolute inset-0 rounded-xl p-[1px] transition-opacity duration-300',
      container: 'absolute inset-0 rounded-xl p-[1px] transition-opacity duration-300',
      inner: 'w-full h-full bg-[#BDE8F5] rounded-xl',
    },
    imageWrapper: 'absolute inset-[1px] rounded-xl overflow-hidden',
    imageContainer: 'w-full h-full relative',
    imageOverlay: {
      gradient: 'absolute inset-0 bg-gradient-to-br from-[#4988C4]/30 to-[#1C4D8D]/30',
      bottom: 'absolute inset-0 bg-gradient-to-t from-[#BDE8F5] via-transparent to-transparent',
    },
    content: {
      wrapper: 'absolute inset-0 p-6 flex flex-col justify-end',
      badge: 'inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-[#4988C4]/30 text-[#0F2854] border border-[#4988C4]/50 w-fit',
      title: 'text-xl md:text-2xl font-bold text-[#0F2854] mb-2 group-hover:text-[#1C4D8D] transition-colors',
      description: 'text-[#1C4D8D] text-sm line-clamp-2',
    },
    arrow: {
      container: 'absolute top-4 right-4 w-10 h-10 rounded-full bg-[#4988C4]/20 flex items-center justify-center opacity-0 group-hover:opacity-100',
      icon: 'w-5 h-5 text-[#0F2854]',
    },
  },
};

// Animation styles (inline)
export const latestProjectsInlineStyles = {
  scrollContainer: {
    scrollbarWidth: 'none' as const,
    msOverflowStyle: 'none' as const,
  },

  card: {
    borderGradient: {
      background: 'linear-gradient(135deg, #4988C4, #1C4D8D)',
    },
    getBoxShadow: (isCenter: boolean) => ({
      boxShadow: isCenter
        ? '0 0 40px rgba(73, 136, 196, 0.4), 0 0 80px rgba(28, 77, 141, 0.2)'
        : '0 0 20px rgba(0, 0, 0, 0.1)',
    }),
  },

  borderGlow: {
    background: 'linear-gradient(135deg, #4988C4, #1C4D8D)',
  },

  cardShadow: {
    center: '0 0 40px rgba(73, 136, 196, 0.4), 0 0 80px rgba(28, 77, 141, 0.2)',
    normal: '0 0 20px rgba(0, 0, 0, 0.1)',
  },
};

// Animation variants
export const latestProjectsAnimations = {
  header: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  },

  card: {
    getAnimate: (isCenter: boolean) => ({
      scale: isCenter ? 1.05 : 0.95,
      opacity: isCenter ? 1 : 0.7,
    }),
    getHover: (isCenter: boolean) => ({
      scale: isCenter ? 1.08 : 1,
      opacity: 1,
    }),
    center: { scale: 1.05, opacity: 1 },
    normal: { scale: 0.95, opacity: 0.7 },
    hoverCenter: { scale: 1.08, opacity: 1 },
    hoverNormal: { scale: 1, opacity: 1 },
    transition: { duration: 0.4 },
  },

  kenBurns: {
    animate: { scale: [1, 1.1, 1] },
    transition: { duration: 20, repeat: Infinity, ease: 'linear' },
  },

  arrow: {
    initial: { x: -10 },
    hover: { x: 0 },
    transition: { duration: 0.3 },
  },

  arrowIndicator: {
    initial: { x: -10 },
    whileHover: { x: 0 },
    transition: { duration: 0.3 },
  },
};

export default latestProjectsStyles;
