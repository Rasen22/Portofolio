// Scrollytelling Hook - GSAP ScrollTrigger Logic
import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface UseScrollytellingReturn {
  containerRef: React.RefObject<HTMLDivElement>;
  stickyRef: React.RefObject<HTMLDivElement>;
  heroCardRef: React.RefObject<HTMLDivElement>;
  aboutCardRef: React.RefObject<HTMLDivElement>;
  heroContentRef: React.RefObject<HTMLDivElement>;
  aboutContentRef: React.RefObject<HTMLDivElement>;
}

export const useScrollytelling = (): UseScrollytellingReturn => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const aboutCardRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const initScrollytelling = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (!containerRef.current || !stickyRef.current) return;
    if (!heroCardRef.current || !aboutCardRef.current) return;

    // Kill existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Set initial states for hero card
    gsap.set(heroCardRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transformPerspective: 1200,
      transformOrigin: 'center center',
    });

    // Set initial states for about card (hidden, rotated)
    gsap.set(aboutCardRef.current, {
      x: '40%',
      y: 0,
      scale: 0.85,
      opacity: 0,
      rotateY: 90,
      transformPerspective: 1200,
      transformOrigin: 'center center',
    });

    // Set initial state for about content
    gsap.set(aboutContentRef.current, {
      opacity: 0,
      x: 80,
    });

    // Create master timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        pin: stickyRef.current,
        pinSpacing: false,
      },
    });

    // Phase 1: Hero card rotates to the LEFT (0% - 50%)
    tl.to(
      heroCardRef.current,
      {
        x: '-50%',
        scale: 0.75,
        opacity: 0,
        rotateY: -180,
        transformPerspective: 1200,
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0
    );

    // Phase 1: Hero content fades out
    tl.to(
      heroContentRef.current,
      {
        opacity: 0,
        x: -80,
        duration: 0.4,
        ease: 'power2.in',
      },
      0
    );

    // Phase 2: About card rotates in (30% - 80%)
    tl.to(
      aboutCardRef.current,
      {
        x: 0,
        scale: 1,
        opacity: 1,
        rotateY: 0,
        transformPerspective: 1200,
        duration: 0.5,
        ease: 'power2.out',
      },
      0.3
    );

    // Phase 2: About content fades in
    tl.to(
      aboutContentRef.current,
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      0.4
    );

    timelineRef.current = tl;
  }, []);

  // Initialize on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      initScrollytelling();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [initScrollytelling]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    containerRef,
    stickyRef,
    heroCardRef,
    aboutCardRef,
    heroContentRef,
    aboutContentRef,
  };
};

export default useScrollytelling;
