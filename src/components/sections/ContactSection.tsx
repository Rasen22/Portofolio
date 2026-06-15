'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contactStyles } from '@/styles';
import { contactData, sectionVariants, titleVariants, socialVariants } from '@/logic/Logic_contact';

// Simple SVG icons for social media
const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    whatsapp: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.16 1.449 4.75 1.45h.007c5.441 0 9.863-4.414 9.866-9.86.002-2.639-1.02-5.12-2.883-6.985A9.79 9.79 0 0 0 12.008 1.9c-5.45 0-9.873 4.418-9.877 9.866-.001 1.848.51 3.652 1.478 5.215l-1.01 3.687 3.79-.993zm11.385-6.842c-.312-.156-1.846-.911-2.132-1.015-.286-.104-.495-.156-.704.156-.209.312-.808 1.015-.99 1.223-.182.208-.364.234-.676.078a9.54 9.54 0 0 1-2.793-1.72 10.51 10.51 0 0 1-1.932-2.404c-.312-.533-.033-.822.235-1.09.24-.24.52-.611.78-.916.104-.117.208-.234.3-.351.104-.117.156-.195.221-.325.078-.13.039-.247-.02-.351-.058-.104-.495-1.196-.676-1.638-.178-.429-.356-.37-.49-.377-.127-.006-.273-.007-.42-.007-.146 0-.387.055-.59.277-.202.222-.77.753-.77 1.838 0 1.085.79 2.135.9 2.291.11.156 1.554 2.373 3.766 3.328.526.227.937.363 1.258.465.529.168 1.01.144 1.39.088.423-.062 1.296-.53 1.478-1.042.182-.511.182-.95.127-1.042-.055-.093-.208-.146-.52-.303z"/>
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  };

  return icons[type] || null;
};

export default function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="contact" className={contactStyles.section}>
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={contactStyles.container}
      >
        {/* Title */}
        <motion.h2 variants={titleVariants} className={contactStyles.title}>
          {contactData.title}{' '}
          <span className="block sm:inline">{contactData.titleAccent}</span>
        </motion.h2>

        {/* Social Links */}
        <div className={contactStyles.socialGrid}>
          {contactData.socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              custom={index}
              variants={socialVariants}
              className={contactStyles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              <SocialIcon type={social.icon} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
