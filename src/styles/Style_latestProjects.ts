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
    label: 'text-cyan-400 font-mono text-sm tracking-wider uppercase',
    heading: 'text-3xl md:text-4xl lg:text-5xl font-bold mt-4',
    gradientText: 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
    viewAllLink: 'mt-6 md:mt-0 group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors',
    viewAllIcon: 'w-5 h-5 transform group-hover:translate-x-1 transition-transform',
  },

  // Progress Bar
  progressBar: {
    container: 'container mx-auto px-4 relative h-1 bg-white/10 rounded-full mb-8 overflow-hidden',
    fill: 'absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full',
  },

  // Scroll Progress (alias)
  scrollProgress: {
    container: 'container mx-auto px-4 relative h-1 bg-white/10 rounded-full mb-8 overflow-hidden',
    fill: 'absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full',
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
    active: 'w-8 h-2 bg-gradient-to-r from-cyan-400 to-purple-500',
    inactive: 'w-2 h-2 bg-white/20 hover:bg-white/40',
  },

  // Project Card
  card: {
    container: 'relative flex-shrink-0 w-[320px] md:w-[400px] h-[280px] md:h-[350px] rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10',
    base: 'relative flex-shrink-0 w-[320px] md:w-[400px] h-[280px] md:h-[350px] rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10',
    centerZ: 'z-10',
    normalZ: 'z-0',
    borderGlow: {
      wrapper: 'absolute inset-0 rounded-xl p-[1px] transition-opacity duration-300',
      container: 'absolute inset-0 rounded-xl p-[1px] transition-opacity duration-300',
      inner: 'w-full h-full bg-[#141414] rounded-xl',
    },
    imageWrapper: 'absolute inset-[1px] rounded-xl overflow-hidden',
    imageContainer: 'w-full h-full relative',
    imageOverlay: {
      gradient: 'absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-500/30',
      bottom: 'absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent',
    },
    content: {
      wrapper: 'absolute inset-0 p-6 flex flex-col justify-end',
      badge: 'inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 w-fit',
      title: 'text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors',
      description: 'text-gray-400 text-sm line-clamp-2',
    },
    arrow: {
      container: 'absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100',
      icon: 'w-5 h-5 text-white',
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
      background: 'linear-gradient(135deg, #00f3ff, #b967ff)',
    },
    getBoxShadow: (isCenter: boolean) => ({
      boxShadow: isCenter
        ? '0 0 40px rgba(0, 243, 255, 0.4), 0 0 80px rgba(185, 103, 255, 0.2)'
        : '0 0 20px rgba(0, 0, 0, 0.3)',
    }),
  },

  borderGlow: {
    background: 'linear-gradient(135deg, #00f3ff, #b967ff)',
  },

  cardShadow: {
    center: '0 0 40px rgba(0, 243, 255, 0.4), 0 0 80px rgba(185, 103, 255, 0.2)',
    normal: '0 0 20px rgba(0, 0, 0, 0.3)',
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
