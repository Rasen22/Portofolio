'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { projectData, slideVariants } from '@/logic/Logic_project';
import { projectStyles as styles } from '@/styles/Style_project';
import { SliderNavigation } from '@/components/ui';

// Modal overlay styles
const modalStyles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '24px',
  },
  modalContainer: {
    maxWidth: '900px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    borderRadius: '20px',
    backgroundColor: '#111',
    border: '1px solid rgba(255, 122, 48, 0.3)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 122, 48, 0.15)',
  },
  backButton: {
    position: 'absolute' as const,
    top: '20px',
    left: '20px',
    padding: '12px 24px',
    backgroundColor: 'rgba(255, 122, 48, 0.9)',
    backdropFilter: 'blur(8px)',
    border: 'none',
    borderRadius: '30px',
    color: '#0a0a0a',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 10,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  },
  closeButton: {
    position: 'absolute' as const,
    top: '20px',
    right: '20px',
    width: '44px',
    height: '44px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    color: '#E9E3DF',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default function ProjectSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    
    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
    <>
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

          {/* Project Slider */}
          <motion.div
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
              <SliderNavigation
                currentSlide={currentSlide}
                totalSlides={slidesCount}
                onPrev={handlePrev}
                onNext={handleNext}
                onDotClick={(index) => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
              />
            </motion.div>

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
          .modal-back-btn:hover {
            background-color: #ff8c4a !important;
            transform: scale(1.05);
          }
          .modal-close-btn:hover {
            background-color: rgba(255, 122, 48, 0.3) !important;
            border-color: rgba(255, 122, 48, 0.5) !important;
          }
          .detail-btn-primary:hover {
            background-color: #ff8c4a !important;
          }
          .detail-btn-secondary:hover {
            border-color: #FF7A30 !important;
            color: #FF7A30 !important;
          }
          .detail-btn-visit:hover {
            background-color: rgba(255, 122, 48, 0.15) !important;
            border-color: #FF8C4A !important;
            color: #FF8C4A !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(255, 122, 48, 0.2);
          }
          .tool-item:hover {
            background-color: rgba(255, 122, 48, 0.1) !important;
            transform: translateY(-2px);
          }
          @media (max-width: 1024px) {
            .modal-detail-content {
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

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={modalStyles.overlay}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={modalStyles.modalContainer}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Image Section */}
              <div style={{ position: 'relative' }}>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  style={modalStyles.backButton}
                  className="modal-back-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back
                </motion.button>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  style={modalStyles.closeButton}
                  className="modal-close-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
                <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                  <Image
                    src={selectedProjectData.image}
                    alt={selectedProjectData.title}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(17, 17, 17, 0.8) 0%, transparent 50%)',
                    borderRadius: '20px 20px 0 0',
                  }} />
                </div>
              </div>

              {/* Detail Content */}
              <div style={styles.detailContent} className="modal-detail-content">
                {/* Left Side - Description */}
                <div style={styles.detailLeft}>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{ fontSize: '28px', fontWeight: 700, color: '#E9E3DF', margin: 0, marginBottom: '8px' }}
                  >
                    {selectedProjectData.title}
                  </motion.h3>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    style={{ color: '#FF7A30', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}
                  >
                    {selectedProjectData.category}
                  </motion.span>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={styles.detailDescription}
                  >
                    {selectedProjectData.fullDescription}
                  </motion.p>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    style={styles.detailStats}
                  >
                    {selectedProjectData.stats.map((stat, index) => (
                      <div key={index} style={styles.detailStat}>
                        <span style={styles.detailStatValue}>{stat.value}</span>
                        <span style={styles.detailStatLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={styles.detailButtons}
                  >
                    <Link
                      href={`/project/${selectedProjectData.id}`}
                      style={styles.detailBtnPrimary}
                      className="detail-btn-primary"
                    >
                      {projectData.viewMoreDetail}
                    </Link>
                    {selectedProjectData.websiteLink && (
                      <a
                        href={selectedProjectData.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          ...styles.detailBtnSecondary,
                          borderColor: '#FF7A30',
                          color: '#FF7A30',
                          fontWeight: 600,
                          transition: 'all 0.3s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                        className="detail-btn-visit"
                      >
                        Kunjungi Website ↗
                      </a>
                    )}
                    <Link
                      href="/project"
                      style={styles.detailBtnSecondary}
                      className="detail-btn-secondary"
                    >
                      {projectData.viewMoreProjects}
                    </Link>
                  </motion.div>
                </div>

                {/* Right Side - Tools */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  style={styles.detailRight}
                >
                  <div style={styles.toolsCard}>
                    <h4 style={styles.toolsTitle}>{projectData.toolsTitle}</h4>
                    <div style={styles.toolsGrid}>
                      {selectedProjectData.tools.slice(0, 5).map((tool, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
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
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
