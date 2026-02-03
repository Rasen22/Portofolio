'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Navbar, Footer } from '@/components/layout';
import { projectData, filterProjects, ProjectFilter } from '@/logic/Logic_project';
import { projectStyles as styles } from '@/styles/Style_project';

const filterOptions: { label: string; value: ProjectFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'On-Process', value: 'on-process' },
  { label: 'Completed', value: 'completed' },
];

// GSAP Animation Configuration
const gsapConfig = {
  ease: 'power3.out',
  accentColor: '#FF7A30',
};

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const filteredProjects = filterProjects(projectData.projects, activeFilter);

  // GSAP Refs for filter buttons
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const filterTabsRef = useRef<HTMLDivElement | null>(null);

  // GSAP Circle Animation Setup for filter buttons
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
        const label = pill.querySelector<HTMLElement>('.filter-label');
        const hoverLabel = pill.querySelector<HTMLElement>('.filter-label-hover');

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
    // Don't animate active filter
    if (filterOptions[index].value === activeFilter) return;
    
    const tl = tlRefs.current[index];
    if (!tl) return;
    
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease: gsapConfig.ease,
      overwrite: 'auto'
    });
  }, [activeFilter]);

  // Handle hover leave
  const handlePillLeave = useCallback((index: number) => {
    // Don't animate active filter
    if (filterOptions[index].value === activeFilter) return;
    
    const tl = tlRefs.current[index];
    if (!tl) return;
    
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(0, {
      duration: 0.2,
      ease: gsapConfig.ease,
      overwrite: 'auto'
    });
  }, [activeFilter]);

  // Ref setter for circles
  const setCircleRef = (index: number) => (el: HTMLSpanElement | null) => {
    circleRefs.current[index] = el;
  };

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
        <section style={styles.projectsPageSection}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={styles.container}
          >
            {/* Page Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={styles.projectsPageTitle}
            >
              MY <span style={styles.projectsPageTitleAccent}>PROJECTS</span>
            </motion.h1>

            {/* Filter Tabs - Navbar style */}
            <motion.div
              ref={filterTabsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={styles.filterTabs}
            >
              {filterOptions.map((filter, index) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  onMouseEnter={() => handlePillEnter(index)}
                  onMouseLeave={() => handlePillLeave(index)}
                  style={{
                    ...styles.filterTab,
                    ...(activeFilter === filter.value ? styles.filterTabActive : {}),
                  }}
                  className="filter-tab"
                >
                  {/* Hover circle that expands from bottom */}
                  {activeFilter !== filter.value && (
                    <span
                      ref={setCircleRef(index)}
                      style={styles.filterTabHoverCircle}
                      aria-hidden="true"
                    />
                  )}
                  
                  {/* Label stack */}
                  <span style={styles.filterTabLabelStack}>
                    <span className="filter-label" style={styles.filterTabLabel}>
                      {filter.label}
                    </span>
                    {activeFilter !== filter.value && (
                      <span 
                        className="filter-label-hover" 
                        style={styles.filterTabLabelHover}
                        aria-hidden="true"
                      >
                        {filter.label}
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={styles.projectsGrid}
              className="my-projects-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                  >
                    <Link
                      href={`/project/${project.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={styles.projectCard} className="project-card-item">
                        {/* Image Wrapper */}
                        <div style={styles.projectCardImageWrapper}>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                          {/* Status Badge */}
                          <span
                            style={{
                              ...styles.projectCardStatusBadge,
                              ...(project.status === 'completed'
                                ? styles.projectCardStatusDone
                                : {}),
                            }}
                          >
                            {project.status === 'completed' ? 'DONE' : 'IN PROGRESS'}
                          </span>
                        </div>

                        {/* Content */}
                        <div style={styles.projectCardContent}>
                          <h3 style={styles.projectCardTitle}>{project.title}</h3>
                          <p style={styles.projectCardCategory}>{project.category}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />

      <style jsx global>{`
        .project-card-item:hover {
          border-color: rgba(255, 122, 48, 0.3) !important;
        }
        @media (max-width: 1024px) {
          .my-projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .my-projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
