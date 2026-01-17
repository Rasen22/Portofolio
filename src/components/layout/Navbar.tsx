'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData } from '@/logic/Logic_project';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Project', href: '/project', hasDropdown: true },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
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
          <li
            key={link.name}
            ref={link.hasDropdown ? dropdownRef : null}
            style={{ position: 'relative' }}
            onMouseEnter={() => link.hasDropdown && setIsProjectDropdownOpen(true)}
            onMouseLeave={() => link.hasDropdown && setIsProjectDropdownOpen(false)}
          >
            <Link
              href={link.href}
              style={{
                display: 'block',
                padding: '8px 16px',
                color: isActive(link.href) ? '#FF7A30' : '#E9E3DF',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                borderRadius: '9999px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.href)) {
                  e.currentTarget.style.color = '#FF7A30';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.href)) {
                  e.currentTarget.style.color = '#E9E3DF';
                }
              }}
            >
              {link.name}
            </Link>
            {isActive(link.href) && (
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

            {/* Project Dropdown */}
            {link.hasDropdown && (
              <AnimatePresence>
                {isProjectDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 12px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '380px',
                      backgroundColor: 'rgba(26, 26, 26, 0.98)',
                      backdropFilter: 'blur(16px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(51, 51, 51, 0.5)',
                      padding: '16px',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {/* Dropdown Header */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '16px',
                        paddingBottom: '12px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#E9E3DF', margin: 0 }}>
                        Recent Projects
                      </h4>
                      <Link
                        href="/project"
                        style={{
                          fontSize: '12px',
                          color: '#FF7A30',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                        className="dropdown-view-all"
                      >
                        View All →
                      </Link>
                    </div>

                    {/* Projects Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '12px',
                        maxHeight: '320px',
                        overflowY: 'auto',
                      }}
                    >
                      {projectData.projects.slice(0, 6).map((project) => (
                        <Link
                          key={project.id}
                          href={`/project/${project.id}`}
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                          }}
                          className="dropdown-project-card"
                        >
                          {/* Project Image */}
                          <div
                            style={{
                              position: 'relative',
                              width: '100%',
                              height: '70px',
                              backgroundColor: '#1a1a1a',
                            }}
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                            {/* Status Badge */}
                            <span
                              style={{
                                position: 'absolute',
                                top: '6px',
                                left: '6px',
                                padding: '2px 6px',
                                backgroundColor:
                                  project.status === 'completed'
                                    ? 'rgba(74, 222, 128, 0.9)'
                                    : 'rgba(255, 122, 48, 0.9)',
                                color: '#fff',
                                fontSize: '8px',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.03em',
                                borderRadius: '3px',
                              }}
                            >
                              {project.status === 'completed' ? 'DONE' : 'IN PROGRESS'}
                            </span>
                          </div>

                          {/* Project Info */}
                          <div style={{ padding: '10px' }}>
                            <h5
                              style={{
                                fontSize: '11px',
                                fontWeight: 600,
                                color: '#E9E3DF',
                                margin: '0 0 2px 0',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {project.title}
                            </h5>
                            <p
                              style={{
                                fontSize: '9px',
                                color: 'rgba(233, 227, 223, 0.5)',
                                margin: 0,
                              }}
                            >
                              {project.category}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px',
                    color: isActive(link.href) ? '#FF7A30' : '#E9E3DF',
                    fontSize: '16px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    textAlign: 'center',
                    borderRadius: '8px',
                    backgroundColor: isActive(link.href) ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .dropdown-view-all:hover {
          text-decoration: underline;
        }
        .dropdown-project-card:hover {
          background-color: rgba(255, 122, 48, 0.1) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </nav>
  );
}
