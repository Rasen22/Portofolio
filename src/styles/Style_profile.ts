// Styles for Profile Page
export const profileStyles = {
  // Main container - sufficient top padding to clear fixed navbar (h-20 = 5rem = 80px)
  // Using pt-28 (7rem/112px) on mobile and pt-36 (9rem/144px) on desktop for comfortable spacing
  container: 'relative min-h-screen pt-28 md:pt-36 lg:pt-40 pb-20',

  // Background Effects - ensure they don't cause visual overlap
  background: {
    orbCyan: 'absolute top-20 left-1/4 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[150px] pointer-events-none',
    orbPurple: 'absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none',
  },

  // Content Container
  contentContainer: 'container mx-auto px-4 md:px-6 lg:px-8 relative z-10',

  // Header Section - the "hero" area of profile page with proper spacing
  header: {
    section: 'mb-16 md:mb-20 lg:mb-24 pb-8 md:pb-12',
    grid: 'grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center',
    photoContainer: 'flex justify-center order-first lg:order-none',
  },

  // Bio Section
  bio: {
    label: 'text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2',
    heading: 'text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 md:mb-6 leading-tight',
    gradientName: 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
    paragraph: 'text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6',
    paragraphLast: 'text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8',
    socialContainer: 'flex gap-3 md:gap-4 mt-2',
    socialLink: 'w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300',
    socialIcon: 'text-lg md:text-xl',
  },

  // Profile Photo - wrapped in container with padding for floating badges
  profilePhoto: {
    wrapper: 'relative p-8 md:p-12', // Padding to contain floating badges
    glowBorder: 'absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400',
    shadow: 'absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-2xl pointer-events-none',
    photoContainer: 'relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-background',
    photoPlaceholder: 'w-full h-full bg-gradient-to-br from-cyan-400/50 to-purple-500/50 flex items-center justify-center',
    photoEmoji: 'text-5xl md:text-6xl',
    floatingBadge: 'px-2 py-1.5 md:px-3 md:py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 z-20',
    badgeIcon: 'text-base md:text-lg',
  },

  // Badge Positions - adjusted to not overflow container
  badgePositions: {
    react: 'top-0 right-0 md:-top-2 md:-right-2',
    mobile: 'top-1/3 -left-2 md:left-0',
    design: 'bottom-4 right-0 md:-right-4',
  },

  // Stats Section
  stats: {
    section: 'mb-16 md:mb-20',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6',
    card: 'text-center p-4 md:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300',
    value: 'block text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
    label: 'text-gray-400 text-xs md:text-sm mt-1 md:mt-2 block',
  },

  // Timeline Section
  timeline: {
    headerContainer: 'text-center mb-12 md:mb-16',
    label: 'text-cyan-400 font-mono text-sm tracking-wider uppercase',
    heading: 'text-2xl sm:text-3xl md:text-4xl font-bold mt-3 md:mt-4',
    gradientText: 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
    container: 'max-w-3xl mx-auto',
  },

  // Timeline Item
  timelineItem: {
    row: 'relative flex gap-4 md:gap-6 lg:gap-10',
    lineContainer: 'flex flex-col items-center flex-shrink-0',
    dot: 'relative z-10 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500',
    line: 'w-0.5 h-full bg-gradient-to-b from-cyan-400/50 to-purple-500/20',
    content: 'pb-8 md:pb-12 flex-1 min-w-0',
    card: 'p-4 md:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group',
    cardHeader: 'flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 md:mb-4',
    role: 'text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors',
    company: 'text-purple-400 text-sm md:text-base',
    period: 'px-2 md:px-3 py-1 text-xs md:text-sm rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 self-start',
    description: 'text-gray-400 text-sm md:text-base mb-3 md:mb-4',
    techContainer: 'flex flex-wrap gap-1.5 md:gap-2',
    techBadge: 'px-2 py-0.5 md:py-1 text-xs rounded bg-white/5 text-gray-300',
  },
};

export default profileStyles;
