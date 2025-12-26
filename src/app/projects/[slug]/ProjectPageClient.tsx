'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useProjectBySlug } from '@/lib/api';
import { GradientText, GlassCard, AnimatedButton } from '@/components/ui';
import { formatDate, cn } from '@/lib/utils';
import { Technology } from '@/types';

export default function ProjectPageClient() {
  const params = useParams();
  const slug = params.slug as string;
  const { data: project, isLoading, error } = useProjectBySlug(slug);

  if (isLoading) {
    return <ProjectSkeleton />;
  }

  if (error || !project) {
    notFound();
  }

  const chipColors = {
    cyan: 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    gradient:
      'bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-white/20 text-white',
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="text-sm uppercase tracking-wider text-cyan-400">
              {project.category.replace('-', ' ')}
            </span>
            {project.completedAt && (
              <span className="text-sm text-white/40">
                {formatDate(project.completedAt)}
              </span>
            )}
            {project.featured && (
              <span className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full text-white">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold mb-6">
            <GradientText>{project.title}</GradientText>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/60 max-w-3xl">
            {project.longDescription || project.description}
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassCard className="overflow-hidden" hoverEffect={false}>
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Project Images Gallery */}
            {project.images && project.images.length > 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-clash font-semibold">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.slice(1).map((img: string, index: number) => (
                    <GlassCard key={index} className="overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${index + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            )}

            {/* About the Project */}
            <div className="space-y-4">
              <h2 className="text-2xl font-clash font-semibold">
                About This Project
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/70 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Technologies */}
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: Technology) => (
                  <span
                    key={tech.name}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-sm font-medium border',
                      chipColors[tech.color]
                    )}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Links */}
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Live Site
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Source Code
                  </a>
                )}
              </div>
            </GlassCard>

            {/* CTA */}
            <GlassCard className="p-6 text-center">
              <p className="text-white/60 mb-4">
                Interested in working together?
              </p>
              <Link href="/contact" className="block">
                <AnimatedButton variant="primary" className="w-full">
                  Get in Touch
                </AnimatedButton>
              </Link>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProjectSkeleton() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 animate-pulse">
        <div className="h-6 w-32 bg-white/10 rounded mb-8" />
        <div className="space-y-4 mb-12">
          <div className="h-4 w-24 bg-white/10 rounded" />
          <div className="h-12 w-96 max-w-full bg-white/10 rounded" />
          <div className="h-6 w-[600px] max-w-full bg-white/10 rounded" />
        </div>
        <div className="aspect-video bg-white/10 rounded-xl mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="h-8 w-48 bg-white/10 rounded" />
            <div className="h-4 w-full bg-white/10 rounded" />
            <div className="h-4 w-full bg-white/10 rounded" />
            <div className="h-4 w-2/3 bg-white/10 rounded" />
          </div>
          <div className="space-y-6">
            <div className="h-40 bg-white/10 rounded-xl" />
            <div className="h-32 bg-white/10 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
