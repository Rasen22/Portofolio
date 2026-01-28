// Scrollytelling Logic - Animation configurations and utilities
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation configuration types
export interface CardAnimationConfig {
  startX: string | number;
  endX: string | number;
  startY: string | number;
  endY: string | number;
  startScale: number;
  endScale: number;
  startOpacity: number;
  endOpacity: number;
  startRotateY: number;
  endRotateY: number;
  duration: number;
  ease: string;
}

export interface ScrollTriggerConfig {
  trigger: string | Element;
  start: string;
  end: string;
  scrub: number | boolean;
  pin?: string | Element | boolean;
  pinSpacing?: boolean;
  markers?: boolean;
}

// Hero card animation - card rotates to the LEFT (like flipping a page)
export const heroCardAnimation: CardAnimationConfig = {
  startX: 0,
  endX: '-50%',
  startY: 0,
  endY: 0,
  startScale: 1,
  endScale: 0.75,
  startOpacity: 1,
  endOpacity: 0,
  startRotateY: 0,
  endRotateY: -180, // Rotate to LEFT
  duration: 1,
  ease: 'power2.inOut',
};

// About card animation - card appears after hero rotates away
export const aboutCardAnimation: CardAnimationConfig = {
  startX: '40%',
  endX: 0,
  startY: 0,
  endY: 0,
  startScale: 0.85,
  endScale: 1,
  startOpacity: 0,
  endOpacity: 1,
  startRotateY: 90,
  endRotateY: 0,
  duration: 1,
  ease: 'power2.out',
};

// Default scroll trigger configuration
export const defaultScrollTrigger: Partial<ScrollTriggerConfig> = {
  start: 'top top',
  end: 'bottom bottom',
  scrub: 1.5,
  pinSpacing: false,
  markers: false,
};

// Utility to calculate scroll progress
export const getScrollProgress = (
  scrollTop: number,
  containerHeight: number,
  viewportHeight: number
): number => {
  const scrollableDistance = containerHeight - viewportHeight;
  if (scrollableDistance <= 0) return 0;
  return Math.min(Math.max(scrollTop / scrollableDistance, 0), 1);
};

// Clean up all ScrollTriggers
export const cleanupScrollTriggers = (): void => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

// Refresh ScrollTrigger calculations
export const refreshScrollTrigger = (): void => {
  ScrollTrigger.refresh();
};

export default {
  heroCardAnimation,
  aboutCardAnimation,
  defaultScrollTrigger,
  getScrollProgress,
  cleanupScrollTriggers,
  refreshScrollTrigger,
};
