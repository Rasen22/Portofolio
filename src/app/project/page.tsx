'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Footer } from '@/components/layout';
import { projectData, filterProjects, ProjectFilter } from '@/logic/Logic_project';
import { projectStyles as styles } from '@/styles/Style_project';

const filterOptions: { label: string; value: ProjectFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'On-Process', value: 'on-process' },
  { label: 'Completed', value: 'completed' },
];

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const filteredProjects = filterProjects(projectData.projects, activeFilter);

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

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={styles.filterTabs}
            >
              {filterOptions.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  style={{
                    ...styles.filterTab,
                    ...(activeFilter === filter.value ? styles.filterTabActive : {}),
                  }}
                  className="filter-tab"
                >
                  {filter.label}
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
        .filter-tab:hover:not([style*="background-color: #FF7A30"]) {
          border-color: #FF7A30 !important;
          color: #FF7A30 !important;
        }
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
