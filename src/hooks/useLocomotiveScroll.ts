'use client';

import { useEffect, useRef, useState } from 'react';

interface LocomotiveScrollOptions {
  smooth?: boolean;
  multiplier?: number;
  lerp?: number;
  class?: string;
  getSpeed?: boolean;
  getDirection?: boolean;
  smartphone?: {
    smooth: boolean;
  };
  tablet?: {
    smooth: boolean;
    breakpoint: number;
  };
}

export function useLocomotiveScroll(options: LocomotiveScrollOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line no-explicit-any
  const locomotiveScrollRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        if (containerRef.current) {
          locomotiveScrollRef.current = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            multiplier: 1,
            lerp: 0.1, // Easing (0.1 = smooth, 1 = instant)
            class: 'is-inview',
            getSpeed: true,
            getDirection: true,
            smartphone: {
              smooth: false, // Disable smooth scroll on mobile for better performance
            },
            tablet: {
              smooth: false,
              breakpoint: 768,
            },
            ...options,
          });

          setIsReady(true);
        }
      } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error);
      }
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
        setIsReady(false);
      }
    };
  }, [options]);

  // Update scroll on route change or content update
  const update = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.update();
    }
  };

  // Scroll to element
  const scrollTo = (
    target: string | HTMLElement | number,
    options?: { offset?: number; duration?: number; easing?: number[] }
  ) => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(target, {
        offset: options?.offset || 0,
        duration: options?.duration || 1000,
        easing: options?.easing || [0.16, 1, 0.3, 1], // cubic-bezier
      });
    }
  };

  // Stop scroll
  const stop = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.stop();
    }
  };

  // Start scroll
  const start = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.start();
    }
  };

  return {
    containerRef,
    locomotiveScroll: locomotiveScrollRef.current,
    isReady,
    update,
    scrollTo,
    stop,
    start,
  };
}
