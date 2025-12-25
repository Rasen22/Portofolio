// Styles for Home Page
export const homeStyles = {
  // Main container
  container: 'relative',

  // Hero Section
  hero: {
    section: 'relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24',
    gradientOrbCyan: 'absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[120px] animate-float',
    gradientOrbPurple: 'absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] animate-float animation-delay-2000',
    contentContainer: 'container mx-auto px-4 md:px-6 relative z-10',
    gridLayout: 'grid lg:grid-cols-2 gap-8 lg:gap-16 items-center',
    leftContent: 'order-2 lg:order-1',
    rightContent: 'order-1 lg:order-2 flex justify-center',
  },

  // Scroll Indicator
  scrollIndicator: {
    container: 'absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2',
    text: 'text-gray-500 text-sm tracking-wider',
    wheel: 'w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2',
    dot: 'w-1.5 h-1.5 bg-cyan-400 rounded-full',
  },

  // Loading Spinner
  loadingContainer: 'w-full h-[400px] md:h-[500px] flex items-center justify-center',
  loadingSpinner: 'w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin',

  // CTA Section
  cta: {
    section: 'py-20 md:py-32 relative overflow-hidden',
    bgGradient: 'absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent',
    contentContainer: 'container mx-auto px-4 relative z-10',
    innerContainer: 'max-w-3xl mx-auto text-center',
    heading: 'text-3xl md:text-4xl lg:text-5xl font-bold mb-6',
    gradientText: 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
    description: 'text-gray-400 text-lg mb-10',
    button: 'inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg text-black font-semibold group',
    buttonIcon: 'w-5 h-5 transition-transform group-hover:translate-x-1',
  },

  // Particles
  particles: 'opacity-30',
};

export default homeStyles;
