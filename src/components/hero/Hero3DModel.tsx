'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { hero3DModelStyles, hero3DModelInlineStyles, hero3DModelColors } from '@/styles';
import { generateParticles, orbitingRings, springConfig, mouseTransformConfig, type ParticleConfig } from '@/logic';
import { useIsMobile } from '@/hooks';
import { FallbackHeroImage } from '@/components/ui';

// Floating Particle Component
function FloatingParticle({ delay, size, x, y, colorType }: { delay: number; size: number; x: number; y: number; colorType: 'cyan' | 'purple' }) {
  const color = colorType === 'cyan' ? hero3DModelColors.cyan : hero3DModelColors.purple;
  return (
    <motion.div
      className={hero3DModelStyles.floatingParticle}
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: color,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

// Orbiting Ring Component
function OrbitingRing({ size, duration, delay, colorType }: { size: number; duration: number; delay: number; colorType: 'cyan' | 'purple' }) {
  const color = colorType === 'cyan' ? hero3DModelColors.cyan : hero3DModelColors.purple;
  return (
    <motion.div
      className={hero3DModelStyles.orbitingRing}
      style={{
        width: size,
        height: size,
        borderColor: color,
        opacity: 0.3,
      }}
      animate={{
        rotate: 360,
        scale: [1, 1.05, 1],
      }}
      transition={{
        rotate: { duration, repeat: Infinity, ease: 'linear', delay },
        scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
      }}
    />
  );
}

// Main 3D-like Model Component
export default function Hero3DModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations using imported config
  const rotateX = useSpring(useTransform(mouseY, mouseTransformConfig.input, mouseTransformConfig.outputY), springConfig);
  const rotateY = useSpring(useTransform(mouseX, mouseTransformConfig.input, mouseTransformConfig.outputX), springConfig);

  useEffect(() => {
    // Skip mouse tracking on mobile
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        mouseX.set((e.clientX - centerX) / rect.width);
        mouseY.set((e.clientY - centerY) / rect.height);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  // Generate fewer particles on mobile for performance
  const particles = useMemo(() => generateParticles(isMobile ? 10 : 30), [isMobile]);

  // Return lightweight fallback on mobile
  if (isMobile) {
    return <FallbackHeroImage />;
  }

  return (
    <div
      ref={containerRef}
      className={hero3DModelStyles.container}
      style={hero3DModelInlineStyles.container}
    >
      {/* Main Sphere Container */}
      <motion.div
        className={hero3DModelStyles.sphereContainer}
        style={{
          rotateX,
          rotateY,
          ...hero3DModelInlineStyles.sphereContainer,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Outer Glow Ring */}
        <motion.div
          className={hero3DModelStyles.outerGlow}
          style={hero3DModelInlineStyles.outerGlow}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Orbiting Rings */}
        <div className={hero3DModelStyles.orbitingRingsContainer}>
          {orbitingRings.map((ring, index) => (
            <OrbitingRing
              key={index}
              size={ring.size}
              duration={ring.duration}
              delay={ring.delay}
              colorType={ring.colorType}
            />
          ))}
        </div>

        {/* Main Glowing Sphere */}
        <motion.div
          className={hero3DModelStyles.mainSphere}
          animate={{
            boxShadow: isHovered
              ? hero3DModelInlineStyles.boxShadow.hovered
              : hero3DModelInlineStyles.boxShadow.default,
          }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.05 }}
          style={hero3DModelInlineStyles.mainSphere.base}
        >
          {/* Inner Gradient Animation */}
          <motion.div
            className={hero3DModelStyles.innerGradient}
            style={hero3DModelInlineStyles.innerGradient}
          >
            {/* Animated Mesh Lines */}
            <svg className={hero3DModelStyles.svgContainer} viewBox="0 0 200 200">
              <defs>
                <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={hero3DModelColors.cyan} stopOpacity="0.5" />
                  <stop offset="100%" stopColor={hero3DModelColors.purple} stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {/* Horizontal lines */}
              {[...Array(8)].map((_, i) => (
                <motion.ellipse
                  key={`h-${i}`}
                  cx="100"
                  cy="100"
                  rx={80 - i * 2}
                  ry={20 + i * 8}
                  fill="none"
                  stroke="url(#meshGradient)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
              {/* Vertical lines */}
              {[...Array(8)].map((_, i) => (
                <motion.ellipse
                  key={`v-${i}`}
                  cx="100"
                  cy="100"
                  rx={20 + i * 8}
                  ry={80 - i * 2}
                  fill="none"
                  stroke="url(#meshGradient)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + 0.5 }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Glowing Core */}
          <motion.div
            className={hero3DModelStyles.glowingCore}
            style={hero3DModelInlineStyles.glowingCore}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Floating Particles Inside */}
          {particles.slice(0, 15).map((particle) => (
            <FloatingParticle key={particle.id} {...particle} />
          ))}
        </motion.div>

        {/* External Floating Particles */}
        <div className={hero3DModelStyles.externalParticles}>
          {particles.slice(15).map((particle) => (
            <FloatingParticle key={particle.id} {...particle} />
          ))}
        </div>

        {/* Sparkle Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className={hero3DModelStyles.sparkle}
            style={{
              left: `${50 + Math.cos((i * Math.PI * 2) / 6) * 55}%`,
              top: `${50 + Math.sin((i * Math.PI * 2) / 6) * 55}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <div className={hero3DModelStyles.sparkleInner} />
          </motion.div>
        ))}
      </motion.div>

      {/* Background Grid Effect */}
      <div
        className={hero3DModelStyles.backgroundGrid}
        style={hero3DModelInlineStyles.backgroundGrid}
      />
    </div>
  );
}
