'use client';

import { motion } from 'framer-motion';

// Base skeleton animation
const shimmerAnimation = {
  initial: { backgroundPosition: '-200% 0' },
  animate: { backgroundPosition: '200% 0' },
  transition: { duration: 1.5, repeat: Infinity, ease: 'linear' },
};

// Skeleton for Hero 3D Model
export function SkeletonModel() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow placeholder */}
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.1), transparent)',
          backgroundSize: '200% 100%',
        }}
        animate={shimmerAnimation.animate}
        transition={shimmerAnimation.transition}
      />
      
      {/* Main sphere placeholder */}
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Orbiting ring placeholders */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[280, 320, 360].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-white/10"
            style={{ width: size, height: size }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>
    </div>
  );
}

// Skeleton for Particles Background
export function SkeletonParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Static gradient overlay instead of animated particles */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 243, 255, 0.1) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

// Skeleton for Skills Section
export function SkeletonSkills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="h-32 rounded-xl bg-white/5 border border-white/10"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            backgroundSize: '200% 100%',
          }}
          animate={shimmerAnimation.animate}
          transition={{ ...shimmerAnimation.transition, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

// Skeleton for Latest Projects Carousel
export function SkeletonProjects() {
  return (
    <div className="flex gap-6 overflow-hidden">
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="flex-shrink-0 w-80 h-96 rounded-2xl bg-white/5 border border-white/10"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            backgroundSize: '200% 100%',
          }}
          animate={shimmerAnimation.animate}
          transition={{ ...shimmerAnimation.transition, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

// Generic loading skeleton
export function SkeletonBox({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`bg-white/5 border border-white/10 rounded-xl ${className}`}
      style={{
        background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        backgroundSize: '200% 100%',
      }}
      animate={shimmerAnimation.animate}
      transition={shimmerAnimation.transition}
    />
  );
}
