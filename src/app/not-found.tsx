import Link from 'next/link';
import { GradientText, AnimatedButton } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="relative">
          <span className="text-[150px] md:text-[200px] font-clash font-bold text-white/5 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <GradientText className="text-6xl md:text-7xl font-clash font-bold">
              404
            </GradientText>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-clash font-semibold text-white">
            Page Not Found
          </h1>
          <p className="text-white/60">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/">
            <AnimatedButton variant="primary">Back to Home</AnimatedButton>
          </Link>
          <Link href="/projects">
            <AnimatedButton variant="secondary">View Projects</AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
