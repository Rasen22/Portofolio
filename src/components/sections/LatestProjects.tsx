'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { latestProjectsStyles, latestProjectsInlineStyles, latestProjectsAnimations } from '@/styles';
import { latestProjects, calculateCenterIndex, type LatestProject } from '@/logic';
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
  // Simplified animations for mobile
  const cardAnimate = isMobile ? {} : latestProjectsAnimations.card.getAnimate(isCenter);
  const cardHover = isMobile ? {} : latestProjectsAnimations.card.getHover(isCenter);
  const kenBurnsAnimate = isMobile ? {} : latestProjectsAnimations.kenBurns.animate;

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        className={`${latestProjectsStyles.card.container} ${isCenter ? 'z-10' : 'z-0'}`}
        animate={cardAnimate}
        whileHover={cardHover}
        transition={latestProjectsAnimations.card.transition}
        style={isMobile ? {} : latestProjectsInlineStyles.card.getBoxShadow(isCenter)}
      >
        {/* Border glow - hide on mobile */}
        {!isMobile && (
          <div
            className={`${latestProjectsStyles.card.borderGlow.wrapper} ${
              isCenter ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
            style={latestProjectsInlineStyles.card.borderGradient}
          >
            <div className={latestProjectsStyles.card.borderGlow.inner} />
          </div>
        )}

        {/* Image with Ken Burns effect */}
        <div className={latestProjectsStyles.card.imageWrapper}>
          <motion.div
            className={latestProjectsStyles.card.imageContainer}
            animate={kenBurnsAnimate}
            transition={latestProjectsAnimations.kenBurns.transition}
          >
            {/* Project Image */}
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 320px, 400px"
            />
            <div className={latestProjectsStyles.card.imageOverlay.gradient} />
            <div className={latestProjectsStyles.card.imageOverlay.bottom} />
          </motion.div>
        </div>

        {/* Content overlay */}
        <div className={latestProjectsStyles.card.content.wrapper}>
          {/* Category badge */}
          <span className={latestProjectsStyles.card.content.badge}>
            {project.category}
          </span>

          {/* Title */}
          <h3 className={latestProjectsStyles.card.content.title}>
            {project.title}
          </h3>

          {/* Description */}
          <p className={latestProjectsStyles.card.content.description}>
            {project.description}
          </p>

          {/* Arrow indicator */}
          <motion.div
            className={latestProjectsStyles.card.arrow.container}
            initial={latestProjectsAnimations.arrow.initial}
            whileHover={latestProjectsAnimations.arrow.hover}
            transition={latestProjectsAnimations.arrow.transition}
          >
            <svg
              className={latestProjectsStyles.card.arrow.icon}
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
        </div>
      </motion.div>
    </Link>
  );
}

export default function LatestProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const isMobile = useIsMobile();

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

          {/* Horizontal Scroll Container */}
          <div
            ref={containerRef}
            className={latestProjectsStyles.scrollContainer}
            style={{
              ...latestProjectsInlineStyles.scrollContainer,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
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
          </div>
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
