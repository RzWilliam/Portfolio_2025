import reactLogo from '../assets/logos/react.png';
import typescriptLogo from '../assets/logos/typescript.png';
import nextjsLogo from '../assets/logos/nextjs.png';
import tailwindLogo from '../assets/logos/tailwind.png';
import nodejsLogo from '../assets/logos/nodejs.png';
import symfonyLogo from '../assets/logos/symfony.png';
import socketioLogo from '../assets/logos/socketio.png';
import phpLogo from '../assets/logos/php.png';
import gitLogo from '../assets/logos/git.png';
import figmaLogo from '../assets/logos/figma.png';
import supabaseLogo from '../assets/logos/supabase.png';

export interface PortfolioEntry {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  category:
    | 'project'
    | 'skill'
    | 'experience'
    | 'contact'
    | 'skill-category'
    | 'skill-item';
  position: { x: number; y: number }; // Position du nœud (obligatoire)
  technologies?: string[];
  link?: string;
  logo?: string; // Chemin vers le logo (pour les skill-item)
  skillCategory?: 'frontend' | 'backend' | 'other'; // Pour organiser les skills
  isClickable?: boolean; // Pour définir si le nœud est cliquable ou non (par défaut true)
  email?: string; // Pour le contact
  github?: string; // Pour le contact
  linkedin?: string; // Pour le contact
}

export const portfolioEntries: PortfolioEntry[] = [
  // Nœud central
  {
    id: '1',
    title: 'À Propos',
    description: 'Développeur Full-Stack passionné',
    detailedDescription:
      "Développeur Full-Stack avec 3+ années d'expérience en React, TypeScript, Node.js et bases de données. Passionné par l'innovation et les technologies modernes.",
    category: 'experience',
    position: { x: 0, y: 0 },
  },

  // Catégories de compétences (nœuds moyens)
  {
    id: 'frontend-cat',
    title: 'Frontend',
    description: '',
    detailedDescription: '',
    category: 'skill-category',
    skillCategory: 'frontend',
    isClickable: false, // Catégorie non cliquable
    position: { x: 750, y: -100 },
  },
  {
    id: 'backend-cat',
    title: 'Backend',
    description: '',
    detailedDescription: '',
    category: 'skill-category',
    skillCategory: 'backend',
    isClickable: false, // Catégorie non cliquable
    position: { x: 850, y: 40 },
  },
  {
    id: 'other-cat',
    title: 'Autres',
    description: '',
    detailedDescription: '',
    category: 'skill-category',
    skillCategory: 'other',
    isClickable: false, // Catégorie non cliquable
    position: { x: 750, y: 180 },
  },

  // Skills Frontend (petits nœuds ronds avec logos)
  {
    id: 'skill-react',
    title: 'React',
    description: 'Library UI moderne',
    detailedDescription:
      'Maîtrise avancée de React 18+, hooks, context, et écosystème.',
    category: 'skill-item',
    skillCategory: 'frontend',
    logo: reactLogo,
    position: { x: 600, y: -250 },
  },
  {
    id: 'skill-typescript',
    title: 'TypeScript',
    description: 'JavaScript typé',
    detailedDescription:
      'Expertise en TypeScript pour des applications robustes et maintenables.',
    category: 'skill-item',
    skillCategory: 'frontend',
    logo: typescriptLogo,
    position: { x: 700, y: -300 },
  },
  {
    id: 'skill-nextjs',
    title: 'Next.js',
    description: 'Framework React',
    detailedDescription:
      "Développement d'applications SSR/SSG avec Next.js 14+.",
    category: 'skill-item',
    skillCategory: 'frontend',
    logo: nextjsLogo,
    position: { x: 800, y: -300 },
  },
  {
    id: 'skill-tailwind',
    title: 'Tailwind CSS',
    description: 'CSS utility-first',
    detailedDescription: 'Design rapide et responsive avec Tailwind CSS.',
    category: 'skill-item',
    skillCategory: 'frontend',
    logo: tailwindLogo,
    position: { x: 900, y: -250 },
  },

  // Skills Backend (petits nœuds ronds avec logos)
  {
    id: 'skill-nodejs',
    title: 'Node.js',
    description: 'JavaScript serveur',
    detailedDescription:
      'Développement backend avec Node.js et écosystème npm.',
    category: 'skill-item',
    skillCategory: 'backend',
    logo: nodejsLogo,
    position: { x: 1000, y: -100 },
  },
  {
    id: 'skill-symfony',
    title: 'Symfony',
    description: 'Framework PHP',
    detailedDescription:
      "Développement d'applications web robustes avec Symfony.",
    category: 'skill-item',
    skillCategory: 'backend',
    logo: symfonyLogo,
    position: { x: 1100, y: -50 },
  },
  {
    id: 'skill-socketio',
    title: 'Socket.IO',
    description: 'WebSockets temps réel',
    detailedDescription:
      'Communication temps réel bidirectionnelle avec Socket.IO.',
    category: 'skill-item',
    skillCategory: 'backend',
    logo: socketioLogo,
    position: { x: 1100, y: 75 },
  },
  {
    id: 'skill-php',
    title: 'PHP',
    description: 'Langage serveur',
    detailedDescription:
      'Développement backend avec PHP pour des applications web dynamiques.',
    category: 'skill-item',
    skillCategory: 'backend',
    logo: phpLogo,
    position: { x: 1000, y: 150 },
  },

  // Skills Autres (petits nœuds ronds avec logos)
  {
    id: 'skill-git',
    title: 'Git',
    description: 'Contrôle de version',
    detailedDescription: 'Gestion de code source et collaboration avec Git.',
    category: 'skill-item',
    skillCategory: 'other',
    logo: gitLogo,
    position: { x: 650, y: 280 },
  },
  {
    id: 'skill-figma',
    title: 'Figma',
    description: 'Design UI/UX',
    detailedDescription: "Conception d'interfaces et prototypage avec Figma.",
    category: 'skill-item',
    skillCategory: 'other',
    logo: figmaLogo,
    position: { x: 750, y: 330 },
  },
  {
    id: 'skill-supabase',
    title: 'Supabase',
    description: 'Backend as a Service',
    detailedDescription:
      "Développement d'applications avec Supabase pour une gestion simplifiée de la base de données.",
    category: 'skill-item',
    skillCategory: 'other',
    logo: supabaseLogo,
    position: { x: 850, y: 280 },
  },
];
