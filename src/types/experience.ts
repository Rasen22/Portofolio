// Experience/Timeline Types

export interface Milestone {
  id: string;
  date: string;
  month: string;
  year: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  isOngoing?: boolean;
  position: 'left' | 'right';
}

export interface TimelineData {
  header: {
    title: string;
    subtitle: string;
  };
  milestones: Milestone[];
}

export interface MilestoneCardProps {
  milestone: Milestone;
  index: number;
}

export interface TimelineNodeProps {
  isOngoing?: boolean;
  position: 'left' | 'right';
}
