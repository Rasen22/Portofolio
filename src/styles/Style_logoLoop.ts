// LogoLoop Utility Functions & Class Generators

// Convert number to CSS length string
export const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? `${value}px` : (value ?? undefined);

// Join class names, filtering out falsy values
export const cx = (...parts: Array<string | false | null | undefined>): string => 
  parts.filter(Boolean).join(' ');

// Generate CSS variables for LogoLoop
export const getLogoLoopCssVars = (
  gap: number, 
  logoHeight: number, 
  fadeOutColor?: string
): React.CSSProperties => ({
  '--logoloop-gap': `${gap}px`,
  '--logoloop-logoHeight': `${logoHeight}px`,
  ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
} as React.CSSProperties);

// Root container classes
export const getRootClasses = (
  isVertical: boolean,
  scaleOnHover: boolean,
  className?: string
): string => cx(
  'relative group',
  isVertical ? 'overflow-hidden h-full inline-block' : 'overflow-x-hidden',
  '[--logoloop-gap:32px]',
  '[--logoloop-logoHeight:28px]',
  '[--logoloop-fadeColorAuto:#0a0a0a]',
  scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
  className
);

// Track container classes
export const getTrackClasses = (isVertical: boolean): string => cx(
  'flex will-change-transform select-none relative z-0',
  'motion-reduce:transform-none',
  isVertical ? 'flex-col h-max w-full' : 'flex-row w-max'
);

// List classes
export const getListClasses = (isVertical: boolean): string => cx(
  'flex items-center',
  isVertical && 'flex-col'
);

// List item classes
export const getListItemClasses = (isVertical: boolean, scaleOnHover: boolean): string => cx(
  'flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]',
  isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
  scaleOnHover && 'overflow-visible group/item'
);

// Image classes
export const getImageClasses = (scaleOnHover: boolean): string => cx(
  'h-[var(--logoloop-logoHeight)] w-auto block object-contain',
  '[-webkit-user-drag:none] pointer-events-none',
  '[image-rendering:-webkit-optimize-contrast]',
  'motion-reduce:transition-none',
  'grayscale brightness-75 hover:grayscale-0 hover:brightness-100',
  'transition-all duration-300',
  scaleOnHover && 'group-hover/item:scale-110'
);

// Node content classes
export const getNodeClasses = (scaleOnHover: boolean): string => cx(
  'inline-flex items-center',
  'motion-reduce:transition-none',
  'grayscale brightness-75 hover:grayscale-0 hover:brightness-100',
  'transition-all duration-300',
  scaleOnHover && 'group-hover/item:scale-110'
);

// Link classes
export const getLinkClasses = (): string => cx(
  'inline-flex items-center no-underline rounded',
  'transition-opacity duration-200 ease-linear',
  'hover:opacity-80',
  'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
);

// Fade overlay classes - Horizontal
export const getFadeLeftClasses = (): string => cx(
  'pointer-events-none absolute inset-y-0 left-0 z-10',
  'w-[clamp(24px,8%,120px)]',
  'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
);

export const getFadeRightClasses = (): string => cx(
  'pointer-events-none absolute inset-y-0 right-0 z-10',
  'w-[clamp(24px,8%,120px)]',
  'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
);

// Fade overlay classes - Vertical
export const getFadeTopClasses = (): string => cx(
  'pointer-events-none absolute inset-x-0 top-0 z-10',
  'h-[clamp(24px,8%,120px)]',
  'bg-[linear-gradient(to_bottom,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
);

export const getFadeBottomClasses = (): string => cx(
  'pointer-events-none absolute inset-x-0 bottom-0 z-10',
  'h-[clamp(24px,8%,120px)]',
  'bg-[linear-gradient(to_top,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
);
