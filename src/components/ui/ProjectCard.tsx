'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import GlassCard from './GlassCard';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const chipColors = {
    cyan: 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    gradient:
      'bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-white/20 text-white',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} project`}>
        <GlassCard
          className="group h-full cursor-pointer"
          glowColor={project.featured ? 'gradient' : 'cyan'}
        >
          {/* Image container */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
            
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-xs font-semibold text-white">
                Featured
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Category */}
            <span className="text-xs uppercase tracking-wider text-cyan-400/80">
              {project.category.replace('-', ' ')}
            </span>

            {/* Title */}
            <h3 className="text-xl font-clash font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/60 line-clamp-2">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech.name}
                  className={cn(
                    'px-3 py-1 rounded-full text-xs font-medium border',
                    chipColors[tech.color]
                  )}
                >
                  {tech.name}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 rounded-full text-xs font-medium border border-white/20 text-white/60">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* View project link */}
            <div className="flex items-center gap-2 pt-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>View Project</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  );
}

// Skeleton for loading state
export function ProjectCardSkeleton() {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-video bg-white/10" />
      
      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        <div className="h-3 w-20 bg-white/10 rounded" />
        <div className="h-6 w-3/4 bg-white/10 rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-white/10 rounded" />
          <div className="h-4 w-2/3 bg-white/10 rounded" />
        </div>
        <div className="flex gap-2 pt-2">
          <div className="h-6 w-16 bg-white/10 rounded-full" />
          <div className="h-6 w-20 bg-white/10 rounded-full" />
          <div className="h-6 w-14 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  );
}
