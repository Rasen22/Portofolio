// Styles for Profile Page - Clean and Well-Structured

export const profileStyles = {
  // ============================================
  // MAIN CONTAINER
  // ============================================
  container: 'relative min-h-screen bg-[#BDE8F5]',
  
  // Inner wrapper with proper padding from fixed navbar
  innerWrapper: 'pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20',

  // ============================================
  // BACKGROUND EFFECTS
  // ============================================
  background: {
    wrapper: 'absolute inset-0 overflow-hidden pointer-events-none',
    orbCyan: 'absolute top-40 left-0 w-[500px] h-[500px] bg-[#4988C4]/20 rounded-full blur-[120px]',
    orbPurple: 'absolute bottom-20 right-0 w-[500px] h-[500px] bg-[#1C4D8D]/20 rounded-full blur-[120px]',
  },

  // ============================================
  // CONTENT CONTAINER
  // ============================================
  contentContainer: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',

  // ============================================
  // HERO SECTION (About Me)
  // ============================================
  hero: {
    section: 'mb-16 md:mb-24',
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center',
    photoColumn: 'flex justify-center lg:justify-center',
    bioColumn: 'text-center lg:text-left',
  },

  // ============================================
  // PROFILE PHOTO
  // ============================================
  photo: {
    container: 'relative inline-block p-6',
    wrapper: 'relative',
    glowRing: 'absolute -inset-1 rounded-full bg-gradient-to-r from-[#4988C4] via-[#1C4D8D] to-[#4988C4] opacity-75 blur-sm animate-pulse',
    circle: 'relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#BDE8F5] bg-gradient-to-br from-[#4988C4]/30 to-[#1C4D8D]/30',
    placeholder: 'w-full h-full flex items-center justify-center',
    placeholderIcon: 'w-20 h-20 sm:w-24 sm:h-24 text-[#4988C4]/80',
  },

  // Badge positions
  badges: {
    base: 'absolute flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/80 backdrop-blur-sm border border-[#4988C4]/30 shadow-lg z-10',
    topRight: '-top-2 -right-2',
    left: 'top-1/2 -left-6 -translate-y-1/2',
    bottomRight: 'bottom-2 -right-4',
    icon: 'w-5 h-5 md:w-6 md:h-6 text-[#4988C4]',
  },

  // ============================================
  // BIO SECTION
  // ============================================
  bio: {
    label: 'inline-block text-[#1C4D8D] font-mono text-xs sm:text-sm tracking-widest uppercase mb-3',
    heading: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-[#0F2854]',
    gradientName: 'bg-gradient-to-r from-[#4988C4] to-[#1C4D8D] bg-clip-text text-transparent',
    description: 'text-[#1C4D8D] text-sm sm:text-base md:text-lg leading-relaxed mb-4',
    descriptionLast: 'text-[#1C4D8D] text-sm sm:text-base md:text-lg leading-relaxed mb-6',
    socialContainer: 'flex gap-3 justify-center lg:justify-start',
    socialLink: 'w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white/50 border border-[#4988C4]/30 flex items-center justify-center text-[#1C4D8D] hover:text-[#4988C4] hover:border-[#4988C4]/60 hover:bg-[#4988C4]/10 transition-all duration-300',
  },

  // ============================================
  // STATS SECTION
  // ============================================
  stats: {
    section: 'mb-16 md:mb-24',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6',
    card: 'text-center p-5 md:p-6 rounded-2xl bg-white/40 border border-[#4988C4]/20 hover:border-[#4988C4]/40 transition-all duration-300',
    value: 'block text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4988C4] to-[#1C4D8D] bg-clip-text text-transparent mb-1',
    label: 'text-[#1C4D8D] text-xs md:text-sm',
  },

  // ============================================
  // TIMELINE SECTION
  // ============================================
  timeline: {
    section: 'relative',
    header: 'text-center mb-12 md:mb-16',
    label: 'inline-block text-[#1C4D8D] font-mono text-xs sm:text-sm tracking-widest uppercase mb-3',
    heading: 'text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F2854]',
    gradientText: 'bg-gradient-to-r from-[#4988C4] to-[#1C4D8D] bg-clip-text text-transparent',
    container: 'relative max-w-3xl mx-auto pl-8 md:pl-12',
    line: 'absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#4988C4]/60 via-[#1C4D8D]/40 to-transparent',
  },

  // ============================================
  // TIMELINE ITEM
  // ============================================
  timelineItem: {
    wrapper: 'relative mb-8 md:mb-12 last:mb-0',
    dotContainer: 'absolute -left-8 md:-left-12 top-0 w-8 md:w-12 flex justify-center',
    dot: 'w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-[#4988C4] to-[#1C4D8D] ring-4 ring-[#BDE8F5]',
    content: 'pb-2',
    card: 'p-4 md:p-6 rounded-2xl bg-white/40 border border-[#4988C4]/20 hover:border-[#4988C4]/40 transition-all duration-300',
    header: 'flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3',
    role: 'text-lg md:text-xl font-bold text-[#0F2854]',
    company: 'text-[#1C4D8D] text-sm md:text-base',
    period: 'inline-flex px-3 py-1 text-xs md:text-sm rounded-full bg-[#4988C4]/20 text-[#1C4D8D] border border-[#4988C4]/30 whitespace-nowrap self-start',
    description: 'text-[#1C4D8D] text-sm md:text-base leading-relaxed mb-4',
    techContainer: 'flex flex-wrap gap-2',
    techBadge: 'px-2.5 py-1 text-xs rounded-lg bg-white/50 text-[#1C4D8D] border border-[#4988C4]/20',
  },
};

export default profileStyles;
