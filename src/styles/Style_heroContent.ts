// Styles for Hero Content Component
export const heroContentStyles = {
  // Main Container
  container: 'flex flex-col space-y-5',

  // Open to Work Badge
  badge: {
    container: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 w-fit',
    dot: 'w-2 h-2 rounded-full bg-cyan-400 animate-pulse',
    text: 'text-cyan-400 text-xs font-semibold tracking-wider uppercase',
  },

  // Greeting (hidden)
  greeting: {
    container: 'hidden',
    text: 'hidden',
  },

  // Name/Title
  heading: 'text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white',
  gradientText: 'text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',

  // Title Section
  title: {
    container: '',
    line: 'hidden',
    text: 'text-base md:text-lg text-gray-300 font-medium',
  },

  // Description
  description: 'text-gray-400 text-sm md:text-base max-w-md leading-relaxed',

  // Buttons Container
  buttonsContainer: 'flex flex-row gap-4 pt-4',

  // Contact Button (Primary)
  contactButton: {
    base: 'px-7 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40 transition-all duration-300',
    glowOverlay: 'hidden',
    content: 'text-black font-semibold text-sm',
    icon: 'hidden',
  },

  // Download CV Button (Secondary)
  downloadButton: {
    base: 'px-7 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-all duration-300',
    content: 'text-white font-medium text-sm',
    icon: 'hidden',
    hoverOverlay: 'hidden',
  },

  // Tech Stack (Hidden)
  techStack: {
    container: 'hidden',
    label: 'hidden',
    pillsContainer: 'hidden',
    pill: 'hidden',
  },
};

// Animation variants for Framer Motion
export const heroContentAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },

  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },

  greeting: {
    animate: { opacity: [0.5, 1, 0.5] },
    transition: { duration: 2, repeat: Infinity },
  },

  contactButtonGlow: {
    boxShadow: [
      '0 0 20px rgba(0, 243, 255, 0.5)',
      '0 0 40px rgba(185, 103, 255, 0.7)',
      '0 0 20px rgba(0, 243, 255, 0.5)',
    ],
    transition: { duration: 2, repeat: Infinity },
  },
};

export default heroContentStyles;
