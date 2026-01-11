// Styles for Hero Content Component
export const heroContentStyles = {
  // Main Container
  container: 'flex flex-col space-y-5',

  // Open to Work Badge
  badge: {
    container: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4988C4]/20 border border-[#4988C4]/40 w-fit',
    dot: 'w-2 h-2 rounded-full bg-[#4988C4] animate-pulse',
    text: 'text-[#1C4D8D] text-xs font-semibold tracking-wider uppercase',
  },

  // Greeting (hidden)
  greeting: {
    container: 'hidden',
    text: 'hidden',
  },

  // Name/Title
  heading: 'text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0F2854]',
  gradientText: 'text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#4988C4] to-[#1C4D8D] bg-clip-text text-transparent',

  // Title Section
  title: {
    container: '',
    line: 'hidden',
    text: 'text-base md:text-lg text-[#1C4D8D] font-medium',
  },

  // Description
  description: 'text-[#0F2854]/70 text-sm md:text-base max-w-md leading-relaxed',

  // Buttons Container
  buttonsContainer: 'flex flex-row gap-4 pt-4',

  // Contact Button (Primary)
  contactButton: {
    base: 'px-7 py-3 rounded-full bg-gradient-to-r from-[#0F2854] to-[#1C4D8D] shadow-lg shadow-[#4988C4]/25 hover:shadow-[#4988C4]/40 transition-all duration-300',
    glowOverlay: 'hidden',
    content: 'text-white font-semibold text-sm',
    icon: 'hidden',
  },

  // Download CV Button (Secondary)
  downloadButton: {
    base: 'px-7 py-3 rounded-full border border-[#4988C4]/40 bg-[#4988C4]/10 backdrop-blur-sm hover:border-[#4988C4]/60 hover:bg-[#4988C4]/20 transition-all duration-300',
    content: 'text-[#0F2854] font-medium text-sm',
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
      '0 0 20px rgba(73, 136, 196, 0.5)',
      '0 0 40px rgba(28, 77, 141, 0.7)',
      '0 0 20px rgba(73, 136, 196, 0.5)',
    ],
    transition: { duration: 2, repeat: Infinity },
  },
};

export default heroContentStyles;
