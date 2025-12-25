// Styles for Hero 3D Model Component
export const hero3DModelStyles = {
  // Main Container
  container: 'relative w-full h-full flex items-center justify-center',

  // Sphere Container
  sphereContainer: 'relative',

  // Outer Glow Ring
  outerGlow: 'absolute -inset-8 rounded-full',

  // Orbiting Rings Container
  orbitingRingsContainer: 'absolute inset-0 flex items-center justify-center',

  // Orbiting Ring
  orbitingRing: 'absolute rounded-full border-2 border-dashed',

  // Main Sphere
  mainSphere: 'relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full',

  // Inner Gradient
  innerGradient: 'absolute inset-2 rounded-full overflow-hidden',

  // SVG Container
  svgContainer: 'w-full h-full',

  // Glowing Core
  glowingCore: 'absolute inset-1/4 rounded-full',

  // Floating Particle
  floatingParticle: 'absolute rounded-full',

  // External Particles Container
  externalParticles: 'absolute -inset-20 pointer-events-none',

  // Sparkle
  sparkle: 'absolute w-2 h-2',
  sparkleInner: 'w-full h-full bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]',

  // Background Grid
  backgroundGrid: 'absolute inset-0 opacity-20 pointer-events-none',
};

// Inline styles (for dynamic values)
export const hero3DModelInlineStyles = {
  container: {
    perspective: 1000,
  },

  sphereContainer: {
    transformStyle: 'preserve-3d' as const,
  },

  outerGlow: {
    background: 'radial-gradient(circle, rgba(0,243,255,0.1) 0%, transparent 70%)',
  },

  mainSphere: {
    base: {
      background: 'linear-gradient(135deg, rgba(0,243,255,0.1) 0%, rgba(185,103,255,0.1) 100%)',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(0,243,255,0.3)',
    },
  },

  innerGradient: {
    background: 'radial-gradient(circle at 30% 30%, rgba(0,243,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(185,103,255,0.3) 0%, transparent 50%)',
  },

  glowingCore: {
    background: 'radial-gradient(circle, rgba(0,243,255,0.6) 0%, rgba(185,103,255,0.4) 50%, transparent 100%)',
  },

  backgroundGrid: {
    backgroundImage: `
      linear-gradient(rgba(0,243,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,243,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
  },

  // Box shadow variants
  boxShadow: {
    hovered: [
      '0 0 60px rgba(0, 243, 255, 0.8), 0 0 120px rgba(185, 103, 255, 0.4)',
      '0 0 80px rgba(185, 103, 255, 0.8), 0 0 140px rgba(0, 243, 255, 0.4)',
      '0 0 60px rgba(0, 243, 255, 0.8), 0 0 120px rgba(185, 103, 255, 0.4)',
    ],
    default: [
      '0 0 40px rgba(0, 243, 255, 0.5), 0 0 80px rgba(185, 103, 255, 0.3)',
      '0 0 50px rgba(185, 103, 255, 0.5), 0 0 100px rgba(0, 243, 255, 0.3)',
      '0 0 40px rgba(0, 243, 255, 0.5), 0 0 80px rgba(185, 103, 255, 0.3)',
    ],
  },
};

// Colors
export const hero3DModelColors = {
  cyan: '#00f3ff',
  purple: '#b967ff',
};

export default hero3DModelStyles;
