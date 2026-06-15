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
  websiteLink?: string;
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
      shortDescription: 'Platform kemitraan kuliner modern dengan Astro untuk performa lightning-fast, Tailwind CSS untuk styling scalable, dan AstraDB untuk backend database.',
      fullDescription: 'SagawaGroup.id — Platform kemitraan kuliner modern yang saya bangun menggunakan Astro untuk performa lightning-fast, Tailwind CSS untuk desain yang konsisten dan scalable, serta AstraDB sebagai database untuk konten dinamis. Website ini menampilkan berbagai peluang bisnis (RM Mas Gaw, Warnas, Dapur Supply Chain) melalui card grid responsif, gallery interaktif dengan lazy loading, dan video showcase yang memandu pengguna dari penasaran hingga siap bermitra — semuanya dengan loading instan berkat static site generation.\n\nPerjalanan saya dimulai dari keyakinan bahwa teknologi seharusnya terasa invisible — pengguna fokus pada tujuan, bukan kompleksitas sistem. Saya menggabungkan Tailwind CSS untuk rapid prototyping, AstraDB untuk manajemen konten yang fleksibel, dan Astro untuk optimasi performa maksimal. Bagi saya, Frontend Development adalah tentang membangun jembatan antara bisnis dan manusia dengan teknologi yang tepat, menciptakan pengalaman digital yang informatif, inspiratif, dan mudah dikelola.',
      image: '/Assets/Project/sagawa.project1.png',
      link: '/project/1',
      status: 'completed' as const,
      tools: [
        { name: 'Astro', icon: '/Assets/Icon/astro-icon-dark.png' },
        { name: 'Tailwind', icon: '/Assets/Icon/tailwindcss.png' },
        { name: 'AstraDB', icon: '/Assets/Icon/astradb.png' },
      ],
      websiteLink: 'https://sagawagroup.id/',
      stats: [
        { value: '8+', label: 'PAGES' },
        { value: '1.5', label: 'MONTHS DURATION' },
        { value: '100%', label: 'SATISFACTION' },
      ],
      gallery: [
        { src: '/Assets/Project/sagawa.project1.png', alt: 'SagawaGroup Homepage - Hero Section' },
        { src: '/Assets/Project/sagawa.project2.png', alt: 'SagawaGroup Tentang Kami - Company Profile' },
        { src: '/Assets/Project/sagawa.project3.png', alt: 'SagawaGroup Visi Misi & Target Pasar' },
        { src: '/Assets/Project/sagawa.project4.png', alt: 'SagawaGroup Peluang Kemitraan' },
        { src: '/Assets/Project/sagawa.project5.png', alt: 'SagawaGroup Menu Pilihan Terbaik' },
        { src: '/Assets/Project/sagawa.project6.png', alt: 'SagawaGroup Gallery Interaktif' },
        { src: '/Assets/Project/sagawa.project7.png', alt: 'SagawaGroup Kontak & Informasi' },
      ],
    },
    {
      id: '2',
      title: 'Website AwaConstruction',
      category: 'UI/UX DESIGN',
      shortDescription: 'Platform digital yang dirancang di Figma untuk membangun kepercayaan calon klien melalui visual storytelling yang transparan dan autentik.',
      fullDescription: 'AWA Construction — Platform digital yang saya rancang di Figma untuk membangun kepercayaan calon klien melalui visual storytelling yang transparan dan autentik. Saya mengembangkan three-pillar experience: Trust Building dengan narasi perusahaan yang humanis, Service Clarity melalui katalog renovasi yang terstruktur dengan visualisasi alur kerja, dan Social Proof lewat galeri proyek before-after yang detail. Setiap elemen — dari masonry grid portfolio dengan overlay informasi teknis (luas bangunan, durasi, budget) hingga testimonial cards dengan foto klien nyata dan signature — dirancang untuk menjawab pertanyaan kritis calon klien sebelum mereka menghubungi tim sales.\n\nSaya memilih earthy color palette (warm neutrals dengan accent terracotta) yang merefleksikan kehangatan industri konstruksi tanpa kehilangan profesionalisme, typography sans-serif yang highly legible untuk konten teknis panjang, serta micro-interactions subtle seperti progress bar pada project timeline dan hover effects pada service cards. Seluruh desain diwujudkan dalam Figma dengan auto layout components, design tokens yang konsisten, dan interactive prototypes untuk validasi user flow sebelum development — menghasilkan platform yang tidak hanya memamerkan kualitas pekerjaan AWA Construction, tetapi juga memandu calon klien secara natural dari keingintahuan hingga keputusan bermitra.',
      image: '/Assets/Project/awa.project1.png',
      link: '/project/2',
      status: 'completed' as const,
      tools: [
        { name: 'Figma', icon: '/Assets/Icon/figma.png' },
      ],
      websiteLink: 'https://renovasi.sagawagroup.id/',
      stats: [
        { value: '10+', label: 'PAGES' },
        { value: '2', label: 'MONTHS DURATION' },
        { value: '100%', label: 'SATISFACTION' },
      ],
      gallery: [
        { src: '/Assets/Project/awa.project1.png', alt: 'AWA Construction - Proyek Detail' },
        { src: '/Assets/Project/awa.project2.png', alt: 'AWA Construction - Who We Are' },
        { src: '/Assets/Project/awa.project3.png', alt: 'AWA Construction - Layanan Kami' },
        { src: '/Assets/Project/awa.project4.png', alt: 'AWA Construction - Hubungi Kami' },
        { src: '/Assets/Project/awa.project5.png', alt: 'AWA Construction - Proyek Unggulan' },
      ],
    },
    {
      id: '4',
      title: 'Website Freelinkd',
      category: 'WEB DEVELOPMENT',
      shortDescription: 'Platform freelancer marketplace yang menghubungkan klien dengan freelancer profesional di berbagai bidang.',
      fullDescription: 'Website platform freelancer yang memungkinkan pengguna untuk mencari dan menyewa jasa freelancer profesional. Dilengkapi dengan sistem review, portfolio showcase, chat real-time, dan sistem pembayaran yang aman.',
      image: '/Assets/Project/freelinkd.project1.png',
      link: '/project/4',
      status: 'on-process' as const,
      tools: [
        { name: 'Next.js', icon: '/Assets/Icon/nextjs_icon_dark (1).png' },
        { name: 'Tailwind', icon: '/Assets/Icon/tailwindcss.png' },
        { name: 'TypeScript', icon: '/Assets/Icon/typescript.png' },
        { name: 'PostgreSQL', icon: '/Assets/Icon/postgresql.png' },
      ],
      websiteLink: 'https://freelinkd.com/',
      stats: [
        { value: '20+', label: 'PAGES' },
        { value: '4', label: 'MONTHS DURATION' },
        { value: '100%', label: 'SATISFACTION' },
      ],
      gallery: [
        { src: '/Assets/Project/freelinkd.project1.png', alt: 'Website Freelinkd Homepage' },
        { src: '/Assets/Project/freelinkd.project2.png', alt: 'Website Freelinkd About & Chatbot' },
        { src: '/Assets/Project/freelinkd.project3.png', alt: 'Website Freelinkd Freelancer Portfolio' },
        { src: '/Assets/Project/freelinkd.project4.png', alt: 'Website Freelinkd Featured Sections' },
        { src: '/Assets/Project/freelinkd.project5.png', alt: 'Website Freelinkd E-Learning Landing' },
      ],
    },
    {
      id: '5',
      title: 'Full Stack Developer Intern - PT Adiwarna Pratama',
      category: 'FULL-STACK DEVELOPMENT',
      shortDescription: 'Sistem absensi digital full-stack terintegrasi modul HR untuk otomatisasi payroll karyawan secara real-time.',
      fullDescription: 'PT Adiwarna Pratama — Mengembangkan sistem absensi digital full-stack yang terintegrasi dengan modul HR untuk mengoptimalkan pelacakan dan manajemen karyawan secara real-time. Mengotomatisasi alur kerja perhitungan payroll yang kompleks sesuai regulasi perusahaan, berhasil mengurangi waktu pemrosesan manual hingga 80% dan menghilangkan kesalahan perhitungan hingga 0%. Mengelola deployment dan keamanan server melalui cPanel dengan konfigurasi optimal, memastikan sistem beroperasi dengan uptime 99% dan perlindungan data yang robust. Solusi ini meningkatkan efisiensi operasional HR secara signifikan.',
      image: '/Assets/Project/adiwarna.project1.png',
      link: '/project/5',
      status: 'completed' as const,
      tools: [
        { name: 'PHP', icon: '/Assets/Icon/php.png' },
        { name: 'Laravel', icon: '/Assets/Icon/laravel.png' },
        { name: 'cPanel', icon: '/Assets/Icon/cP_orange.png' },
        { name: 'MySQL', icon: '/Assets/Icon/mysql-icon-dark.png' },
      ],
      stats: [
        { value: '80%', label: 'HR MANUAL PROCESS REDUCTION' },
        { value: '99%', label: 'SERVER UPTIME' },
        { value: '100%', label: 'CALCULATION ACCURACY' },
      ],
      gallery: [
        { src: '/Assets/Project/adiwarna.project1.png', alt: 'PT Adiwarna Pratama - Dashboard Overview' },
        { src: '/Assets/Project/adiwarna.project2.png', alt: 'PT Adiwarna Pratama - Kelola Karyawan' },
        { src: '/Assets/Project/adiwarna.project3.png', alt: 'PT Adiwarna Pratama - Laporan Absensi' },
        { src: '/Assets/Project/adiwarna.project4.png', alt: 'PT Adiwarna Pratama - Periode Kerja' },
        { src: '/Assets/Project/adiwarna.project5.png', alt: 'PT Adiwarna Pratama - Jadwal Absensi Karyawan' },
      ],
    },
    {
      id: '6',
      title: 'Full Stack Web Developer Intern - PT Bolia Mitra Utama',
      category: 'WEB DEVELOPMENT',
      shortDescription: 'Merancang dan membangun website korporat responsif dengan Next.js, Tailwind CSS, dan admin dashboard intuitif.',
      fullDescription: 'PT Bolia Mitra Utama — Merancang dan mengembangkan website korporat yang modern dan fully responsive dengan fokus pada user experience yang optimal. Menggunakan Figma untuk menciptakan antarmuka yang bersih dan elegan, kemudian mengimplementasikannya menggunakan Next.js dan Tailwind CSS untuk performa maksimal. Membangun admin dashboard yang intuitif untuk menyederhanakan manajemen konten, memungkinkan tim non-teknis mengelola produk dan konfigurasi situs secara mandiri tanpa coding. Proyek ini berhasil mengurangi waktu update konten hingga 70% dan mencapai skor Google PageSpeed 95+.',
      image: '/Assets/Project/bolia.project1.png',
      link: '/project/6',
      status: 'on-process' as const,
      tools: [
        { name: 'Figma', icon: '/Assets/Icon/figma.png' },
        { name: 'Next.js', icon: '/Assets/Icon/nextjs_icon_dark (1).png' },
        { name: 'Tailwind', icon: '/Assets/Icon/tailwindcss.png' },
        { name: 'TypeScript', icon: '/Assets/Icon/typescript.png' },
        { name: 'GitHub', icon: '/Assets/Icon/github.png' },
      ],
      stats: [
        { value: '70%', label: 'CONTENT UPDATE TIME REDUCTION' },
        { value: '95+', label: 'GOOGLE PAGESPEED' },
        { value: '100%', label: 'RESPONSIVENESS' },
      ],
      gallery: [
        { src: '/Assets/Project/bolia.project1.png', alt: 'PT Bolia Mitra Utama Homepage' },
        { src: '/Assets/Project/bolia.project2.png', alt: 'PT Bolia Mitra Utama Product Catalog' },
        { src: '/Assets/Project/bolia.project3.png', alt: 'PT Bolia Mitra Utama Contact Info' },
        { src: '/Assets/Project/bolia.project4.png', alt: 'PT Bolia Mitra Utama Categories Section' },
        { src: '/Assets/Project/bolia.project5.png', alt: 'PT Bolia Mitra Utama CTA Form' },
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
