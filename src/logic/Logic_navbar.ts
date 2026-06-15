// Navbar Logic
import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Variants } from 'framer-motion';
import { gsap } from 'gsap';
import type { NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about-me' },
  { name: 'Experience', href: '/experience' },
  { name: 'Project', href: '/#project', hasDropdown: true },
  { name: 'Contact', href: '/contact' },
];

export const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0, 
    y: 10, 
    scale: 0.95,
    transition: { duration: 0.2 }
  },
};

export const dropdownData = {
  title: 'Recent Projects',
  viewAllText: 'View All →',
  maxProjects: 6,
};

// GSAP Animation Configuration
export const gsapConfig = {
  ease: 'power3.out',
  accentColor: '#FF7A30',
  textColor: '#E9E3DF',
  darkBg: '#0a0a0a',
};

export function useNavbarLogic() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');

  // GSAP Refs
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const navItemsRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Scroll handler to detect active section and scrolled state on homepage
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (pathname !== '/') {
        setActiveSection('');
        return;
      }

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const scrollyContainer = document.getElementById('scrollytelling-container');
      const projectSection = document.getElementById('project');
      
      if (!scrollyContainer) return;
      
      const scrollyTop = scrollyContainer.offsetTop;
      const scrollyHeight = scrollyContainer.offsetHeight;
      const scrollyMiddle = scrollyTop + scrollyHeight * 0.5;
      
      if (scrollY < scrollyMiddle - 100) {
        setActiveSection('home');
      } else if (scrollY < scrollyTop + scrollyHeight - 100) {
        setActiveSection('about');
      } else if (projectSection && scrollY >= projectSection.offsetTop - windowHeight * 0.4) {
        setActiveSection('project');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Click scroll handler for homepage hash links
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/') {
      if (href.startsWith('/#')) {
        e.preventDefault();
        const hash = href.substring(2);
        
        if (hash === 'about-me') {
          const container = document.getElementById('scrollytelling-container');
          if (container) {
            const scrollTarget = container.offsetTop + container.offsetHeight - window.innerHeight;
            window.scrollTo({
              top: scrollTarget,
              behavior: 'smooth'
            });
            window.history.pushState(null, '', `/#${hash}`);
          }
        } else if (hash === 'project') {
          const element = document.getElementById('project');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `/#${hash}`);
          }
        }
      }
    }
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // GSAP Circle Animation Setup
  useEffect(() => {
    const { ease } = gsapConfig;

    const setupAnimations = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        
        // Calculate circle size to cover the pill
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        // Set circle size and position
        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        // Initial state: circle is hidden (scale 0)
        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        // Get label elements
        const label = pill.querySelector<HTMLElement>('.pill-label');
        const hoverLabel = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        // Kill existing timeline
        tlRefs.current[index]?.kill();
        
        // Create new timeline
        const tl = gsap.timeline({ paused: true });

        // Circle expands
        tl.to(circle, { 
          scale: 1.2, 
          xPercent: -50, 
          duration: 0.4, 
          ease, 
          overwrite: 'auto' 
        }, 0);

        // Label slides up
        if (label) {
          tl.to(label, { 
            y: -(h + 8), 
            duration: 0.4, 
            ease, 
            overwrite: 'auto' 
          }, 0);
        }

        // Hover label slides in
        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 50), opacity: 0 });
          tl.to(hoverLabel, { 
            y: 0, 
            opacity: 1, 
            duration: 0.4, 
            ease, 
            overwrite: 'auto' 
          }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    // Initial setup with delay to ensure DOM is ready
    const timer = setTimeout(setupAnimations, 100);

    // Re-setup on resize
    const onResize = () => setupAnimations();
    window.addEventListener('resize', onResize);

    // Re-setup when fonts load
    if (document.fonts) {
      document.fonts.ready.then(setupAnimations).catch(() => {});
    }

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
    };
  }, []);

  // Handle hover enter
  const handlePillEnter = useCallback((index: number) => {
    const tl = tlRefs.current[index];
    if (!tl) return;
    
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease: gsapConfig.ease,
      overwrite: 'auto'
    });
  }, []);

  // Handle hover leave
  const handlePillLeave = useCallback((index: number) => {
    const tl = tlRefs.current[index];
    if (!tl) return;
    
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(0, {
      duration: 0.2,
      ease: gsapConfig.ease,
      overwrite: 'auto'
    });
  }, []);

  // Toggle mobile menu with GSAP animation
  const toggleMobileMenu = useCallback(() => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;
    const { ease } = gsapConfig;

    // Animate hamburger to X
    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 4, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -4, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    // Animate mobile menu
    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible', display: 'block' });
        gsap.fromTo(menu,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3, ease }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          ease,
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden', display: 'none' });
          }
        });
      }
    }
  }, [isMenuOpen]);

  // Check if path is active
  const isActive = (href: string) => {
    if (pathname === '/') {
      if (href === '/') return activeSection === 'home';
      if (href === '/#about-me') return activeSection === 'about';
      if (href === '/#project') return activeSection === 'project';
      return false;
    }
    // On other pages
    if (href === '/') return false;
    if (href === '/#about-me') return pathname === '/about';
    if (href === '/#project') return pathname.startsWith('/project');
    return pathname.startsWith(href);
  };

  // Ref setter for circles
  const setCircleRef = (index: number) => (el: HTMLSpanElement | null) => {
    circleRefs.current[index] = el;
  };

  return {
    isScrolled,
    isMenuOpen,
    isProjectDropdownOpen,
    setIsMenuOpen,
    setIsProjectDropdownOpen,
    dropdownRef,
    isActive,
    // GSAP related
    navItemsRef,
    hamburgerRef,
    mobileMenuRef,
    handlePillEnter,
    handlePillLeave,
    toggleMobileMenu,
    setCircleRef,
    handleNavClick,
  };
}
