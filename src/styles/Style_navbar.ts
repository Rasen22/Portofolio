// Navbar Styles

export const navbarStyles = {
  nav: `fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 pb-4`,
  navScrolled: `pt-3 pb-3`,
  navTop: ``,
  container: ``,
  inner: `flex items-center justify-center`,
  
  // Desktop Menu - Pill shaped transparent background
  desktopMenu: `hidden md:flex items-center gap-0 px-1.5 py-1.5 bg-[#1a1a1a]/90 backdrop-blur-md border border-[#333]/50 rounded-full`,
  menuItem: `relative`,
  menuLink: `relative block px-4 py-1.5 text-[#E9E3DF] text-sm font-medium transition-all duration-300 hover:text-[#FF7A30] rounded-full`,
  menuLinkActive: `text-[#FF7A30]`,
  activeUnderline: `absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-1/2 bg-[#FF7A30]/70 rounded-full`,
  
  // Mobile Menu Button
  mobileMenuBtn: `md:hidden p-3 text-[#E9E3DF] bg-[#1a1a1a]/90 backdrop-blur-md border border-[#333]/50 rounded-full hover:text-[#FF7A30] transition-colors`,
  hamburgerLine: `block w-5 h-0.5 bg-current transition-all duration-300`,
  
  // Mobile Menu
  mobileMenu: `md:hidden fixed top-16 left-4 right-4 p-4 bg-[#1a1a1a]/95 backdrop-blur-md rounded-2xl border border-[#333]/50`,
  mobileMenuInner: `flex flex-col space-y-1`,
  mobileMenuLink: `block text-[#E9E3DF] hover:text-[#FF7A30] transition-all duration-300 text-base font-medium py-3 text-center rounded-lg hover:bg-white/5`,
  mobileMenuLinkActive: `text-[#FF7A30] bg-white/5`,
};

export default navbarStyles;
