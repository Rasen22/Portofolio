// Styles for Skills Section Component
export const skillsSectionStyles = {
  // Section
  section: 'py-20 md:py-32',
  
  // Container
  container: 'container mx-auto px-4',

  // Header
  header: {
    container: 'text-center mb-16',
    label: 'text-cyan-400 font-mono text-sm tracking-wider uppercase',
    heading: 'text-3xl md:text-4xl lg:text-5xl font-bold mt-4',
    gradientText: 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
  },

  // Skills Grid
  grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6',

  // Skill Card
  card: {
    container: 'group relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden cursor-pointer',
    hoverOverlay: 'absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-500/0 group-hover:from-cyan-400/10 group-hover:to-purple-500/10 transition-all duration-300',
    content: 'relative z-10',
    icon: 'text-4xl mb-4',
    name: 'text-lg font-semibold text-white mb-3',
    progressBar: {
      container: 'relative h-2 bg-white/10 rounded-full overflow-hidden',
      fill: 'absolute inset-y-0 left-0 rounded-full',
    },
    percentage: 'absolute top-4 right-4 text-sm font-mono text-cyan-400',
    cornerAccent: 'absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  },
};

// Animation variants for Framer Motion
export const skillsSectionAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  item: {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },

  card: {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(0, 243, 255, 0.3)',
    },
    transition: { duration: 0.3 },
  },

  icon: {
    animate: { rotate: [0, 10, -10, 0] },
    transition: { duration: 0.5 },
  },
};

// Generate progress bar gradient
export const getProgressGradient = (color: string): string => {
  return `linear-gradient(90deg, #00f3ff, ${color}, #b967ff)`;
};

export default skillsSectionStyles;
