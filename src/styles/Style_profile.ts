// Styles for Profile Page
export const profileStyles = {
  // Main container - increased top padding to avoid navbar overlap
  container: 'relative min-h-screen pt-32 md:pt-40 pb-20',

  // Background Effects
  background: {
    orbCyan: 'absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[150px]',
    orbPurple: 'absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]',
  },

  // Content Container
  contentContainer: 'container mx-auto px-4 md:px-6 relative z-10',

  // Header Section
  header: {
    section: 'mb-20',
    grid: 'grid lg:grid-cols-2 gap-12 lg:gap-20 items-center',
    photoContainer: 'flex justify-center',
  },

  // Bio Section
  bio: {
    label: 'text-cyan-400 font-mono text-sm tracking-wider uppercase',
    heading: 'text-4xl md:text-5xl font-bold mt-4 mb-6',
    gradientName: 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
    paragraph: 'text-gray-400 text-lg leading-relaxed mb-6',
    paragraphLast: 'text-gray-400 text-lg leading-relaxed mb-8',
    socialContainer: 'flex gap-4',
    socialLink: 'w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition-colors',
    socialIcon: 'text-xl',
  },

  // Profile Photo
  profilePhoto: {
    glowBorder: 'absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400',
    shadow: 'absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-2xl',
    photoContainer: 'relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background',
    photoPlaceholder: 'w-full h-full bg-gradient-to-br from-cyan-400/50 to-purple-500/50 flex items-center justify-center',
    photoEmoji: 'text-6xl',
    floatingBadge: 'px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20',
    badgeIcon: 'text-lg',
  },

  // Badge Positions
  badgePositions: {
    react: '-top-4 -right-4',
    mobile: 'top-1/4 -left-8',
    design: 'bottom-0 -right-8',
  },

  // Stats Section
  stats: {
    section: 'mb-20',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-6',
    card: 'text-center p-6 rounded-xl bg-white/5 border border-white/10',
    value: 'block text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
    label: 'text-gray-400 text-sm mt-2 block',
  },

  // Timeline Section
  timeline: {
    headerContainer: 'text-center mb-16',
    label: 'text-cyan-400 font-mono text-sm tracking-wider uppercase',
    heading: 'text-3xl md:text-4xl font-bold mt-4',
    gradientText: 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
    container: 'max-w-3xl mx-auto',
  },

  // Timeline Item
  timelineItem: {
    row: 'relative flex gap-6 md:gap-10',
    lineContainer: 'flex flex-col items-center',
    dot: 'relative z-10 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500',
    line: 'w-0.5 h-full bg-gradient-to-b from-cyan-400/50 to-purple-500/20',
    content: 'pb-12 flex-1',
    card: 'p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group',
    cardHeader: 'flex flex-wrap items-start justify-between gap-4 mb-4',
    role: 'text-xl font-bold text-white group-hover:text-cyan-400 transition-colors',
    company: 'text-purple-400',
    period: 'px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30',
    description: 'text-gray-400 mb-4',
    techContainer: 'flex flex-wrap gap-2',
    techBadge: 'px-2 py-1 text-xs rounded bg-white/5 text-gray-300',
  },
};

export default profileStyles;
