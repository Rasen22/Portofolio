'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { profileStyles } from '@/styles';
import {
  experiences,
  stats,
  socialLinks,
  profileBadges,
  profileAnimations,
  getSocialIcon,
  getBadgeIcon,
  type Experience,
} from '@/logic';

// Timeline Item Component
function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: Experience;
  index: number;
  isLast: boolean;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className={profileStyles.timelineItem.row}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline line and dot */}
      <div className={profileStyles.timelineItem.lineContainer}>
        {/* Glowing dot */}
        <motion.div
          className={profileStyles.timelineItem.dot}
          animate={inView ? profileAnimations.dotPulse : {}}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        />
        {/* Line */}
        {!isLast && (
          <motion.div
            className={profileStyles.timelineItem.line}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      {/* Content */}
      <div className={profileStyles.timelineItem.content}>
        <motion.div
          className={profileStyles.timelineItem.card}
          whileHover={{ scale: 1.02, x: 10 }}
        >
          <div className={profileStyles.timelineItem.cardHeader}>
            <div>
              <h3 className={profileStyles.timelineItem.role}>
                {experience.role}
              </h3>
              <p className={profileStyles.timelineItem.company}>{experience.company}</p>
            </div>
            <span className={profileStyles.timelineItem.period}>
              {experience.period}
            </span>
          </div>
          <p className={profileStyles.timelineItem.description}>{experience.description}</p>
          <div className={profileStyles.timelineItem.techContainer}>
            {experience.technologies.map((tech) => (
              <span key={tech} className={profileStyles.timelineItem.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Profile Photo Component with Floating Effect
function ProfilePhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <motion.div ref={ref} className="relative" style={{ y, rotate }}>
      {/* Glow border */}
      <motion.div
        className={profileStyles.profilePhoto.glowBorder}
        animate={profileAnimations.photoGlow}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        style={{ backgroundSize: '200% 200%' }}
      />
      
      {/* Shadow */}
      <motion.div
        className={profileStyles.profilePhoto.shadow}
        animate={profileAnimations.photoShadow}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Photo container */}
      <div className={profileStyles.profilePhoto.photoContainer}>
        {/* Placeholder gradient - replace with actual image */}
        <div className={profileStyles.profilePhoto.photoPlaceholder}>
          {/* User icon SVG instead of emoji */}
          <svg className="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      </div>

      {/* Floating badges */}
      {profileBadges.map((badge, index) => (
        <motion.div
          key={badge.label}
          className={`absolute ${profileStyles.badgePositions[badge.positionKey]} ${profileStyles.profilePhoto.floatingBadge}`}
          animate={profileAnimations.floatingBadge}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d={getBadgeIcon(badge.iconType)} />
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Stats Component
function Stats() {
  return (
    <div className={profileStyles.stats.grid}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className={profileStyles.stats.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, borderColor: 'rgba(0, 243, 255, 0.3)' }}
        >
          <motion.span
            className={profileStyles.stats.value}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
          >
            {stat.value}
          </motion.span>
          <span className={profileStyles.stats.label}>{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className={profileStyles.container}>
      {/* Background Effects */}
      <div className={profileStyles.background.orbCyan} />
      <div className={profileStyles.background.orbPurple} />

      <div className={profileStyles.contentContainer}>
        {/* Header Section */}
        <section className={profileStyles.header.section}>
          <div className={profileStyles.header.grid}>
            {/* Photo */}
            <motion.div
              className={profileStyles.header.photoContainer}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <ProfilePhoto />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className={profileStyles.bio.label}>
                About Me
              </span>
              <h1 className={profileStyles.bio.heading}>
                I&apos;m{' '}
                <span className={profileStyles.bio.gradientName}>
                  Farhan Rasendriya 
                </span>
              </h1>
              <p className={profileStyles.bio.paragraph}>
                A passionate UI/UX Designer and Full Stack Developer with over 5 years of
                experience crafting digital experiences. I specialize in building
                decentralized applications and creating intuitive interfaces that bridge
                the gap between complex blockchain technology and everyday users.
              </p>
              <p className={profileStyles.bio.paragraphLast}>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge through blog
                posts and community meetups.
              </p>
              
              {/* Social Links */}
              <div className={profileStyles.bio.socialContainer}>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={profileStyles.bio.socialLink}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={getSocialIcon(social.iconType)} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={profileStyles.stats.section}>
          <Stats />
        </section>

        {/* Experience Timeline */}
        <section>
          <motion.div
            className={profileStyles.timeline.headerContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={profileStyles.timeline.label}>
              My Journey
            </span>
            <h2 className={profileStyles.timeline.heading}>
              Work{' '}
              <span className={profileStyles.timeline.gradientText}>
                Experience
              </span>
            </h2>
          </motion.div>

          <div className={profileStyles.timeline.container}>
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
