'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroContent() {
  return (
    <motion.div
      className="flex flex-col space-y-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Open to Work Badge */}
      <motion.div 
        variants={itemVariants} 
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 w-fit"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">
          OPEN TO WORK
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1 
        variants={itemVariants} 
        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
      >
        Hi, I&apos;m{' '}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Farhan Rasendriya
        </span>
      </motion.h1>

      {/* Title */}
      <motion.p 
        variants={itemVariants} 
        className="text-base md:text-lg text-gray-300 font-medium"
      >
        UI/UX Designer & Frontend Developer
      </motion.p>

      {/* Description */}
      <motion.p 
        variants={itemVariants} 
        className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed"
      >
        Building immersive digital experiences for the decentralized web. I bridge the gap between complex blockchain protocols and intuitive user interfaces.
      </motion.p>

      {/* Buttons */}
      <motion.div variants={itemVariants} className="flex flex-row gap-4 pt-4">
        {/* Contact Button */}
        <Link href="/contact">
          <motion.button
            className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40 transition-all duration-300 text-black font-semibold text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.button>
        </Link>

        {/* Download CV Button */}
        <motion.a
          href="/cv.pdf"
          download
          className="px-7 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-all duration-300 text-white font-medium text-sm"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Download CV
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
