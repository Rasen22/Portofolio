// Hero Section Styles

export const heroStyles = {
  section: `min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-8 flex items-center`,
  container: `max-w-6xl mx-auto w-full`,
  
  // Main Grid - Photo left, Content right
  mainGrid: `grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start`,
  
  // Photo Card Side (Left)
  photoWrapper: `flex justify-center lg:justify-start`,
  photoCard: `w-[200px] h-[260px] lg:w-[240px] lg:h-[320px] bg-secondary rounded-xl flex items-center justify-center border border-primary/10`,
  photoText: `text-primary text-base font-medium`,
  
  // Content Side (Right)
  content: `text-center lg:text-left space-y-3`,
  badge: `inline-flex items-center px-4 py-1 rounded-full border border-primary/40 text-primary text-xs font-medium`,
  greeting: `text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight`,
  nameAccent: `text-accent`,
  role: `text-base md:text-lg text-secondary font-medium`,
  description: `text-primary/60 text-sm`,
  
  // Buttons
  buttonGroup: `flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2`,
  btnContact: `px-5 py-2 bg-secondary text-primary text-sm font-medium rounded-md border border-primary/20 hover:bg-accent hover:border-accent transition-all duration-300`,
  btnDownload: `px-5 py-2 bg-accent text-black text-sm font-medium rounded-md hover:bg-primary transition-all duration-300`,
  
  // Placeholder Boxes Grid - 4x2 grid
  boxesWrapper: `pt-6`,
  boxesGrid: `grid grid-cols-4 gap-3 max-w-[320px] mx-auto lg:mx-0`,
  box: `aspect-square bg-secondary rounded-md`,
};

export default heroStyles;
