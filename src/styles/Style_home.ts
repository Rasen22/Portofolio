// Styles for Home Page
export const homeStyles = {
  // Main container
  container: 'relative',

  // Hero Section
  hero: {
    section: 'relative min-h-screen flex items-center overflow-hidden',
    gradientOrbCyan: 'absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px]',
    gradientOrbPurple: 'absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]',
    contentContainer: 'container mx-auto px-6 md:px-12 lg:px-20 relative z-10',
    gridLayout: 'flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-screen py-20',
    // 3D Model - Kiri pada desktop, atas pada mobile
    modelContainer: 'w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-1',
    modelWrapper: 'relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]',
    // Text Content - Kanan pada desktop, bawah pada mobile
    textContainer: 'w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-2',
  },

  // Scroll Indicator - Hidden for cleaner design
  scrollIndicator: {
    container: 'hidden',
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
