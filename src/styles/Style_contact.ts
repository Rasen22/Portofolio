// Styles for Contact Page
export const contactStyles = {
  // Main container
  container: 'relative min-h-screen pt-24 pb-20',

  // Background Effects
  background: {
    orbCyan: 'absolute top-1/4 left-0 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[150px]',
    orbPurple: 'absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]',
  },

  // Content Container
  contentContainer: 'container mx-auto px-4 relative z-10',

  // Header
  header: {
    container: 'text-center mb-16',
    label: 'text-cyan-400 font-mono text-sm tracking-wider uppercase',
    heading: 'text-4xl md:text-5xl lg:text-6xl font-bold mt-4',
    gradientText: 'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
  },

  // Grid Layout
  grid: 'grid lg:grid-cols-2 gap-8 lg:gap-16',

  // Form Card
  formCard: {
    container: 'p-8 rounded-2xl bg-[#141414]/80 backdrop-blur-xl border border-white/10',
    heading: 'text-2xl font-bold mb-2',
    description: 'text-gray-400 mb-8',
    form: 'space-y-6',
  },

  // Success Message
  successMessage: {
    container: 'py-12 text-center',
    iconWrapper: 'w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center',
    icon: 'w-8 h-8 text-black',
    heading: 'text-xl font-bold text-white mb-2',
    text: 'text-gray-400',
  },

  // Submit Button
  submitButton: {
    base: 'w-full py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold relative overflow-hidden group disabled:opacity-70',
    content: 'relative z-10 flex items-center justify-center gap-2',
    spinner: 'w-5 h-5 border-2 border-black/30 border-t-black rounded-full',
    icon: 'w-5 h-5 group-hover:translate-x-1 transition-transform',
  },

  // Input Field
  inputField: {
    wrapper: 'relative',
    label: 'block text-sm text-gray-400 mb-2',
    inputWrapper: 'relative',
    input: {
      base: 'w-full bg-transparent border-b-2 py-3 px-0 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300',
      error: 'border-red-500',
      focused: 'border-transparent',
      default: 'border-white/20',
    },
    gradientLine: 'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500',
    errorText: 'text-red-400 text-sm mt-1',
  },

  // Textarea
  textarea: {
    base: 'w-full bg-transparent border-b-2 py-3 px-0 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300 resize-none',
  },

  // Right Column
  rightColumn: 'space-y-8',

  // World Map
  worldMap: {
    container: 'relative h-[300px] rounded-2xl overflow-hidden bg-[#141414]/80 backdrop-blur-xl border border-white/10',
    canvas: 'w-full h-full',
    overlay: 'absolute inset-0 pointer-events-none bg-gradient-to-t from-[#141414] via-transparent to-transparent',
  },

  // Contact Info Card
  contactInfo: {
    container: 'p-8 rounded-2xl bg-[#141414]/80 backdrop-blur-xl border border-white/10',
    heading: 'text-2xl font-bold mb-6',
    list: 'space-y-4',
  },

  // Social Link
  socialLink: {
    container: 'flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors group',
    iconWrapper: 'w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-purple-500/30 transition-colors',
    labelText: 'text-sm text-gray-400',
    handleText: 'text-white font-medium group-hover:text-cyan-400 transition-colors',
  },

  // Location
  location: {
    container: 'text-center text-gray-500 text-sm',
  },

  // Footer
  footer: {
    container: 'text-center mt-20 text-gray-500 text-sm',
  },
};

export default contactStyles;
