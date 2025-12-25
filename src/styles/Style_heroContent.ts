// Styles for Hero Content Component
export const heroContentStyles = {
  // Main Container
  container: 'flex flex-col justify-center space-y-6 md:space-y-8',

  // Greeting
  greeting: {
    container: 'space-y-2',
    text: 'text-cyan-400 font-mono text-sm md:text-base tracking-wider',
  },

  // Name/Title
  heading: 'text-4xl md:text-5xl lg:text-7xl font-bold leading-tight',
  gradientText: 'text-4xl md:text-5xl lg:text-7xl font-bold',

  // Title Section
  title: {
    container: 'flex items-center gap-3',
    line: 'h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-500',
    text: 'text-lg md:text-xl text-gray-300 font-medium',
  },

  // Description
  description: 'text-gray-400 text-base md:text-lg max-w-lg leading-relaxed',

  // Buttons Container
  buttonsContainer: 'flex flex-col sm:flex-row gap-4 pt-4',

  // Download CV Button
  downloadButton: {
    base: 'group relative px-8 py-4 rounded-lg border border-white/20 bg-transparent overflow-hidden transition-all duration-300 hover:border-cyan-400/50',
    content: 'relative z-10 flex items-center justify-center gap-2 text-white font-medium',
    icon: 'w-5 h-5 transition-transform group-hover:-translate-y-1',
    hoverOverlay: 'absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  },

  // Contact Button
  contactButton: {
    base: 'group relative px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 overflow-hidden',
    glowOverlay: 'absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg',
    content: 'relative z-10 flex items-center justify-center gap-2 text-black font-semibold',
    icon: 'w-5 h-5 transition-transform group-hover:translate-x-1',
  },

  // Tech Stack
  techStack: {
    container: 'pt-8',
    label: 'text-gray-500 text-sm mb-4 tracking-wider uppercase',
    pillsContainer: 'flex flex-wrap gap-3',
    pill: 'px-4 py-2 rounded-full text-sm border border-white/10 text-gray-300 bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300',
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
