'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimationControls } from 'framer-motion';
import { hero3DModelStyles, hero3DModelInlineStyles, hero3DModelColors } from '@/styles';
import { generateParticles, orbitingRings, springConfig, mouseTransformConfig, type ParticleConfig } from '@/logic';
import { useIsMobile, useAnimationState } from '@/hooks';
import { FallbackHeroImage } from '@/components/ui';

// Maximum particle count for performance (<50)
const MAX_PARTICLES = 25;
const MOBILE_PARTICLES = 8;

// Optimized Floating Particle Component - Uses CSS transforms (scale/opacity)
function FloatingParticle({ 
  delay, 
  size, 
  x, 
  y, 
  colorType,
  shouldAnimate 
}: ParticleConfig & { shouldAnimate: boolean }) {
  const color = colorType === 'cyan' ? hero3DModelColors.cyan : hero3DModelColors.purple;
  const controls = useAnimationControls();

  useEffect(() => {
    if (shouldAnimate) {
      controls.start({
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.5, 1],
        y: [0, -30, 0],
      });
    } else {
      controls.stop();
    }
  }, [shouldAnimate, controls]);

  return (
    <motion.div
      className={hero3DModelStyles.floatingParticle}
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: color,
        willChange: 'transform, opacity',
      }}
      animate={controls}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

// Optimized Orbiting Ring Component - Uses CSS transforms (rotate/scale)
function OrbitingRing({ 
  size, 
  duration, 
  delay, 
  colorType,
  shouldAnimate 
}: { 
  size: number; 
  duration: number; 
  delay: number; 
  colorType: 'cyan' | 'purple';
  shouldAnimate: boolean;
}) {
  const color = colorType === 'cyan' ? hero3DModelColors.cyan : hero3DModelColors.purple;
  const controls = useAnimationControls();

  useEffect(() => {
    if (shouldAnimate) {
      controls.start({
        rotate: 360,
        scale: [1, 1.05, 1],
      });
    } else {
      controls.stop();
    }
  }, [shouldAnimate, controls]);

  return (
    <motion.div
      className={hero3DModelStyles.orbitingRing}
      style={{
        width: size,
        height: size,
        borderColor: color,
        opacity: 0.3,
        willChange: 'transform',
      }}
      animate={controls}
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
  const { shouldAnimate, isTabVisible } = useAnimationState();
  
  // Animation controls for main animations
  const glowControls = useAnimationControls();
  const coreControls = useAnimationControls();
  
  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations using imported config
  const rotateX = useSpring(useTransform(mouseY, mouseTransformConfig.input, mouseTransformConfig.outputY), springConfig);
  const rotateY = useSpring(useTransform(mouseX, mouseTransformConfig.input, mouseTransformConfig.outputX), springConfig);

  // Handle tab visibility - pause/resume animations
  useEffect(() => {
    if (shouldAnimate) {
      glowControls.start({
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.8, 0.5],
      });
      coreControls.start({
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      });
    } else {
      glowControls.stop();
      coreControls.stop();
    }
  }, [shouldAnimate, glowControls, coreControls]);

  useEffect(() => {
    // Skip mouse tracking on mobile or when tab is not visible
    if (isMobile || !isTabVisible) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        mouseX.set((e.clientX - centerX) / rect.width);
        mouseY.set((e.clientY - centerY) / rect.height);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile, isTabVisible]);

  // Generate particles with strict limit (<50, using 25 max)
  const particles = useMemo(() => {
    const count = isMobile ? MOBILE_PARTICLES : MAX_PARTICLES;
    return generateParticles(count);
  }, [isMobile]);

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
          willChange: 'transform',
          ...hero3DModelInlineStyles.sphereContainer,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Outer Glow Ring */}
        <motion.div
          className={hero3DModelStyles.outerGlow}
          style={{
            ...hero3DModelInlineStyles.outerGlow,
            willChange: 'transform, opacity',
          }}
          animate={glowControls}
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
              shouldAnimate={shouldAnimate}
            />
          ))}
        </div>

        {/* Main Glowing Sphere */}
        <motion.div
          className={hero3DModelStyles.mainSphere}
          animate={shouldAnimate ? {
            boxShadow: isHovered
              ? hero3DModelInlineStyles.boxShadow.hovered
              : hero3DModelInlineStyles.boxShadow.default,
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.05 }}
          style={{
            ...hero3DModelInlineStyles.mainSphere.base,
            willChange: 'transform, box-shadow',
          }}
        >
          {/* Inner Gradient Animation */}
          <motion.div
            className={hero3DModelStyles.innerGradient}
            style={hero3DModelInlineStyles.innerGradient}
          >
            {/* Animated Mesh Lines - Reduced count for performance */}
            <svg className={hero3DModelStyles.svgContainer} viewBox="0 0 200 200">
              <defs>
                <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={hero3DModelColors.cyan} stopOpacity="0.5" />
                  <stop offset="100%" stopColor={hero3DModelColors.purple} stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {/* Horizontal lines - reduced from 8 to 6 */}
              {[...Array(6)].map((_, i) => (
                <motion.ellipse
                  key={`h-${i}`}
                  cx="100"
                  cy="100"
                  rx={80 - i * 3}
                  ry={20 + i * 10}
                  fill="none"
                  stroke="url(#meshGradient)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0.3 }}
                  animate={shouldAnimate ? { opacity: [0.2, 0.5, 0.2] } : { opacity: 0.3 }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
              {/* Vertical lines - reduced from 8 to 6 */}
              {[...Array(6)].map((_, i) => (
                <motion.ellipse
                  key={`v-${i}`}
                  cx="100"
                  cy="100"
                  rx={20 + i * 10}
                  ry={80 - i * 3}
                  fill="none"
                  stroke="url(#meshGradient)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0.3 }}
                  animate={shouldAnimate ? { opacity: [0.2, 0.5, 0.2] } : { opacity: 0.3 }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + 0.5 }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Glowing Core */}
          <motion.div
            className={hero3DModelStyles.glowingCore}
            style={{
              ...hero3DModelInlineStyles.glowingCore,
              willChange: 'transform, opacity',
            }}
            animate={coreControls}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Floating Particles Inside - Limited to 12 */}
          {particles.slice(0, Math.min(12, particles.length)).map((particle) => (
            <FloatingParticle key={particle.id} {...particle} shouldAnimate={shouldAnimate} />
          ))}
        </motion.div>

        {/* External Floating Particles */}
        <div className={hero3DModelStyles.externalParticles}>
          {particles.slice(12).map((particle) => (
            <FloatingParticle key={particle.id} {...particle} shouldAnimate={shouldAnimate} />
          ))}
        </div>

        {/* Sparkle Effects - Reduced from 6 to 4 */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className={hero3DModelStyles.sparkle}
            style={{
              left: `${50 + Math.cos((i * Math.PI * 2) / 4) * 55}%`,
              top: `${50 + Math.sin((i * Math.PI * 2) / 4) * 55}%`,
              willChange: 'transform, opacity',
            }}
            animate={shouldAnimate ? {
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            } : { scale: 0, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
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
