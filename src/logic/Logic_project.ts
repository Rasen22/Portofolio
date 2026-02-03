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
      shortDescription: 'Platform kemitraan kuliner modern dengan Astro untuk performa lightning-fast, Tailwind CSS untuk styling scalable, dan AstraDB untuk backend database.',
      fullDescription: 'SagawaGroup.id — Platform kemitraan kuliner modern yang saya bangun menggunakan Astro untuk performa lightning-fast, Tailwind CSS untuk desain yang konsisten dan scalable, serta AstraDB sebagai database untuk konten dinamis. Website ini menampilkan berbagai peluang bisnis (RM Mas Gaw, Warnas, Dapur Supply Chain) melalui card grid responsif, gallery interaktif dengan lazy loading, dan video showcase yang memandu pengguna dari penasaran hingga siap bermitra — semuanya dengan loading instan berkat static site generation.\n\nPerjalanan saya dimulai dari keyakinan bahwa teknologi seharusnya terasa invisible — pengguna fokus pada tujuan, bukan kompleksitas sistem. Saya menggabungkan Tailwind CSS untuk rapid prototyping, AstraDB untuk manajemen konten yang fleksibel, dan Astro untuk optimasi performa maksimal. Bagi saya, Frontend Development adalah tentang membangun jembatan antara bisnis dan manusia dengan teknologi yang tepat, menciptakan pengalaman digital yang informatif, inspiratif, dan mudah dikelola.',
      image: '/Assets/Project/sagawa.project1.png',
      link: '/project/1',
      status: 'completed' as const,
      tools: [
        { name: 'Astro', icon: '/Assets/Icon/astro.png' },
        { name: 'Tailwind', icon: '/Assets/Icon/tailwind.png' },
        { name: 'AstraDB', icon: '/Assets/Icon/astradb.png' },
      ],
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
      image: '/Assets/Project/project2.png',
      link: '/project/2',
      status: 'completed' as const,
      tools: [
        { name: 'Figma', icon: '/Assets/Icon/figma.png' },
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
      shortDescription: 'Aplikasi Point of Sale untuk operasional F&B Sagawa Group dengan fokus pada kecepatan dan akurasi transaksi di lingkungan ritel yang dinamis.',
      fullDescription: 'POS Sagawa — Aplikasi Point of Sale yang saya rancang untuk operasional F&B Sagawa Group dengan fokus pada kecepatan dan akurasi transaksi di lingkungan ritel yang dinamis. Melalui antarmuka minimalis yang dibangun di Figma, saya menyusun informasi kritis dalam layout three-panel intuitif: menu penjualan dengan kategori yang dapat discroll cepat, real-time payment summary dengan visual breakdown pajak dan diskon, serta quick-access ke stok bahan baku yang terintegrasi langsung dengan setiap item menu. Setiap micro-interaction — dari color-coded stock alerts (hijau untuk cukup, oranye untuk menipis, merah untuk habis) hingga one-tap payment shortcuts — dirancang untuk meminimalkan kesalahan manusia dan mempercepat proses checkout hingga 40%.\n\nSaya menerapkan role-based design system dengan earthy palette yang konsisten dengan brand Sagawa, namun dengan kontras tinggi pada elemen kritis seperti tombol total dan status stok untuk visibility di bawah pencahayaan toko yang beragam. Fitur multi-kasir diwujudkan melalui seamless account switching dengan avatar identification, session timeout otomatis untuk keamanan, dan personalized dashboard yang menampilkan performance metrics masing-masing kasir. Hasilnya adalah sistem POS yang tidak hanya memproses transaksi, tetapi juga menjadi tools manajemen operasional yang memungkinkan supervisor memantau stok, penjualan, dan produktivitas tim secara real-time — semua dalam satu antarmuka yang dapat dipelajari dalam 15 menit oleh kasir baru.',
      image: '/Assets/Project/project3.png',
      link: '/project/3',
      status: 'on-process' as const,
      tools: [
        { name: 'Dart', icon: '/Assets/Icon/dart.png' },
        { name: 'Flutter', icon: '/Assets/Icon/flutter.png' },
        { name: 'Figma', icon: '/Assets/Icon/figma.png' },
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
