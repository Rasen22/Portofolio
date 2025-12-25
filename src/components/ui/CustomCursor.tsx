'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { customCursorStyles, customCursorInlineStyles, customCursorAnimations } from '@/styles';
import { useTabVisibility } from '@/hooks';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const isTabVisible = useTabVisibility();

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      // Skip mouse tracking when tab is not visible
      if (!document.hidden) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      if (!document.hidden) {
        setIsVisible(true);
      }
    };

    // Add hover detection for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .cursor-pointer'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.body.addEventListener('mouseleave', handleMouseLeave);
      document.body.addEventListener('mouseenter', handleMouseEnter);
      
      // Initial setup and observer for dynamic elements
      addHoverListeners();
      
      const observer = new MutationObserver(addHoverListeners);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseleave', handleMouseLeave);
        document.body.removeEventListener('mouseenter', handleMouseEnter);
        window.removeEventListener('resize', checkMobile);
        observer.disconnect();
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Hide cursor when tab is not visible
  if (isMobile || !isTabVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor - Uses CSS transforms */}
          <motion.div
            className={customCursorStyles.mainCursor}
            style={{ willChange: 'transform' }}
            animate={customCursorAnimations.main.getAnimate(mousePosition, isHovering)}
            transition={customCursorAnimations.main.transition}
          >
            <motion.div
              className={customCursorStyles.cursorRing}
              style={{
                ...customCursorInlineStyles.ring.getStyle(isHovering),
                willChange: 'transform, opacity',
              }}
              animate={customCursorAnimations.ring.getAnimate(isHovering)}
              transition={customCursorAnimations.ring.transition}
            />
          </motion.div>

          {/* Trailing dot - Uses CSS transforms */}
          <motion.div
            className={customCursorStyles.trailingDot}
            style={{ willChange: 'transform, opacity' }}
            animate={customCursorAnimations.trail.getAnimate(mousePosition, isHovering)}
            transition={customCursorAnimations.trail.transition}
          />
        </>
      )}
    </AnimatePresence>
  );
}
