'use client';

import React, { useCallback, useMemo } from 'react';
import Image from 'next/image';
import type { LogoLoopProps, LogoItem } from '@/types/logoLoop';
import { 
  useLogoLoop, 
  useResizeObserver, 
  useImageLoader, 
  useAnimationLoop 
} from '@/logic/Logic_logoLoop';
import {
  toCssLength,
  cx,
  getLogoLoopCssVars,
  getRootClasses,
  getTrackClasses,
  getListClasses,
  getFadeLeftClasses,
  getFadeRightClasses,
  getFadeTopClasses,
  getFadeBottomClasses,
} from '@/styles/Style_logoLoop';

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Skills',
    className,
    style
  }) => {
    const {
      containerRef,
      trackRef,
      seqRef,
      seqWidth,
      seqHeight,
      copyCount,
      isHovered,
      isVertical,
      targetVelocity,
      effectiveHoverSpeed,
      updateDimensions,
      handleMouseEnter,
      handleMouseLeave,
    } = useLogoLoop(speed, direction, pauseOnHover, hoverSpeed);

    // Apply hooks
    useResizeObserver(
      updateDimensions, 
      [containerRef, seqRef], 
      [logos, gap, logoHeight, isVertical]
    );
    
    useImageLoader(
      seqRef, 
      updateDimensions, 
      [logos, gap, logoHeight, isVertical]
    );
    
    useAnimationLoop(
      trackRef, 
      targetVelocity, 
      seqWidth, 
      seqHeight, 
      isHovered, 
      effectiveHoverSpeed, 
      isVertical
    );

    // CSS Variables
    const cssVariables = useMemo(
      () => getLogoLoopCssVars(gap, logoHeight, fadeOutColor),
      [gap, logoHeight, fadeOutColor]
    );

    // Root Classes
    const rootClasses = useMemo(
      () => getRootClasses(isVertical, scaleOnHover, className),
      [isVertical, scaleOnHover, className]
    );

    // Render Logo Item
    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        if (renderItem) {
          return (
            <li
              className="flex-none"
              style={{ marginRight: `${gap}px` }}
              key={key}
              role="listitem"
            >
              {renderItem(item, key)}
            </li>
          );
        }

        const isNodeItem = 'node' in item;
        const title = isNodeItem 
          ? (item as { title?: string }).title 
          : (item as { title?: string; alt?: string }).title || (item as { alt?: string }).alt;

        return (
          <li
            className={cx(
              'flex-none group/item',
              'transition-transform duration-300 ease-out',
              scaleOnHover && 'hover:scale-110 hover:-translate-y-2'
            )}
            style={{ marginRight: `${gap}px` }}
            key={key}
            role="listitem"
          >
            <div className="flex flex-col items-center gap-3 cursor-pointer">
              {/* Icon Container */}
              <div 
                className={cx(
                  'relative flex items-center justify-center',
                  'rounded-full border-2 border-white/20',
                  'bg-white/5 backdrop-blur-sm',
                  'transition-all duration-400 ease-out',
                  'group-hover/item:border-[#FF7A30] group-hover/item:bg-[#FF7A30]/15',
                  'group-hover/item:shadow-[0_0_30px_rgba(255,122,48,0.4)]'
                )}
                style={{
                  width: `${logoHeight + 24}px`,
                  height: `${logoHeight + 24}px`,
                }}
              >
                {isNodeItem ? (
                  <span
                    className={cx(
                      'text-white/60 transition-all duration-300',
                      'grayscale group-hover/item:grayscale-0',
                      'group-hover/item:text-white'
                    )}
                    style={{ fontSize: `${logoHeight}px` }}
                  >
                    {(item as { node: React.ReactNode }).node}
                  </span>
                ) : (
                  <Image
                    src={(item as { src: string }).src}
                    width={logoHeight}
                    height={logoHeight}
                    alt={(item as { alt?: string }).alt ?? ''}
                    loading="lazy"
                    draggable={false}
                    className={cx(
                      'object-contain transition-all duration-400',
                      'grayscale brightness-75',
                      'group-hover/item:grayscale-0 group-hover/item:brightness-100'
                    )}
                    style={{ 
                      width: `${logoHeight}px`,
                      height: `${logoHeight}px`,
                    }}
                  />
                )}
              </div>
              
              {/* Label */}
              {title && (
                <span 
                  className={cx(
                    'text-[10px] font-medium uppercase tracking-[0.1em]',
                    'text-white/40 whitespace-nowrap',
                    'transition-colors duration-300',
                    'group-hover/item:text-[#FF7A30]'
                  )}
                >
                  {title}
                </span>
              )}
            </div>
          </li>
        );
      },
      [gap, logoHeight, scaleOnHover, renderItem]
    );

    // Generate logo lists
    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className={cx(getListClasses(isVertical), 'gap-0')}
            key={`copy-${copyIndex}`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem, isVertical, seqRef]
    );

    // Container style
    const containerStyle = useMemo(
      (): React.CSSProperties => ({
        width: isVertical
          ? toCssLength(width) === '100%'
            ? undefined
            : toCssLength(width)
          : (toCssLength(width) ?? '100%'),
        ...cssVariables,
        ...style
      }),
      [width, cssVariables, style, isVertical]
    );

    return (
      <div 
        ref={containerRef} 
        className={rootClasses} 
        style={containerStyle} 
        role="region" 
        aria-label={ariaLabel}
      >
        {/* Fade Overlays */}
        {fadeOut && (
          <>
            {isVertical ? (
              <>
                <div aria-hidden className={getFadeTopClasses()} />
                <div aria-hidden className={getFadeBottomClasses()} />
              </>
            ) : (
              <>
                <div aria-hidden className={getFadeLeftClasses()} />
                <div aria-hidden className={getFadeRightClasses()} />
              </>
            )}
          </>
        )}

        {/* Track */}
        <div
          className={getTrackClasses(isVertical)}
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
