// Hero Section Styles

export const heroStyles = {
  section: `min-h-screen pt-24 pb-16 px-6 sm:px-8 lg:px-12 flex items-center bg-[#0a0a0a]`,
  container: `max-w-7xl mx-auto w-full`,
  
  // Main Grid - Content left, Photo right
  mainGrid: `grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center`,
  
  // Content Side (Left)
  content: `text-left space-y-5 order-2 lg:order-1`,
  badge: `inline-flex items-center px-4 py-1.5 rounded-md bg-[#1a1a1a] border border-[#333] text-[#E9E3DF]/70 text-[10px] font-semibold tracking-[0.2em] uppercase`,
  greeting: `text-5xl md:text-6xl lg:text-7xl font-bold text-[#E9E3DF] leading-[1.1]`,
  nameAccent: `text-[#FF7A30]`,
  role: `text-[#E9E3DF]/50 text-sm md:text-base max-w-lg leading-relaxed`,
  
  // Buttons
  buttonGroup: `flex flex-row gap-4 pt-2`,
  btnDownload: `px-6 py-3 bg-[#FF7A30] text-[#0a0a0a] text-xs font-bold rounded-md hover:bg-[#ff8c4a] transition-all duration-300 tracking-wider uppercase`,
  btnContact: `px-6 py-3 bg-transparent text-[#E9E3DF] text-xs font-bold rounded-md border border-[#444] hover:border-[#FF7A30] hover:text-[#FF7A30] transition-all duration-300 tracking-wider uppercase`,
  
  // Photo Card Side (Right)
  photoWrapper: `flex justify-center lg:justify-end order-1 lg:order-2`,
  photoCard: `relative w-[300px] h-[380px] md:w-[340px] md:h-[420px] rounded-2xl overflow-visible`,
  photoCardInner: `relative w-full h-full bg-gradient-to-br from-[#1a3a5c] via-[#0d2840] to-[#071a2b] rounded-2xl overflow-hidden border border-[#1e4976]/30`,
  photoImage: `w-full h-full object-cover object-center`,
  photoGlow: `absolute inset-0 bg-gradient-to-t from-[#0a4d8c]/30 via-transparent to-transparent`,
  photoGlowOuter: `absolute -inset-2 bg-gradient-to-br from-[#0a4d8c]/30 via-[#1e6bb8]/20 to-[#0a4d8c]/30 rounded-3xl blur-2xl -z-10`,
  
  // Stats Section
  statsWrapper: `pt-12 border-t border-[#222] mt-8`,
  statsGrid: `flex flex-row items-center gap-8 md:gap-12`,
  statItem: `text-left`,
  statValue: `text-2xl md:text-3xl font-bold text-[#E9E3DF]`,
  statLabel: `text-[10px] text-[#E9E3DF]/40 mt-1 tracking-wider uppercase`,
  statDivider: `w-px h-10 bg-[#333]`,
};

export default heroStyles;
