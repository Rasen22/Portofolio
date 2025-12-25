'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GradientText } from '@/components/ui';
import { heroContentStyles, heroContentAnimations } from '@/styles';
import { techStack, heroContent } from '@/logic';

export default function HeroContent() {
  return (
    <motion.div
      className={heroContentStyles.container}
      variants={heroContentAnimations.container}
      initial="hidden"
      animate="visible"
    >
      {/* Greeting */}
      <motion.div variants={heroContentAnimations.item} className={heroContentStyles.greeting.container}>
        <motion.span
          className={heroContentStyles.greeting.text}
          animate={heroContentAnimations.greeting.animate}
          transition={heroContentAnimations.greeting.transition}
        >
          {heroContent.greeting}
        </motion.span>
      </motion.div>

      {/* Name */}
      <motion.h1 variants={heroContentAnimations.item} className={heroContentStyles.heading}>
        Hi, I&apos;m{' '}
        <GradientText className={heroContentStyles.gradientText}>
          {heroContent.name}
        </GradientText>
      </motion.h1>

      {/* Title */}
      <motion.div variants={heroContentAnimations.item} className={heroContentStyles.title.container}>
        <div className={heroContentStyles.title.line} />
        <p className={heroContentStyles.title.text}>
          {heroContent.title}
        </p>
      </motion.div>

      {/* Description */}
      <motion.p variants={heroContentAnimations.item} className={heroContentStyles.description}>
        {heroContent.description}
      </motion.p>

      {/* Buttons */}
      <motion.div variants={heroContentAnimations.item} className={heroContentStyles.buttonsContainer}>
        {/* Download CV Button */}
        <motion.a
          href="/cv.pdf"
          download
          className={heroContentStyles.downloadButton.base}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Download CV"
        >
          <span className={heroContentStyles.downloadButton.content}>
            <svg
              className={heroContentStyles.downloadButton.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {heroContent.downloadButtonText}
          </span>
          <div className={heroContentStyles.downloadButton.hoverOverlay} />
        </motion.a>

        {/* Contact Button with Glow */}
        <Link href="/contact">
          <motion.button
            className={heroContentStyles.contactButton.base}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Contact me"
          >
            {/* Pulse glow effect */}
            <motion.div
              className={heroContentStyles.contactButton.glowOverlay}
              animate={{ boxShadow: heroContentAnimations.contactButtonGlow.boxShadow }}
              transition={heroContentAnimations.contactButtonGlow.transition}
            />
            <span className={heroContentStyles.contactButton.content}>
              {heroContent.contactButtonText}
              <svg
                className={heroContentStyles.contactButton.icon}
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
            </span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Tech Stack Pills */}
      <motion.div variants={heroContentAnimations.item} className={heroContentStyles.techStack.container}>
        <p className={heroContentStyles.techStack.label}>
          {heroContent.techStackLabel}
        </p>
        <div className={heroContentStyles.techStack.pillsContainer}>
          {techStack.map(
            (tech, index) => (
              <motion.span
                key={tech}
                className={heroContentStyles.techStack.pill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
