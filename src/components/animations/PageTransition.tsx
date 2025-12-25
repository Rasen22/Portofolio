'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { usePrefersReducedMotion } from '@/hooks';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();

  // If user prefers reduced motion, just render children without animation
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative"
      >
        {/* Page content with fade animation */}
        <motion.div
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              },
            },
            exit: {
              opacity: 0,
              y: -20,
              transition: {
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          {children}
        </motion.div>

        {/* Gradient wipe overlay - animates from bottom-right to top-left on exit */}
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(0, 243, 255, 0.8) 0%, rgba(168, 85, 247, 0.8) 100%)',
            transformOrigin: 'bottom right',
          }}
          variants={{
            initial: {
              clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%)',
            },
            animate: {
              clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%)',
              transition: {
                duration: 0.4,
                ease: 'easeInOut',
              },
            },
            exit: {
              clipPath: [
                'polygon(100% 100%, 100% 100%, 100% 100%)',
                'polygon(0% 100%, 100% 100%, 100% 0%)',
                'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
              ],
              transition: {
                duration: 0.6,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
              },
            },
          }}
          aria-hidden="true"
        />
      </motion.div>
    </AnimatePresence>
  );
}

// Simpler fade transition for internal elements
export function FadeTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// Slide up transition for cards and sections
export function SlideUpTransition({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// Scale transition for interactive elements
export function ScaleTransition({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
