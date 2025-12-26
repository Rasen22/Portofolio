'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useMotionValue, useSpring, PanInfo } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { latestProjectsStyles, latestProjectsAnimations } from '@/styles';
import { latestProjects, calculateCenterIndex, statusColors, type LatestProject, type ProjectStatus } from '@/logic';
import { useIsMobile } from '@/hooks';

function ProjectCard({
  project,
  index,
  isCenter,
  isMobile,
}: {
  project: LatestProject;
  index: number;
  isCenter: boolean;
  isMobile: boolean;
}) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  // Get status color
  const statusColor = statusColors[project.status];

  // Handle card click with visual feedback
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPressed(true);
    
    // Visual feedback then navigate
    setTimeout(() => {
      router.push(`/projects/${project.slug}`);
    }, 150);
  };

  // Card entrance animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Ken Burns animation for image
  const kenBurnsVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  // Determine if dark overlay should show (disabled on mobile to avoid tap conflicts)
  const showDarkOverlay = !isMobile && isHovered;

  return (
    <motion.div
      className="cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      onClick={handleClick}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={() => isMobile && setIsHovered(true)}
      onTouchEnd={() => isMobile && setIsHovered(false)}
    >
      <motion.div
        className="relative w-[320px] md:w-[400px] h-[280px] md:h-[350px] rounded-xl overflow-hidden group"
        style={{
          background: '#141414',
          backdropFilter: 'blur(4px)',
          borderRadius: '12px',
        }}
        animate={{
          scale: isPressed ? 0.98 : isHovered ? 1.03 : 1,
          borderWidth: isHovered ? '2px' : '1px',
          borderStyle: 'solid',
          borderColor: isPressed ? '#ffffff' : statusColor.border,
          boxShadow: isHovered 
            ? `0 0 20px ${statusColor.border}40, 0 0 40px ${statusColor.border}20` 
            : `0 0 10px ${statusColor.border}20`,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {/* Image Container with Ken Burns effect */}
        <div className="absolute inset-0 rounded-xl overflow-hidden" style={{ borderRadius: '12px' }}>
          <motion.div
            className="w-full h-full relative"
            variants={!isMobile ? kenBurnsVariants : undefined}
            animate={!isMobile ? 'animate' : undefined}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 320px, 400px"
              style={{ borderRadius: '12px' }}
            />
            
            {/* Gradient overlay - always visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />
            
            {/* Dark overlay on hover - disabled on mobile */}
            <motion.div
              className="absolute inset-0 bg-black pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: showDarkOverlay ? 0.7 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </div>

        {/* Status Label - Top Left */}
        <div 
          className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white"
          style={{
            background: statusColor.bg,
            border: `1px solid ${statusColor.border}`,
          }}
        >
          {project.status}
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
          {/* Project Name with Gradient Text */}
          <motion.h3 
            className="text-[1.2rem] font-bold mb-2"
            style={{
              background: 'linear-gradient(90deg, #00f3ff, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: isHovered ? '100% 0' : '0% 0',
            }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Category */}
          <p className="text-[#B0B0B0] text-sm mb-3">
            {project.category}
          </p>

          {/* Description */}
          <p className="text-gray-400 text-sm line-clamp-2">
            {project.description}
          </p>

          {/* Arrow indicator - show on hover (desktop only) */}
          {!isMobile && (
            <motion.div
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: statusColor.bg }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -10,
              }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="w-5 h-5"
                style={{ color: statusColor.text }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LatestProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useIsMobile();
  
  // Motion values for smooth drag
  const dragX = useMotionValue(0);
  const springX = useSpring(dragX, { stiffness: 300, damping: 30 });

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  // Scroll to specific card
  const scrollToCard = useCallback((index: number) => {
    if (containerRef.current) {
      const cardWidth = isMobile ? 320 + 24 : 400 + 24; // card width + gap
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [isMobile]);

  // Navigate left/right
  const navigateLeft = useCallback(() => {
    const newIndex = Math.max(0, centerIndex - 1);
    scrollToCard(newIndex);
  }, [centerIndex, scrollToCard]);

  const navigateRight = useCallback(() => {
    const newIndex = Math.min(latestProjects.length - 1, centerIndex + 1);
    scrollToCard(newIndex);
  }, [centerIndex, scrollToCard]);

  // Handle drag/swipe gesture
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const threshold = isMobile ? 30 : 50; // Lower threshold for mobile
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    // Momentum-based scrolling
    if (Math.abs(velocity) > 500 || Math.abs(offset) > threshold) {
      if (velocity > 0 || offset > threshold) {
        navigateLeft();
      } else {
        navigateRight();
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = isMobile ? 320 + 24 : 400 + 24;
      const newCenter = calculateCenterIndex(scrollLeft, cardWidth - 24, 24, latestProjects.length);
      setCenterIndex(Math.max(0, newCenter - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section className={latestProjectsStyles.section} id="projects">
      <div className={latestProjectsStyles.container}>
        {/* Section Header */}
        <motion.div
          className={latestProjectsStyles.header.wrapper}
          initial={latestProjectsAnimations.header.initial}
          whileInView={latestProjectsAnimations.header.whileInView}
          viewport={latestProjectsAnimations.header.viewport}
          transition={latestProjectsAnimations.header.transition}
        >
          <div>
            <span className={latestProjectsStyles.header.label}>
              Portfolio
            </span>
            <h2 className={latestProjectsStyles.header.heading}>
              Latest{' '}
              <span className={latestProjectsStyles.header.gradientText}>
                Projects
              </span>
            </h2>
          </div>

          <Link
            href="/projects"
            className={latestProjectsStyles.header.viewAllLink}
          >
            View All Projects
            <svg
              className={latestProjectsStyles.header.viewAllIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Scroll Progress */}
        <div className={latestProjectsStyles.progressBar.container}>
          <motion.div
            className={latestProjectsStyles.progressBar.fill}
            style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
          />
        </div>

        {/* Carousel Container with Navigation */}
        <div className="relative">
          {/* Left Gradient Indicator */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #0A0A0A 0%, transparent 100%)',
              opacity: centerIndex > 0 ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />
          
          {/* Right Gradient Indicator */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, #0A0A0A 0%, transparent 100%)',
              opacity: centerIndex < latestProjects.length - 1 ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />

          {/* Left Navigation Arrow */}
          <button
            onClick={navigateLeft}
            disabled={centerIndex === 0}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={navigateRight}
            disabled={centerIndex === latestProjects.length - 1}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Horizontal Scroll Container with Drag Support */}
          <motion.div
            ref={containerRef}
            className={`${latestProjectsStyles.scrollContainer} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            drag={isMobile ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {/* Spacer for centering */}
            <div className={latestProjectsStyles.spacer} />

            {latestProjects.map((project, index) => (
              <div key={project.id} className={latestProjectsStyles.cardWrapper}>
                <ProjectCard
                  project={project}
                  index={index}
                  isCenter={index === centerIndex}
                  isMobile={isMobile}
                />
              </div>
            ))}

            {/* Spacer for centering */}
            <div className={latestProjectsStyles.spacer} />
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className={latestProjectsStyles.dots.container}>
          {latestProjects.map((_, index) => (
            <button
              key={index}
              className={`${latestProjectsStyles.dots.dot} ${
                index === centerIndex
                  ? latestProjectsStyles.dots.active
                  : latestProjectsStyles.dots.inactive
              }`}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
