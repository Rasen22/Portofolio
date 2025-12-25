import { GlassCardSkeleton } from '@/components/ui';

export default function Loading() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero skeleton */}
        <div className="flex flex-col items-center text-center space-y-8 py-20 animate-pulse">
          <div className="h-8 w-32 bg-white/10 rounded-full" />
          <div className="space-y-4">
            <div className="h-12 w-96 max-w-full bg-white/10 rounded-lg mx-auto" />
            <div className="h-12 w-80 max-w-full bg-white/10 rounded-lg mx-auto" />
          </div>
          <div className="h-6 w-[500px] max-w-full bg-white/10 rounded-lg" />
          <div className="flex gap-4">
            <div className="h-12 w-32 bg-white/10 rounded-lg" />
            <div className="h-12 w-32 bg-white/10 rounded-lg" />
          </div>
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
          {[1, 2, 3].map((i) => (
            <GlassCardSkeleton key={i} className="h-96" />
          ))}
        </div>
      </div>
    </div>
  );
}
