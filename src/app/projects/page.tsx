'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projectsStyles } from '@/styles';
import {
  categories,
  filterProjects,
  type Project,
  type Category,
} from '@/logic';

// Category Chip Component
function CategoryChip({
  category,
  isActive,
  onClick,
}: {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}) {
  const colorStyles = projectsStyles.categoryChip.colors[category.color];
  const chipClass = `${projectsStyles.categoryChip.base} ${
    isActive ? colorStyles.active : colorStyles.inactive
  }`;

  return (
    <motion.button
      className={chipClass}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {category.label}
    </motion.button>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.div
          className={projectsStyles.card.container}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{
            borderColor: 'rgba(0, 243, 255, 0.5)',
            boxShadow: '0 0 30px rgba(0, 243, 255, 0.2)',
          }}
        >
          {/* Thumbnail */}
          <div className={projectsStyles.card.thumbnail.wrapper}>
            <motion.div
              className={projectsStyles.card.thumbnail.gradient}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className={projectsStyles.card.thumbnail.overlay} />
            
            {/* Featured badge */}
            {project.featured && (
              <div className={projectsStyles.card.featuredBadge}>
                Featured
              </div>
            )}

            {/* Year badge */}
            <div className={projectsStyles.card.yearBadge}>
              {project.year}
            </div>
          </div>

          {/* Content */}
          <div className={projectsStyles.card.content}>
            <h3 className={projectsStyles.card.title}>
              {project.title}
            </h3>
            <p className={projectsStyles.card.description}>
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className={projectsStyles.card.techContainer}>
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className={projectsStyles.card.techBadge}>
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className={projectsStyles.card.techMore}>
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Hover overlay arrow */}
          <motion.div
            className={projectsStyles.card.arrowButton}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg className={projectsStyles.card.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = filterProjects(activeCategory);

  return (
    <div className={projectsStyles.container}>
      {/* Background Effects */}
      <div className={projectsStyles.background.orbPurple} />
      <div className={projectsStyles.background.orbCyan} />

      <div className={projectsStyles.contentContainer}>
        {/* Header */}
        <motion.div
          className={projectsStyles.header.container}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={projectsStyles.header.label}>
            Portfolio
          </span>
          <h1 className={projectsStyles.header.heading}>
            Selected{' '}
            <span className={projectsStyles.header.gradientText}>
              Works
            </span>
          </h1>
          <p className={projectsStyles.header.description}>
            A curated collection of blockchain applications built for the future web.
            Exploring the boundaries of DeFi, NFTs, and DAO governance.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className={projectsStyles.filters.container}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <CategoryChip
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className={projectsStyles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            className={projectsStyles.emptyState.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className={projectsStyles.emptyState.text}>
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Footer CTA */}
        <motion.div
          className={projectsStyles.footerCta.container}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className={projectsStyles.footerCta.text}>
            Interested in working together?
          </p>
          <Link href="/contact">
            <motion.button
              className={projectsStyles.footerCta.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk
              <svg className={projectsStyles.footerCta.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
