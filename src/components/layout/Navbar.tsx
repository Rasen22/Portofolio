'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Project', href: '#project' },
  { name: 'Contact', href: '#contact' },
];

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
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: isScrolled ? '12px 0' : '16px 0',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Desktop Menu */}
      <motion.ul
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          display: 'none',
          alignItems: 'center',
          gap: '4px',
          padding: '6px 8px',
          backgroundColor: 'rgba(26, 26, 26, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(51, 51, 51, 0.5)',
          borderRadius: '9999px',
          listStyle: 'none',
          margin: 0,
        }}
        className="md:!flex"
      >
        {navLinks.map((link) => (
          <li key={link.name} style={{ position: 'relative' }}>
            <a
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              style={{
                display: 'block',
                padding: '8px 16px',
                color: activeLink === link.name ? '#FF7A30' : '#E9E3DF',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                borderRadius: '9999px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (activeLink !== link.name) {
                  e.currentTarget.style.color = '#FF7A30';
                }
              }}
              onMouseLeave={(e) => {
                if (activeLink !== link.name) {
                  e.currentTarget.style.color = '#E9E3DF';
                }
              }}
            >
              {link.name}
            </a>
            {activeLink === link.name && (
              <motion.div
                layoutId="activeUnderline"
                style={{
                  position: 'absolute',
                  bottom: '4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  height: '2px',
                  width: '50%',
                  backgroundColor: 'rgba(255, 122, 48, 0.7)',
                  borderRadius: '9999px',
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </li>
        ))}
      </motion.ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px',
          backgroundColor: 'rgba(26, 26, 26, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(51, 51, 51, 0.5)',
          borderRadius: '9999px',
          cursor: 'pointer',
          color: '#E9E3DF',
        }}
        className="md:!hidden"
      >
        <span
          style={{
            display: 'block',
            width: '20px',
            height: '2px',
            backgroundColor: 'currentColor',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '20px',
            height: '2px',
            backgroundColor: 'currentColor',
            marginTop: '6px',
            transition: 'all 0.3s ease',
            opacity: isMenuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: 'block',
            width: '20px',
            height: '2px',
            backgroundColor: 'currentColor',
            marginTop: '6px',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
          }}
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: '16px',
              right: '16px',
              padding: '16px',
              backgroundColor: 'rgba(26, 26, 26, 0.95)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              border: '1px solid rgba(51, 51, 51, 0.5)',
            }}
            className="md:!hidden"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  style={{
                    display: 'block',
                    padding: '12px',
                    color: activeLink === link.name ? '#FF7A30' : '#E9E3DF',
                    fontSize: '16px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    textAlign: 'center',
                    borderRadius: '8px',
                    backgroundColor: activeLink === link.name ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
