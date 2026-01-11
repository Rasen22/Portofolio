// Project Section Styles

export const projectStyles = {
  section: `py-16 px-4 sm:px-6 lg:px-8`,
  container: `max-w-6xl mx-auto`,
  
  // Header
  header: `mb-10`,
  title: `text-2xl md:text-3xl font-bold text-primary`,
  titleAccent: `text-accent`,
  
  // Projects Grid
  grid: `grid grid-cols-1 md:grid-cols-2 gap-6`,
  
  // Project Card
  card: `group bg-black rounded-lg overflow-hidden border border-primary/10 transition-all duration-300 hover:shadow-[0_4px_12px_rgba(255,122,48,0.2)]`,
  cardImage: `relative aspect-video overflow-hidden bg-secondary`,
  cardImageText: `absolute inset-0 flex items-center justify-center text-primary text-sm`,
  cardContent: `p-4`,
  cardTitle: `text-base font-semibold text-primary mb-1`,
  cardDescription: `text-secondary text-sm mb-2`,
  cardLink: `text-accent text-xs font-medium hover:underline`,
  
  // Load More Button
  loadMoreWrapper: `text-center mt-10`,
  loadMoreBtn: `px-8 py-2.5 bg-accent text-black font-medium rounded-lg border border-primary/20 hover:bg-secondary hover:text-primary transition-all duration-300`,
};

export default projectStyles;
