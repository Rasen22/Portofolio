'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { glassCardStyles, glassCardGlowStyles, glassCardAnimations } from '@/styles';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'cyan' | 'purple' | 'gradient';
}

export default function GlassCard({
  children,
  className,
  hoverEffect = true,
  glowColor = 'gradient',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(glassCardStyles.container, className)}
      whileHover={
        hoverEffect
          ? glassCardAnimations.hover.getConfig(glowColor)
          : undefined
      }
      transition={glassCardAnimations.transition}
      {...props}
    >
      {/* Gradient overlay */}
      <div className={glassCardStyles.overlay} />
      
      {/* Content */}
      <div className={glassCardStyles.content}>{children}</div>
    </motion.div>
  );
}

// Skeleton version for loading states
export function GlassCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn(glassCardStyles.skeleton.container, className)}>
      <div className={glassCardStyles.skeleton.shimmer} />
    </div>
  );
}
