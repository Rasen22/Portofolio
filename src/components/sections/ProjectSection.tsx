'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { projectData, slideVariants } from '@/logic/Logic_project';
import { projectStyles as styles } from '@/styles/Style_project';

export default function ProjectSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get visible projects (2 at a time for slider)
  const slidesCount = Math.ceil(projectData.projects.length / 2);
  const visibleProjects = projectData.projects.slice(currentSlide * 2, currentSlide * 2 + 2);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  }, [slidesCount]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  }, [slidesCount]);

  // Touch/Swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Mouse drag handling for touchpad
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setIsDragging(false);
  };

  // Wheel handling for touchpad scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let wheelTimeout: NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          if (e.deltaX > 30) {
            handleNext();
          } else if (e.deltaX < -30) {
            handlePrev();
          }
        }, 50);
      }
    };

    slider.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      slider.removeEventListener('wheel', handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [handleNext, handlePrev]);

  const selectedProjectData = selectedProject 
    ? projectData.projects.find(p => p.id === selectedProject)
    : null;

  return (
    <section id="project" ref={ref} style={styles.section}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.container}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          style={styles.header}
        >
          <h2 style={styles.title}>
            {projectData.title}{' '}
            <span style={styles.titleAccent}>{projectData.titleAccent}</span>
          </h2>
        </motion.div>

        {/* Project Slider or Detail View */}
        <AnimatePresence mode="wait">
          {selectedProject && selectedProjectData ? (
            // Detail View
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={styles.detailCard}
            >
              {/* Top Image Section */}
              <div style={styles.detailTop}>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={styles.detailBackButton}
                  className="detail-back-btn"
                >
                  ← Back
                </button>
                <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image
                    src={selectedProjectData.image}
                    alt={selectedProjectData.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Detail Content */}
              <div style={styles.detailContent} className="detail-content">
                {/* Left Side - Description */}
                <div style={styles.detailLeft}>
                  <h4 style={styles.detailTitle}>{projectData.detailTitle}</h4>
                  <p style={styles.detailDescription}>
                    {selectedProjectData.fullDescription}
                  </p>

                  {/* Stats */}
                  <div style={styles.detailStats}>
                    {selectedProjectData.stats.map((stat, index) => (
                      <div key={index} style={styles.detailStat}>
                        <span style={styles.detailStatValue}>{stat.value}</span>
                        <span style={styles.detailStatLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={styles.detailButtons}>
                    <Link
                      href={`/project/${selectedProjectData.id}`}
                      style={styles.detailBtnPrimary}
                      className="detail-btn-primary"
                    >
                      {projectData.viewMoreDetail}
                    </Link>
                    <Link
                      href="/project"
                      style={styles.detailBtnSecondary}
                      className="detail-btn-secondary"
                    >
                      {projectData.viewMoreProjects}
                    </Link>
                  </div>
                </div>

                {/* Right Side - Tools */}
                <div style={styles.detailRight}>
                  <div style={styles.toolsCard}>
                    <h4 style={styles.toolsTitle}>{projectData.toolsTitle}</h4>
                    <div style={styles.toolsGrid}>
                      {selectedProjectData.tools.slice(0, 5).map((tool, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          style={styles.toolItem}
                          className="tool-item"
                        >
                          <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={32}
                            height={32}
                            style={styles.toolIcon}
                          />
                        </motion.div>
                      ))}
                      {selectedProjectData.tools.length > 5 && (
                        <div style={styles.toolMore}>...</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            // Slider View
            <motion.div
              key="slider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Slider Container */}
              <div
                ref={sliderRef}
                style={styles.sliderContainer}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={() => setIsDragging(false)}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '32px',
                    }}
                    className="projects-grid"
                  >
                    {visibleProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        whileHover={{ y: -8 }}
                        onClick={() => setSelectedProject(project.id)}
                        style={styles.card}
                        className="project-card"
                      >
                        {/* Project Image */}
                        <div style={styles.cardImage}>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>

                        {/* Project Content */}
                        <div style={styles.cardContent}>
                          <div style={styles.cardTitleRow}>
                            <h3 style={styles.cardTitle}>{project.title}</h3>
                            <span style={styles.cardArrow}>→</span>
                          </div>
                          <span style={styles.cardCategory}>{project.category}</span>
                          <p style={styles.cardDescription}>{project.shortDescription}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Navigation */}
              <div style={styles.sliderNavigation}>
                <button
                  onClick={handlePrev}
                  style={styles.sliderButton}
                  className="slider-btn"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <div style={styles.sliderDots}>
                  {Array.from({ length: slidesCount }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentSlide ? 1 : -1);
                        setCurrentSlide(index);
                      }}
                      style={{
                        ...styles.sliderDot,
                        ...(index === currentSlide ? styles.sliderDotActive : {}),
                      }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  style={styles.sliderButton}
                  className="slider-btn"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={styles.loadMoreWrapper}
        >
          <Link href="/project" style={styles.loadMoreBtn} className="load-more-btn">
            {projectData.loadMore}
          </Link>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .project-card {
          cursor: pointer;
        }
        .project-card:hover {
          border-color: rgba(255, 122, 48, 0.3) !important;
        }
        .slider-btn:hover {
          background-color: #FF7A30 !important;
          color: #0a0a0a !important;
        }
        .load-more-btn:hover {
          background-color: #ff8c4a !important;
          transform: scale(1.05);
        }
        .detail-back-btn:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }
        .detail-btn-primary:hover {
          background-color: #ff8c4a !important;
        }
        .detail-btn-secondary:hover {
          border-color: #FF7A30 !important;
          color: #FF7A30 !important;
        }
        .tool-item:hover {
          background-color: rgba(255, 122, 48, 0.1) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .detail-content {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
