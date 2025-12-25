'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Fallback for Hero 3D Model on mobile
export function FallbackHeroImage() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Gradient orb background */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 243, 255, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Static sphere representation */}
      <motion.div
        className="relative w-48 h-48 rounded-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 243, 255, 0.4) 0%, rgba(168, 85, 247, 0.4) 100%)',
          boxShadow: '0 0 60px rgba(0, 243, 255, 0.3), inset 0 0 60px rgba(168, 85, 247, 0.2)',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {/* Inner gradient */}
        <div 
          className="absolute inset-4 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 60%)',
          }}
        />
      </motion.div>
      
      {/* Decorative rings */}
      <motion.div
        className="absolute w-56 h-56 rounded-full border border-cyan-400/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-purple-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

// Fallback for Particles Background on mobile
export function FallbackParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 243, 255, 0.05) 0%, transparent 50%)',
        }}
      />
      
      {/* Static dots pattern */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/50"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Fallback for complex animations
export function FallbackAnimation({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
    </div>
  );
}
