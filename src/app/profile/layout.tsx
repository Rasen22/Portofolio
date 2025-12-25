import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Learn more about my background, skills, and experience as a full-stack developer and UI/UX designer.',
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
