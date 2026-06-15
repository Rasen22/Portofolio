'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData } from '@/logic/Logic_project';
import {
  navLinks,
  dropdownVariants,
  dropdownData,
  useNavbarLogic,
} from '@/logic/Logic_navbar';
import { navbarInlineStyles as styles, navbarGlobalCSS } from '@/styles/Style_navbar';

export default function Navbar() {
  const {
    isScrolled,
    isMenuOpen,
    isProjectDropdownOpen,
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
  } = useNavbarLogic();

  return (
    <nav style={styles.nav(isScrolled)}>
      {/* Desktop Menu */}
      <motion.ul
        ref={navItemsRef}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={styles.desktopMenu}
        className="md:!flex"
      >
        {navLinks.map((link, index) => (
          <li
            key={link.name}
            ref={link.hasDropdown ? dropdownRef : null}
            style={styles.menuItem}
            onMouseEnter={() => {
              handlePillEnter(index);
              if (link.hasDropdown) setIsProjectDropdownOpen(true);
            }}
            onMouseLeave={() => {
              handlePillLeave(index);
              if (link.hasDropdown) setIsProjectDropdownOpen(false);
            }}
          >
            <Link
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={styles.pillLink(isActive(link.href))}
            >
              {/* Hover circle that expands from bottom */}
              <span
                ref={setCircleRef(index)}
                style={styles.hoverCircle}
                aria-hidden="true"
              />
              
              {/* Label stack */}
              <span style={styles.labelStack}>
                <span className="pill-label" style={styles.pillLabel}>
                  {link.name}
                </span>
                <span 
                  className="pill-label-hover" 
                  style={styles.pillLabelHover}
                  aria-hidden="true"
                >
                  {link.name}
                </span>
              </span>

              {/* Active indicator */}
              {isActive(link.href) && (
                <span style={styles.activeIndicator} aria-hidden="true" />
              )}
            </Link>

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

      {/* Mobile Menu Button - GSAP animated */}
      <button
        ref={hamburgerRef}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        style={styles.mobileMenuButton}
        className="md:!hidden"
      >
        <span className="hamburger-line" style={styles.hamburgerLineGsap} />
        <span className="hamburger-line" style={styles.hamburgerLineGsap} />
      </button>

      {/* Mobile Menu - GSAP animated */}
      <div
        ref={mobileMenuRef}
        style={styles.mobileMenu}
        className="md:!hidden"
      >
        <div style={styles.mobileMenuInner}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                toggleMobileMenu();
                handleNavClick(e, link.href);
              }}
              style={styles.mobileMenuLink(isActive(link.href))}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
                e.currentTarget.style.color = '#FF7A30';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0a0a0a';
                e.currentTarget.style.color = isActive(link.href) ? '#FF7A30' : '#E9E3DF';
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{navbarGlobalCSS}</style>
    </nav>
  );
}
