// Navbar Types

export interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

export interface NavbarLogicReturn {
  isScrolled: boolean;
  isMenuOpen: boolean;
  isProjectDropdownOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  setIsProjectDropdownOpen: (value: boolean) => void;
  dropdownRef: React.RefObject<HTMLLIElement | null>;
  isActive: (href: string) => boolean;
}
