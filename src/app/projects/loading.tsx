import { ProjectCardSkeleton } from '@/components/ui';

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header skeleton */}
        <div className="text-center mb-12 animate-pulse">
          <div className="h-4 w-24 bg-white/10 rounded mx-auto mb-4" />
          <div className="h-12 w-80 bg-white/10 rounded mx-auto mb-4" />
          <div className="h-6 w-96 max-w-full bg-white/10 rounded mx-auto" />
        </div>

        {/* Filter skeleton */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-pulse">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-28 bg-white/10 rounded-full" />
          ))}
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
