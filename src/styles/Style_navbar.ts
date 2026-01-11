// Navbar Styles

export const navbarStyles = {
  nav: `fixed top-0 left-0 right-0 z-50 transition-all duration-300`,
  navScrolled: `bg-black/80 backdrop-blur-md`,
  navTop: `bg-transparent`,
  container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`,
  inner: `flex items-center justify-center h-14`,
  
  // Desktop Menu
  desktopMenu: `hidden md:flex items-center space-x-1`,
  menuItem: `relative px-4 py-2`,
  menuLink: `text-primary text-sm font-medium transition-all duration-300 hover:text-accent`,
  menuLinkActive: `text-accent`,
  activeUnderline: `absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-accent/70 rounded-full`,
  
  // Mobile Menu Button
  mobileMenuBtn: `md:hidden p-2 text-primary hover:text-accent transition-colors`,
  hamburgerLine: `block w-6 h-0.5 bg-current transition-all duration-300`,
  
  // Mobile Menu
  mobileMenu: `md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md`,
  mobileMenuInner: `px-4 py-4 space-y-2`,
  mobileMenuLink: `block text-primary hover:text-accent transition-all duration-300 text-base font-medium py-2 text-center`,
  mobileMenuLinkActive: `text-accent border-b-2 border-accent/70`,
};

export default navbarStyles;
