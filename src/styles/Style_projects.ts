// Styles for Projects Page
export const projectsStyles = {
  // Main container
  container: 'relative min-h-screen pt-24 pb-20',

  // Background Effects
  background: {
    orbPurple: 'absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]',
    orbCyan: 'absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[150px]',
  },

  // Content Container
  contentContainer: 'container mx-auto px-4 relative z-10',

  // Header
  header: {
    container: 'max-w-3xl mb-16',
    label: 'text-cyan-400 font-mono text-sm tracking-wider uppercase',
    heading: 'text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6',
    gradientText: 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
    description: 'text-gray-400 text-lg',
  },

  // Category Filters
  filters: {
    container: 'flex flex-wrap gap-3 mb-12',
  },

  // Category Chip
  categoryChip: {
    base: 'px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300',
    colors: {
      white: {
        inactive: 'border-white/20 text-white hover:border-white/50 bg-transparent',
        active: 'bg-white text-black',
      },
      cyan: {
        inactive: 'border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60 bg-transparent',
        active: 'bg-cyan-400 text-black',
      },
      purple: {
        inactive: 'border-purple-400/30 text-purple-400 hover:border-purple-400/60 bg-transparent',
        active: 'bg-purple-500 text-white',
      },
      green: {
        inactive: 'border-green-400/30 text-green-400 hover:border-green-400/60 bg-transparent',
        active: 'bg-green-400 text-black',
      },
      pink: {
        inactive: 'border-pink-400/30 text-pink-400 hover:border-pink-400/60 bg-transparent',
        active: 'bg-pink-400 text-black',
      },
    },
  },

  // Projects Grid
  grid: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6',

  // Project Card
  card: {
    container: 'group relative rounded-xl overflow-hidden bg-[#141414] border border-white/10 cursor-pointer',
    thumbnail: {
      wrapper: 'relative aspect-video overflow-hidden',
      gradient: 'absolute inset-0 bg-gradient-to-br from-cyan-400/40 to-purple-500/40',
      overlay: 'absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent',
    },
    featuredBadge: 'absolute top-4 left-4 px-2 py-1 rounded bg-gradient-to-r from-cyan-400 to-purple-500 text-xs font-bold text-black',
    yearBadge: 'absolute top-4 right-4 px-2 py-1 rounded bg-white/10 backdrop-blur-sm text-xs text-white',
    content: 'p-6',
    title: 'text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2',
    description: 'text-gray-400 text-sm line-clamp-2 mb-4',
    techContainer: 'flex flex-wrap gap-2',
    techBadge: 'px-2 py-1 text-xs rounded bg-white/5 text-gray-300 border border-white/10',
    techMore: 'px-2 py-1 text-xs rounded bg-white/5 text-gray-500',
    arrowButton: 'absolute bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center',
    arrowIcon: 'w-5 h-5 text-black',
  },

  // Empty State
  emptyState: {
    container: 'text-center py-20',
    text: 'text-gray-500 text-lg',
  },

  // Footer CTA
  footerCta: {
    container: 'text-center mt-20',
    text: 'text-gray-400 mb-6',
    button: 'inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold',
    icon: 'w-5 h-5',
  },
};

export default projectsStyles;
