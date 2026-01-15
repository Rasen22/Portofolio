'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import {
  aboutMeData,
  sectionVariants,
  imageVariants,
  contentVariants,
  titleVariants,
  buttonVariants,
} from '@/logic/Logic_aboutMe';
import { aboutMeStyles as styles } from '@/styles/Style_aboutMe';

export default function AboutMeSection() {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about-me" style={styles.section}>
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={styles.container}
        className="about-me-container"
      >
        {/* Image Side */}
        <motion.div
          variants={imageVariants}
          style={styles.imageWrapper}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <div style={styles.imageContainer}>
            <Image
              src={aboutMeData.image}
              alt="Profile"
              fill
              style={{
                ...styles.image,
                ...(isImageHovered ? styles.imageHover : {}),
              }}
              priority
            />
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div variants={contentVariants} style={styles.content}>
          {/* Title Area */}
          <motion.div variants={titleVariants} style={styles.titleArea}>
            <h2 style={styles.title}>{aboutMeData.title}</h2>
            <span style={styles.badge}>{aboutMeData.badge}</span>
          </motion.div>

          {/* Description */}
          <motion.p variants={titleVariants} style={styles.description}>
            {aboutMeData.description}
          </motion.p>

          {/* Buttons */}
          <div style={styles.buttonsWrapper}>
            {aboutMeData.buttons.map((button, index) => (
              <motion.div
                key={button.label}
                variants={buttonVariants}
                custom={index}
              >
                <Link
                  href={button.href}
                  style={
                    button.variant === 'primary'
                      ? styles.buttonPrimary
                      : styles.buttonSecondary
                  }
                  className={`about-me-btn about-me-btn-${button.variant}`}
                >
                  {button.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* CSS for responsive and hover effects */}
      <style jsx global>{`
        .about-me-container {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-me-btn {
          transition: all 0.3s ease !important;
        }

        .about-me-btn-primary:hover {
          background-color: #ff8c4a !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(255, 122, 48, 0.4);
        }

        .about-me-btn-secondary:hover {
          border-color: #ff7a30 !important;
          color: #ff7a30 !important;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .about-me-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .about-me-container > div:first-child {
            max-width: 350px;
            margin: 0 auto;
          }
          
          .about-me-container > div:last-child {
            text-align: center;
          }
          
          .about-me-container > div:last-child > div:last-child {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          #about-me {
            padding: 60px 16px !important;
          }
          
          .about-me-container > div:first-child {
            max-width: 280px;
          }
          
          .about-me-container > div:last-child > div:last-child {
            flex-direction: column;
            width: 100%;
          }
          
          .about-me-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
