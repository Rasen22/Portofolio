'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { useIsMobile, usePrefersReducedMotion } from '@/hooks';

// Simple particle animation data (inline to avoid external dependency)
const particlesAnimationData = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 180,
  w: 1920,
  h: 1080,
  nm: 'Particles',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Particle 1',
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [0], h: 0, o: { x: [0.4], y: [0] }, i: { x: [0.6], y: [1] } }, { t: 30, s: [50] }, { t: 150, s: [50], h: 0, o: { x: [0.4], y: [0] }, i: { x: [0.6], y: [1] } }, { t: 180, s: [0] }] },
        r: { a: 0, k: 0 },
        p: { a: 1, k: [{ t: 0, s: [200, 800, 0], h: 0, o: { x: 0.4, y: 0 }, i: { x: 0.6, y: 1 } }, { t: 180, s: [400, 200, 0] }] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [{ ty: 'el', d: 1, s: { a: 0, k: [8, 8] }, p: { a: 0, k: [0, 0] }, nm: 'Ellipse' }, { ty: 'fl', c: { a: 0, k: [0, 0.953, 1, 0.6] }, o: { a: 0, k: 100 }, nm: 'Fill' }],
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Particle 2',
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 20, s: [0], h: 0, o: { x: [0.4], y: [0] }, i: { x: [0.6], y: [1] } }, { t: 50, s: [40] }, { t: 160, s: [40], h: 0, o: { x: [0.4], y: [0] }, i: { x: [0.6], y: [1] } }, { t: 180, s: [0] }] },
        r: { a: 0, k: 0 },
        p: { a: 1, k: [{ t: 20, s: [1700, 900, 0], h: 0, o: { x: 0.4, y: 0 }, i: { x: 0.6, y: 1 } }, { t: 180, s: [1400, 100, 0] }] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [{ ty: 'el', d: 1, s: { a: 0, k: [6, 6] }, p: { a: 0, k: [0, 0] }, nm: 'Ellipse' }, { ty: 'fl', c: { a: 0, k: [0.659, 0.333, 0.969, 0.5] }, o: { a: 0, k: 100 }, nm: 'Fill' }],
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'Particle 3',
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 40, s: [0], h: 0, o: { x: [0.4], y: [0] }, i: { x: [0.6], y: [1] } }, { t: 70, s: [60] }, { t: 140, s: [60], h: 0, o: { x: [0.4], y: [0] }, i: { x: [0.6], y: [1] } }, { t: 180, s: [0] }] },
        r: { a: 0, k: 0 },
        p: { a: 1, k: [{ t: 40, s: [960, 1000, 0], h: 0, o: { x: 0.4, y: 0 }, i: { x: 0.6, y: 1 } }, { t: 180, s: [960, 150, 0] }] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [{ ty: 'el', d: 1, s: { a: 0, k: [10, 10] }, p: { a: 0, k: [0, 0] }, nm: 'Ellipse' }, { ty: 'fl', c: { a: 0, k: [0, 0.953, 1, 0.4] }, o: { a: 0, k: 100 }, nm: 'Fill' }],
    },
  ],
};

interface ParticlesBackgroundProps {
  className?: string;
}

export default function ParticlesBackground({
  className,
}: ParticlesBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render on mobile or if user prefers reduced motion
  if (!isMounted || isMobile || prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <Lottie
        animationData={particlesAnimationData}
        loop={true}
        autoplay={true}
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.6,
        }}
      />
      
      {/* Additional gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-400/5 via-purple-500/5 to-transparent rounded-full" />
    </div>
  );
}
