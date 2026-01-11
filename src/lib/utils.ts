import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Combine class names with tailwind merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date to readable string
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
  });
}

// Slugify text
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Truncate text
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

// Debounce function
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

// Scroll to element
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
