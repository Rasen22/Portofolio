'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/lib/constants';
import { useIsMobile, useScrollDirection } from '@/hooks';
import { cn } from '@/lib/utils';
import GradientText from '@/components/ui/GradientText';

export default function Navbar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const scrollDirection = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent',
        scrollDirection === 'down' && isScrolled && !isMenuOpen
          ? '-translate-y-full'
          : 'translate-y-0'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2"
          aria-label="Go to homepage"
        >
          <motion.div
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-bold text-xl">P</span>
          </motion.div>
          <GradientText className="hidden sm:block font-clash font-bold text-xl">
            Portfolio
          </GradientText>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors duration-200',
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                )}
              >
                {item.label}
                {/* Active indicator - gradient underline */}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                    layoutId="navbar-indicator"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-medium text-sm text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
        >
          Let&apos;s Talk
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="relative z-10 md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <motion.span
              className="w-full h-0.5 bg-white rounded-full origin-left"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 0 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                x: isMenuOpen ? -20 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full origin-left"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? 0 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && isMobile && (
            <motion.div
              className="fixed inset-0 top-16 bg-background/95 backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="container mx-auto px-4 py-8">
                <ul className="space-y-2">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-4 py-4 text-2xl font-clash font-medium rounded-xl transition-all duration-200',
                          isActive(item.href)
                            ? 'text-white bg-white/10'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {isActive(item.href) ? (
                          <GradientText>{item.label}</GradientText>
                        ) : (
                          item.label
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl font-medium text-lg text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Let&apos;s Talk
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
