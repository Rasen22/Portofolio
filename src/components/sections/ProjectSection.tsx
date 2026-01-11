'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectStyles } from '@/styles';
import { projectData, sectionVariants, cardVariants, buttonVariants } from '@/logic/Logic_project';

export default function ProjectSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="experience" className={projectStyles.section}>
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={projectStyles.container}
      >
        {/* Header */}
        <motion.div variants={cardVariants} className={projectStyles.header}>
          <h2 className={projectStyles.title}>
            {projectData.title}{' '}
            <span className={projectStyles.titleAccent}>{projectData.titleAccent}</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className={projectStyles.grid}>
          {projectData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={projectStyles.card}
              whileHover={{ y: -5 }}
            >
              <div className={projectStyles.cardImage}>
                <span className={projectStyles.cardImageText}>Gambar Projek</span>
              </div>
              <div className={projectStyles.cardContent}>
                <h3 className={projectStyles.cardTitle}>{project.title}</h3>
                <p className={projectStyles.cardDescription}>{project.description}</p>
                <a href="#" className={projectStyles.cardLink}>{project.link}</a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div variants={buttonVariants} className={projectStyles.loadMoreWrapper}>
          <button className={projectStyles.loadMoreBtn}>
            {projectData.loadMore}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
