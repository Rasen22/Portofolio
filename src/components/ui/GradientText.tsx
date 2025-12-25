'use client';

import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  animate?: boolean;
}

export default function GradientText({
  children,
  className,
  as: Component = 'span',
  animate = false,
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        'bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent',
        animate && 'animate-gradient-x bg-[length:200%_auto]',
        className
      )}
    >
      {children}
    </Component>
  );
}
