// Styles for Home Page
export const homeStyles = {
  // Main container
  container: 'relative',

  // Hero Section
  hero: {
    section: 'relative min-h-screen overflow-hidden',
    gradientOrbCyan: 'absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#4988C4]/20 rounded-full blur-[100px] pointer-events-none',
    gradientOrbPurple: 'absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#1C4D8D]/20 rounded-full blur-[100px] pointer-events-none',
    contentContainer: 'container mx-auto px-6 lg:px-16 relative z-10 pt-24 md:pt-28 lg:pt-32 pb-12',
    gridLayout: 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]',
    // 3D Model - Kiri pada desktop, bawah pada mobile (order-2 lg:order-1)
    modelContainer: 'relative flex items-center justify-center lg:justify-start order-2 lg:order-1',
    modelWrapper: 'relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]',
    // Text Content - Kanan pada desktop, atas pada mobile (order-1 lg:order-2)
    textContainer: 'relative flex flex-col justify-center order-1 lg:order-2',
  },

  // Scroll Indicator - Hidden for cleaner design
  scrollIndicator: {
    container: 'hidden',
    text: 'text-[#1C4D8D] text-sm tracking-wider',
    wheel: 'w-6 h-10 rounded-full border-2 border-[#4988C4]/30 flex justify-center pt-2',
    dot: 'w-1.5 h-1.5 bg-[#4988C4] rounded-full',
  },

  // Loading Spinner
  loadingContainer: 'w-full h-[400px] md:h-[500px] flex items-center justify-center',
  loadingSpinner: 'w-16 h-16 border-4 border-[#4988C4]/30 border-t-[#4988C4] rounded-full animate-spin',

  // CTA Section
  cta: {
    section: 'py-20 md:py-32 relative overflow-hidden',
    bgGradient: 'absolute inset-0 bg-gradient-to-b from-transparent via-[#4988C4]/10 to-transparent',
    contentContainer: 'container mx-auto px-4 relative z-10',
    innerContainer: 'max-w-3xl mx-auto text-center',
    heading: 'text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0F2854]',
    gradientText: 'bg-gradient-to-r from-[#4988C4] to-[#1C4D8D] bg-clip-text text-transparent',
    description: 'text-[#1C4D8D] text-lg mb-10',
    button: 'inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0F2854] to-[#1C4D8D] rounded-lg text-white font-semibold group',
    buttonIcon: 'w-5 h-5 transition-transform group-hover:translate-x-1',
  },

  // Particles
  particles: 'opacity-30',
};

export default homeStyles;
