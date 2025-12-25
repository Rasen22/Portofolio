'use client';

import { useQuery } from '@tanstack/react-query';
import { Project, ApiResponse, ContactFormData } from '@/types';
import { MOCK_PROJECTS } from './constants';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Projects API
export const fetchProjects = async (): Promise<Project[]> => {
  // Simulate API call - replace with actual API endpoint
  await delay(1000);
  
  // In production, this would be:
  // const res = await fetch('/api/projects');
  // if (!res.ok) throw new Error('Failed to fetch projects');
  // return res.json();
  
  return MOCK_PROJECTS;
};

export const fetchProjectBySlug = async (slug: string): Promise<Project | null> => {
  await delay(800);
  
  // In production:
  // const res = await fetch(`/api/projects/${slug}`);
  // if (!res.ok) throw new Error('Failed to fetch project');
  // return res.json();
  
  return MOCK_PROJECTS.find(p => p.slug === slug) || null;
};

export const fetchFeaturedProjects = async (): Promise<Project[]> => {
  await delay(600);
  return MOCK_PROJECTS.filter(p => p.featured);
};

// React Query hooks
export const useProjectsData = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useProjectBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: () => fetchProjectBySlug(slug),
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
  });
};

export const useFeaturedProjects = () => {
  return useQuery({
    queryKey: ['projects', 'featured'],
    queryFn: fetchFeaturedProjects,
    staleTime: 1000 * 60 * 5,
  });
};

// Contact form submission
export const submitContactForm = async (
  data: ContactFormData
): Promise<ApiResponse<{ messageId: string }>> => {
  await delay(1500);
  
  // In production:
  // const res = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // if (!res.ok) throw new Error('Failed to submit form');
  // return res.json();
  
  // Simulate success
  return {
    data: { messageId: `msg_${Date.now()}` },
    success: true,
    message: 'Message sent successfully!',
  };
};
