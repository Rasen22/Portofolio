'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <motion.div
        className="text-center space-y-6 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-accent">
            Something went wrong!
          </h1>
          <p className="text-primary/70">
            We encountered an unexpected error. Please try again or return to the homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-lg font-medium bg-accent text-background hover:bg-accent/90 transition-all duration-300"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-6 py-3 rounded-lg font-medium bg-secondary text-primary hover:bg-secondary/80 transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </motion.div>
    </div>
  );
}
