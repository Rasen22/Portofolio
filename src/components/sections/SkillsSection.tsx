'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillsSectionStyles, skillsSectionAnimations, getProgressGradient } from '@/styles';
import { skills, getSkillIcon, type Skill } from '@/logic';
import { useIsMobile } from '@/hooks';

function SkillCard({ skill, index, isMobile }: { skill: Skill; index: number; isMobile: boolean }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const iconData = getSkillIcon(skill.iconType);

  // Simplified animation for mobile
  const mobileHover = isMobile ? {} : skillsSectionAnimations.card.hover;

  return (
    <motion.div
      ref={ref}
      variants={skillsSectionAnimations.item}
      className={skillsSectionStyles.card.container}
      whileHover={mobileHover}
      transition={skillsSectionAnimations.card.transition}
    >
      {/* Background glow on hover */}
      <div className={skillsSectionStyles.card.hoverOverlay} />

      {/* Content */}
      <div className={skillsSectionStyles.card.content}>
        {/* Icon */}
        <motion.div
          className={skillsSectionStyles.card.icon}
          animate={inView ? skillsSectionAnimations.icon.animate : {}}
          transition={{ ...skillsSectionAnimations.icon.transition, delay: index * 0.1 }}
        >
          <svg 
            className="w-8 h-8" 
            fill="currentColor" 
            viewBox={iconData.viewBox}
            style={{ color: skill.color }}
          >
            <path d={iconData.path} />
          </svg>
        </motion.div>

        {/* Name */}
        <h3 className={skillsSectionStyles.card.name}>{skill.name}</h3>

        {/* Progress bar */}
        <div className={skillsSectionStyles.card.progressBar.container}>
          <motion.div
            className={skillsSectionStyles.card.progressBar.fill}
            style={{ background: getProgressGradient(skill.color) }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
          />
        </div>

        {/* Percentage */}
        <motion.span
          className={skillsSectionStyles.card.percentage}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {skill.level}%
        </motion.span>
      </div>

      {/* Corner accent */}
      <div className={skillsSectionStyles.card.cornerAccent} />
    </motion.div>
  );
}

export default function SkillsSection() {
  const isMobile = useIsMobile();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={skillsSectionStyles.section} id="skills">
      <div className={skillsSectionStyles.container}>
        {/* Section Header */}
        <motion.div
          ref={ref}
          className={skillsSectionStyles.header.container}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={skillsSectionStyles.header.label}>
            What I Do
          </span>
          <h2 className={skillsSectionStyles.header.heading}>
            My{' '}
            <span className={skillsSectionStyles.header.gradientText}>
              Expertise
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className={skillsSectionStyles.grid}
          variants={skillsSectionAnimations.container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isMobile={isMobile} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
