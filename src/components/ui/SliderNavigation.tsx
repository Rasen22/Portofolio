'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SliderArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
  size?: number;
  color?: string;
}

// Circle Arrow Button Component with Pop-up & Fill Effect
export const SliderArrow = ({ 
  direction, 
  onClick, 
  size = 52,
  color = '#FF7A30' 
}: SliderArrowProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate circle path for SVG (semi-circle to full circle animation)
  const radius = (size - 4) / 2;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'visible',
      }}
      whileHover={{ 
        scale: 1.15,
        y: -5,
      }}
      whileTap={{ scale: 0.92 }}
      transition={{ 
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }}
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      {/* Background Circle - Fills on Hover */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          backgroundColor: color,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ 
          type: 'spring',
          stiffness: 500,
          damping: 25,
        }}
      />

      {/* Animated Circle Border - Semi to Full */}
      <svg
        width={size}
        height={size}
        style={{
          position: 'absolute',
          transform: 'rotate(-90deg)',
        }}
      >
        {/* Background track (subtle) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`${color}30`}
          strokeWidth="2"
        />
        {/* Animated stroke - semi circle to full */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ 
            strokeDasharray: circumference,
            strokeDashoffset: circumference * 0.5, // Start at half circle
          }}
          animate={{ 
            strokeDashoffset: isHovered ? 0 : circumference * 0.5,
          }}
          transition={{ 
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </svg>

      {/* Arrow Icon */}
      <motion.svg
        width={size * 0.38}
        height={size * 0.38}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: 'relative',
          zIndex: 2,
        }}
        animate={{
          stroke: isHovered ? '#0a0a0a' : color,
          x: isHovered ? (direction === 'left' ? -2 : 2) : 0,
        }}
        transition={{ 
          duration: 0.3,
          ease: 'easeOut',
        }}
      >
        {direction === 'left' ? (
          <path d="M19 12H5M12 19l-7-7 7-7" />
        ) : (
          <path d="M5 12h14M12 5l7 7-7 7" />
        )}
      </motion.svg>

      {/* Glow Effect on Hover */}
      <motion.div
        style={{
          position: 'absolute',
          inset: -8,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{ 
          duration: 0.4,
          ease: 'easeOut',
        }}
      />

      {/* Ripple Effect */}
      {isHovered && (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: `2px solid ${color}`,
            pointerEvents: 'none',
          }}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ 
            scale: 1.8,
            opacity: 0,
          }}
          transition={{ 
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      )}
    </motion.button>
  );
};

// Slider Dot Component with Elegant Animations
interface SliderDotProps {
  active: boolean;
  onClick: () => void;
  color?: string;
}

export const SliderDot = ({ active, onClick, color = '#FF7A30' }: SliderDotProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: '12px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
      animate={{
        width: active ? 32 : 12,
        backgroundColor: active ? color : 'rgba(255, 255, 255, 0.15)',
      }}
      whileHover={{ 
        backgroundColor: active ? color : 'rgba(255, 255, 255, 0.35)',
        y: -2,
      }}
      whileTap={{ scale: 0.85 }}
      transition={{ 
        type: 'spring',
        stiffness: 400,
        damping: 20,
      }}
      aria-label="Go to slide"
    >
      {/* Inner glow for active state */}
      {active && (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '6px',
            background: `linear-gradient(90deg, transparent, ${color}80, transparent)`,
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
      
      {/* Hover pulse effect */}
      {isHovered && !active && (
        <motion.div
          style={{
            position: 'absolute',
            inset: -2,
            borderRadius: '8px',
            border: `1px solid ${color}50`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  );
};

// Complete Slider Navigation Component
interface SliderNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

export const SliderNavigation = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onDotClick,
}: SliderNavigationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 0.3, 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        marginTop: '40px',
      }}
    >
      <SliderArrow direction="left" onClick={onPrev} />
      
      <motion.div 
        style={{ 
          display: 'flex', 
          gap: '10px', 
          alignItems: 'center',
          padding: '8px 16px',
          borderRadius: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <SliderDot
            key={index}
            active={index === currentSlide}
            onClick={() => onDotClick(index)}
          />
        ))}
      </motion.div>
      
      <SliderArrow direction="right" onClick={onNext} />
    </motion.div>
  );
};

export default SliderNavigation;
