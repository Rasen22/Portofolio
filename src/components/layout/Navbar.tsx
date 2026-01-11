'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarStyles } from '@/styles';
import { navLinks, navVariants, menuItemVariants } from '@/logic';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`${navbarStyles.nav} ${isScrolled ? navbarStyles.navScrolled : navbarStyles.navTop}`}
    >
      <div className={navbarStyles.container}>
        <div className={navbarStyles.inner}>
          {/* Desktop Menu */}
          <ul className={navbarStyles.desktopMenu}>
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                custom={index}
                variants={menuItemVariants}
                className={navbarStyles.menuItem}
              >
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`${navbarStyles.menuLink} ${activeLink === link.name ? navbarStyles.menuLinkActive : ''}`}
                >
                  {link.name}
                </a>
                {activeLink === link.name && (
                  <motion.div
                    layoutId="activeUnderline"
                    className={navbarStyles.activeUnderline}
                  />
                )}
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={navbarStyles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${navbarStyles.hamburgerLine} ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`${navbarStyles.hamburgerLine} mt-1.5 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`${navbarStyles.hamburgerLine} mt-1.5 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={navbarStyles.mobileMenu}
          >
            <div className={navbarStyles.mobileMenuInner}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`${navbarStyles.mobileMenuLink} ${activeLink === link.name ? navbarStyles.mobileMenuLinkActive : ''}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
