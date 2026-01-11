'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { projectData } from '@/logic/Logic_project';

export default function ProjectSection() {
  const [visibleCount, setVisibleCount] = useState(2);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const visibleProjects = projectData.projects.slice(0, visibleCount);
  const hasMore = visibleCount < projectData.projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, projectData.projects.length));
  };

  return (
    <section
      id="project"
      ref={ref}
      style={{
        padding: '80px 24px',
        backgroundColor: '#0a0a0a',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          style={{
            marginBottom: '48px',
          }}
        >
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: '#E9E3DF',
              margin: 0,
            }}
          >
            {projectData.title}{' '}
            <span style={{ color: '#FF7A30' }}>{projectData.titleAccent}</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
          }}
          className="projects-grid"
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                style={{
                  backgroundColor: '#111',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #222',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Project Image */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    backgroundColor: '#1a1a1a',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Placeholder gradient if no image */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, #1a3a5c 0%, #0d2840 100%)',
                      zIndex: -1,
                    }}
                  />
                </div>

                {/* Project Content */}
                <div
                  style={{
                    padding: '24px',
                  }}
                >
                  {/* Title Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#E9E3DF',
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        color: '#E9E3DF',
                        fontSize: '18px',
                      }}
                    >
                      →
                    </span>
                  </div>

                  {/* Category */}
                  <span
                    style={{
                      display: 'inline-block',
                      color: '#FF7A30',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '12px',
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Description */}
                  <p
                    style={{
                      color: 'rgba(233, 227, 223, 0.6)',
                      fontSize: '13px',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '48px',
            }}
          >
            <button
              onClick={handleLoadMore}
              style={{
                padding: '16px 32px',
                backgroundColor: '#FF7A30',
                color: '#0a0a0a',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff8c4a';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF7A30';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {projectData.loadMore}
            </button>
          </motion.div>
        )}
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
