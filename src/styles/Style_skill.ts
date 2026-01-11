// Skill Section Styles

export const skillStyles = {
  section: `py-16 px-4 sm:px-6 lg:px-8`,
  container: `max-w-6xl mx-auto`,
  
  // Header
  header: `mb-10`,
  badge: `inline-block px-3 py-1 bg-transparent border border-primary/30 text-primary rounded text-xs font-medium mb-3`,
  title: `text-2xl md:text-3xl font-bold text-primary mb-2`,
  subtitle: `text-primary/50 text-sm`,
  
  // Skills Grid - Two columns with vertical divider
  gridWrapper: `relative`,
  grid: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16`,
  verticalDivider: `hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2`,
  
  // Category Card
  category: ``,
  categoryHeader: `mb-6`,
  categoryTitle: `inline-block text-xs font-medium text-primary/70 px-3 py-1.5 border border-primary/20 rounded`,
  
  // Circles Grid - 4 columns, 2 rows
  circlesGrid: `grid grid-cols-4 gap-4`,
  
  // Circle Styles
  circleEmpty: `w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-secondary bg-transparent transition-all duration-300 hover:scale-110 hover:border-accent cursor-pointer`,
  circleFilled: `w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer`,
  circleText: `text-background text-xs font-medium`,
};

export default skillStyles;
