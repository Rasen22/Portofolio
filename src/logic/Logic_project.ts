// Project Logic - Extended
import { Variants } from 'framer-motion';

// ========== TYPES ==========
export interface ProjectTool {
  name: string;
  icon: string;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectGalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  link: string;
  status: 'completed' | 'on-process';
  tools: ProjectTool[];
  stats: ProjectStat[];
  gallery: ProjectGalleryImage[];
}

export type ProjectFilter = 'all' | 'on-process' | 'completed';

// ========== DATA ==========
export const projectData = {
  title: 'Experience &',
  titleAccent: 'Project',
  loadMore: 'LOAD MORE PROJECTS',
  viewMoreDetail: 'View More Detail',
  viewMoreProjects: 'View More Projects',
  backButton: '← Back',
  detailTitle: 'DETAIL SINGKAT PROJEK',
  toolsTitle: 'TOOLS & TECH',
  projects: [
    {
      id: '1',
      title: 'Website SagawaGroup',
      category: 'WEB DEVELOPMENT',
      shortDescription: 'Company profile website untuk SagawaGroup dengan desain modern, animasi smooth, dan tampilan responsif yang profesional.',
      fullDescription: 'Website company profile SagawaGroup yang dibangun dengan teknologi modern. Menampilkan informasi perusahaan, layanan, portfolio, dan kontak dengan desain yang elegan dan user-friendly. Dilengkapi dengan animasi interaktif dan performa optimal.',
      image: '/Assets/Project/project1.png',
      link: '/project/1',
      status: 'completed' as const,
      tools: [
        { name: 'Next.js', icon: '/Assets/Icon/nextjs.png' },
        { name: 'TypeScript', icon: '/Assets/Icon/typescript.png' },
        { name: 'Tailwind', icon: '/Assets/Icon/tailwind.png' },
        { name: 'Framer Motion', icon: '/Assets/Icon/framer.png' },
      ],
      stats: [
        { value: '8+', label: 'PAGES' },
        { value: '1.5', label: 'MONTHS DURATION' },
        { value: '100%', label: 'SATISFACTION' },
      ],
      gallery: [
        { src: '/Assets/Project/project1-1.png', alt: 'SagawaGroup Homepage' },
        { src: '/Assets/Project/project1-2.png', alt: 'SagawaGroup Services' },
      ],
    },
    {
      id: '2',
      title: 'Website AwaConstruction',
      category: 'WEB DEVELOPMENT',
      shortDescription: 'Website profesional untuk perusahaan konstruksi dengan showcase portfolio proyek dan layanan yang lengkap.',
      fullDescription: 'Website company profile untuk AwaConstruction yang menampilkan portfolio proyek konstruksi, layanan yang ditawarkan, dan informasi perusahaan. Desain modern dengan galeri proyek yang interaktif dan form kontak yang terintegrasi.',
      image: '/Assets/Project/project2.png',
      link: '/project/2',
      status: 'completed' as const,
      tools: [
        { name: 'React', icon: '/Assets/Icon/react.png' },
        { name: 'Tailwind', icon: '/Assets/Icon/tailwind.png' },
        { name: 'TypeScript', icon: '/Assets/Icon/typescript.png' },
        { name: 'Node.js', icon: '/Assets/Icon/nodejs.png' },
      ],
      stats: [
        { value: '10+', label: 'PAGES' },
        { value: '2', label: 'MONTHS DURATION' },
        { value: '100%', label: 'SATISFACTION' },
      ],
      gallery: [
        { src: '/Assets/Project/project2-1.png', alt: 'AwaConstruction Homepage' },
      ],
    },
    {
      id: '3',
      title: 'Aplikasi POS Mobile',
      category: 'MOBILE APP DEVELOPMENT',
      shortDescription: 'Sistem Point of Sale berbasis mobile untuk manajemen penjualan, inventory, dan laporan bisnis secara real-time.',
      fullDescription: 'Aplikasi Point of Sale (POS) mobile yang lengkap untuk mengelola transaksi penjualan, manajemen stok, laporan keuangan, dan analitik bisnis. Dilengkapi dengan fitur offline mode, barcode scanner, dan dashboard yang informatif.',
      image: '/Assets/Project/project3.png',
      link: '/project/3',
      status: 'on-process' as const,
      tools: [
        { name: 'React Native', icon: '/Assets/Icon/react.png' },
        { name: 'TypeScript', icon: '/Assets/Icon/typescript.png' },
        { name: 'Firebase', icon: '/Assets/Icon/firebase.png' },
        { name: 'Redux', icon: '/Assets/Icon/redux.png' },
      ],
      stats: [
        { value: '15+', label: 'SCREENS' },
        { value: '3', label: 'MONTHS DURATION' },
        { value: '95%', label: 'SATISFACTION' },
      ],
      gallery: [],
    },
    {
      id: '4',
      title: 'Website Freelinkd',
      category: 'WEB DEVELOPMENT',
      shortDescription: 'Platform freelancer marketplace yang menghubungkan klien dengan freelancer profesional di berbagai bidang.',
      fullDescription: 'Website platform freelancer yang memungkinkan pengguna untuk mencari dan menyewa jasa freelancer profesional. Dilengkapi dengan sistem review, portfolio showcase, chat real-time, dan sistem pembayaran yang aman.',
      image: '/Assets/Project/project4.png',
      link: '/project/4',
      status: 'on-process' as const,
      tools: [
        { name: 'Next.js', icon: '/Assets/Icon/nextjs.png' },
        { name: 'Tailwind', icon: '/Assets/Icon/tailwind.png' },
        { name: 'TypeScript', icon: '/Assets/Icon/typescript.png' },
        { name: 'PostgreSQL', icon: '/Assets/Icon/postgresql.png' },
      ],
      stats: [
        { value: '20+', label: 'PAGES' },
        { value: '4', label: 'MONTHS DURATION' },
        { value: '100%', label: 'SATISFACTION' },
      ],
      gallery: [],
    },
    {
      id: '5',
      title: 'Dashboard Admin',
      category: 'FRONT-END DEVELOPMENT',
      shortDescription: 'Dashboard admin yang komprehensif dengan analitik real-time, manajemen user, dan visualisasi data yang interaktif.',
      fullDescription: 'Dashboard admin modern dengan fitur lengkap untuk mengelola sistem. Termasuk analitik real-time, manajemen pengguna, grafik interaktif, notifikasi, dan laporan yang dapat di-export. Dibangun dengan performa tinggi dan UI yang responsif.',
      image: '/Assets/Project/project5.png',
      link: '/project/5',
      status: 'completed' as const,
      tools: [
        { name: 'React', icon: '/Assets/Icon/react.png' },
        { name: 'TypeScript', icon: '/Assets/Icon/typescript.png' },
        { name: 'Tailwind', icon: '/Assets/Icon/tailwind.png' },
        { name: 'Chart.js', icon: '/Assets/Icon/chartjs.png' },
      ],
      stats: [
        { value: '12+', label: 'SCREENS' },
        { value: '2', label: 'MONTHS DURATION' },
        { value: '100%', label: 'SATISFACTION' },
      ],
      gallery: [
        { src: '/Assets/Project/project5-1.png', alt: 'Dashboard Overview' },
      ],
    },
  ] as Project[],
};

// ========== FILTER LOGIC ==========
export const filterProjects = (projects: Project[], filter: ProjectFilter): Project[] => {
  if (filter === 'all') return projects;
  return projects.filter(project => project.status === filter);
};

export const getProjectById = (id: string): Project | undefined => {
  return projectData.projects.find(project => project.id === id);
};

// ========== ANIMATION VARIANTS ==========
export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  },
};

export const detailVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const toolsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

// ========== HOOKS ==========
export const useProjectLogic = () => {
  return {
    projectData,
    filterProjects,
    getProjectById,
  };
};

export default {
  projectData,
  filterProjects,
  getProjectById,
  sectionVariants,
  cardVariants,
  slideVariants,
  buttonVariants,
  detailVariants,
  toolsVariants,
  useProjectLogic,
};
