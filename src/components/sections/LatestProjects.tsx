'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { latestProjectsStyles, latestProjectsInlineStyles, latestProjectsAnimations } from '@/styles';
import { latestProjects, calculateCenterIndex, type LatestProject } from '@/logic';

function ProjectCard({
  project,
  index,
  isCenter,
}: {
  project: LatestProject;
  index: number;
  isCenter: boolean;
}) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        className={`${latestProjectsStyles.card.container} ${isCenter ? 'z-10' : 'z-0'}`}
        animate={latestProjectsAnimations.card.getAnimate(isCenter)}
        whileHover={latestProjectsAnimations.card.getHover(isCenter)}
        transition={latestProjectsAnimations.card.transition}
        style={latestProjectsInlineStyles.card.getBoxShadow(isCenter)}
      >
        {/* Border glow */}
        <div
          className={`${latestProjectsStyles.card.borderGlow.wrapper} ${
            isCenter ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          style={latestProjectsInlineStyles.card.borderGradient}
        >
          <div className={latestProjectsStyles.card.borderGlow.inner} />
        </div>

        {/* Image with Ken Burns effect */}
        <div className={latestProjectsStyles.card.imageWrapper}>
          <motion.div
            className={latestProjectsStyles.card.imageContainer}
            animate={latestProjectsAnimations.kenBurns.animate}
            transition={latestProjectsAnimations.kenBurns.transition}
          >
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
  const [centerIndex, setCenterIndex] = useState(2);
  const [isDragging, setIsDragging] = useState(false);

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const newCenter = calculateCenterIndex(scrollLeft, 400, 24, latestProjects.length);
      setCenterIndex(newCenter);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

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

        {/* Horizontal Scroll Container */}
        <div
          ref={containerRef}
          className={latestProjectsStyles.scrollContainer}
          style={latestProjectsInlineStyles.scrollContainer}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          {/* Spacer for centering */}
          <div className={latestProjectsStyles.spacer} />

          {latestProjects.map((project, index) => (
            <div key={project.id} className={latestProjectsStyles.cardWrapper}>
              <ProjectCard
                project={project}
                index={index}
                isCenter={index === centerIndex}
              />
            </div>
          ))}

          {/* Spacer for centering */}
          <div className={latestProjectsStyles.spacer} />
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
              onClick={() => {
                if (containerRef.current) {
                  const cardWidth = 400 + 24;
                  containerRef.current.scrollTo({
                    left: index * cardWidth,
                    behavior: 'smooth',
                  });
                }
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
