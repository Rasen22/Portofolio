import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}

export function getTechColor(techName: string): 'cyan' | 'purple' | 'gradient' {
  const cyanTechs = ['figma', 'tailwind', 'css', 'react', 'next.js', 'typescript', 'postgresql'];
  const purpleTechs = ['framer motion', 'node.js', 'python', 'firebase', 'graphql', 'stripe'];
  
  const lowerName = techName.toLowerCase();
  
  if (cyanTechs.some(tech => lowerName.includes(tech))) return 'cyan';
  if (purpleTechs.some(tech => lowerName.includes(tech))) return 'purple';
  return 'gradient';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

export function getRandomDelay(min: number = 0, max: number = 0.5): number {
  return Math.random() * (max - min) + min;
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
