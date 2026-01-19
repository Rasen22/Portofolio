'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData } from '@/logic/Logic_project';
import {
  navLinks,
  dropdownVariants,
  mobileMenuVariants,
  dropdownData,
  useNavbarLogic,
} from '@/logic/Logic_navbar';
import { navbarInlineStyles as styles, navbarGlobalCSS } from '@/styles/Style_navbar';

export default function Navbar() {
  const {
    isScrolled,
    isMenuOpen,
    isProjectDropdownOpen,
    setIsMenuOpen,
    setIsProjectDropdownOpen,
    dropdownRef,
    isActive,
  } = useNavbarLogic();

  return (
    <nav style={styles.nav(isScrolled)}>
      {/* Desktop Menu */}
      <motion.ul
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={styles.desktopMenu}
        className="md:!flex"
      >
        {navLinks.map((link) => (
          <li
            key={link.name}
            ref={link.hasDropdown ? dropdownRef : null}
            style={styles.menuItem}
            onMouseEnter={() => link.hasDropdown && setIsProjectDropdownOpen(true)}
            onMouseLeave={() => link.hasDropdown && setIsProjectDropdownOpen(false)}
          >
            <Link
              href={link.href}
              style={styles.menuLink(isActive(link.href))}
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
                style={styles.activeUnderline}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}

            {/* Project Dropdown */}
            {link.hasDropdown && (
              <AnimatePresence>
                {isProjectDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={styles.dropdown}
                  >
                    {/* Dropdown Header */}
                    <div style={styles.dropdownHeader}>
                      <h4 style={styles.dropdownTitle}>
                        {dropdownData.title}
                      </h4>
                      <Link
                        href="/project"
                        style={styles.dropdownViewAll}
                        className="dropdown-view-all"
                      >
                        {dropdownData.viewAllText}
                      </Link>
                    </div>

                    {/* Projects Grid */}
                    <div style={styles.dropdownGrid}>
                      {projectData.projects.slice(0, dropdownData.maxProjects).map((project) => (
                        <Link
                          key={project.id}
                          href={`/project/${project.id}`}
                          style={styles.dropdownProjectCard}
                          className="dropdown-project-card"
                        >
                          {/* Project Image */}
                          <div style={styles.dropdownProjectImage}>
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                            {/* Status Badge */}
                            <span style={styles.dropdownProjectStatus(project.status)}>
                              {project.status === 'completed' ? 'DONE' : 'IN PROGRESS'}
                            </span>
                          </div>

                          {/* Project Info */}
                          <div style={styles.dropdownProjectInfo}>
                            <h5 style={styles.dropdownProjectTitle}>
                              {project.title}
                            </h5>
                            <p style={styles.dropdownProjectCategory}>
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
        style={styles.mobileMenuButton}
        className="md:!hidden"
      >
        <span style={styles.hamburgerLine(isMenuOpen, 'top')} />
        <span style={styles.hamburgerLine(isMenuOpen, 'middle')} />
        <span style={styles.hamburgerLine(isMenuOpen, 'bottom')} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={styles.mobileMenu}
            className="md:!hidden"
          >
            <div style={styles.mobileMenuInner}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={styles.mobileMenuLink(isActive(link.href))}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{navbarGlobalCSS}</style>
    </nav>
  );
}
