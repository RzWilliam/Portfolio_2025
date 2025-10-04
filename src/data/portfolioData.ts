import reactLogo from '../assets/logos/react.webp';
import typescriptLogo from '../assets/logos/typescript.webp';
import nextjsLogo from '../assets/logos/nextjs.webp';
import tailwindLogo from '../assets/logos/tailwind.webp';
import nodejsLogo from '../assets/logos/nodejs.webp';
import symfonyLogo from '../assets/logos/symfony.webp';
import socketioLogo from '../assets/logos/socketio.webp';
import phpLogo from '../assets/logos/php.webp';
import gitLogo from '../assets/logos/git.webp';
import figmaLogo from '../assets/logos/figma.webp';
import supabaseLogo from '../assets/logos/supabase.webp';
import githubLogo from '../assets/logos/github.svg';
import linkedinLogo from '../assets/logos/linkedin.webp';

import MantrackLogo from '../assets/logos/mantrack.webp';
import MantrackPreview from '../assets/projects/mantrack.webp';

import YGOdleLogo from '../assets/logos/ygodle.webp';
import YGOdlePreview from '../assets/projects/ygodle.webp';

import BombermanLogo from '../assets/logos/bomberman.webp';
import BombermanPreview from '../assets/projects/bomberman.webp';

import SolarSystemLogo from '../assets/logos/solar-system.webp';
import SolarSystemPreview from '../assets/projects/solar-system.webp';

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
    | 'category'
    | 'skill-item';
  position: { x: number; y: number }; // Position du nœud (obligatoire)
  technologies?: string[];
  link?: string;
  logo?: string; // Chemin vers le logo (pour les skill-item)
  previewImage?: string; // Image de présentation pour les projets (optionnel)
  repository?: string; // Lien vers le dépôt du projet (optionnel)
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

  // Catégories (nœuds intermédiaires)
  {
    id: 'frontend-cat',
    title: 'Frontend',
    description: '',
    detailedDescription: '',
    category: 'category',
    skillCategory: 'frontend',
    isClickable: false, // Catégorie non cliquable
    position: { x: 600, y: -100 },
  },
  {
    id: 'backend-cat',
    title: 'Backend',
    description: '',
    detailedDescription: '',
    category: 'category',
    skillCategory: 'backend',
    isClickable: false, // Catégorie non cliquable
    position: { x: 750, y: 0 },
  },
  {
    id: 'other-cat',
    title: 'Autres',
    description: '',
    detailedDescription: '',
    category: 'category',
    skillCategory: 'other',
    isClickable: false, // Catégorie non cliquable
    position: { x: 600, y: 100 },
  },

  {
    id: 'projects-cat',
    title: 'Projets',
    description: '',
    detailedDescription: '',
    category: 'category',
    isClickable: false, // Catégorie non cliquable
    position: { x: -600, y: 0 },
  },

  // Contact category (nouveau)
  {
    id: 'contact-cat',
    title: 'Contact',
    description: '',
    detailedDescription: '',
    category: 'category',
    isClickable: false,
    position: { x: 0, y: 320 },
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
    isClickable: false,
    position: { x: 450, y: -200 },
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
    isClickable: false,
    position: { x: 540, y: -300 },
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
    isClickable: false,
    position: { x: 660, y: -300 },
  },
  {
    id: 'skill-tailwind',
    title: 'Tailwind CSS',
    description: 'CSS utility-first',
    detailedDescription: 'Design rapide et responsive avec Tailwind CSS.',
    category: 'skill-item',
    skillCategory: 'frontend',
    logo: tailwindLogo,
    isClickable: false,
    position: { x: 750, y: -200 },
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
    isClickable: false,
    position: { x: 900, y: -100 },
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
    isClickable: false,
    position: { x: 1000, y: -60 },
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
    isClickable: false,
    position: { x: 1000, y: 60 },
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
    isClickable: false,
    position: { x: 900, y: 100 },
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
    isClickable: false,
    position: { x: 500, y: 200 },
  },
  {
    id: 'skill-figma',
    title: 'Figma',
    description: 'Design UI/UX',
    detailedDescription: "Conception d'interfaces et prototypage avec Figma.",
    category: 'skill-item',
    skillCategory: 'other',
    logo: figmaLogo,
    isClickable: false,
    position: { x: 600, y: 250 },
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
    isClickable: false,
    position: { x: 700, y: 200 },
  },
  // Projects (cards)
  {
    id: 'project-mantrack',
    title: 'Mantrack',
    description:
      'Plateforme qui permet de suivre ses lectures de manga, manhwa et manhua.',
    detailedDescription:
      'ManTrack est une plateforme web dédiée aux amateurs de manga, manhwa et manhua, qui permet de gérer sa bibliothèque personnelle, suivre sa progression de lecture et découvrir de nouvelles séries. L’utilisateur peut également ajouter son propre lien de lecture personnalisé pour chaque œuvre, rendant l’expérience totalement adaptée à ses habitudes.',
    category: 'project',
    position: { x: -850, y: -275 },
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Python'],
    link: 'https://www.mantrack.app/',
    logo: MantrackLogo,
    previewImage: MantrackPreview,
  },
  {
    id: 'project-bomberman',
    title: 'Bomberman Multiplayer',
    description: 'Jeu multijoueur en temps réel inspiré de Bomberman.',
    detailedDescription:
      'Bomberman Multiplayer est un jeu multijoueur en temps réel où les joueurs s’affrontent dans des arènes, posant des bombes pour détruire des obstacles et éliminer leurs adversaires.',
    category: 'project',
    position: { x: -950, y: -100 },
    technologies: ['React', 'Socket.IO', 'Node.js', 'Phaser'],
    link: 'https://bomberman-multiplayer.vercel.app/',
    logo: BombermanLogo,
    previewImage: BombermanPreview,
  },
  {
    id: 'project-solar-system',
    title: 'Solar System Explorer',
    description: 'Explorez le système solaire en 3D interactif.',
    detailedDescription:
      "Solar System Explorer est une application web interactive qui permet aux utilisateurs d'explorer le système solaire en 3D. En utilisant des technologies modernes comme React et Three.js, l'application offre une expérience immersive où les utilisateurs peuvent naviguer entre les planètes, découvrir des informations fascinantes sur chacune d'elles, et visualiser leurs orbites en temps réel. C'est un outil éducatif parfait pour les passionnés d'astronomie de tous âges.",
    category: 'project',
    position: { x: -950, y: 100 },
    technologies: ['Three.js', 'React', 'TypeScript', 'Tailwind'],
    link: 'https://solar-system-sand-six.vercel.app/',
    logo: SolarSystemLogo,
    previewImage: SolarSystemPreview,
  },
    {
    id: 'project-ygodle',
    title: 'YGOdle',
    description: 'Jeu quotidien de devinette de cartes Yu-Gi-Oh!',
    detailedDescription:
      'YGOdle est un jeu en ligne quotidien inspiré du principe de Wordle, mais adapté à l’univers Yu-Gi-Oh!. Chaque jour, les joueurs doivent deviner une carte Yu-Gi-Oh! en un nombre limité d’essais, en s’appuyant sur des indices comme l’attribut, le type, l’attaque, la défense ou encore l’archétype. Le projet combine base de données, logique de jeu et interface interactive, offrant une expérience à la fois ludique et compétitive pour les passionnés de Yu-Gi-Oh!.',
    category: 'project',
    position: { x: -850, y: 275 },
    technologies: ['React', 'Supabase', 'TypeScript', 'Tailwind'],
    link: 'https://www.ygodle.net',
    logo: YGOdleLogo,
    previewImage: YGOdlePreview,
  },
  // Contacts (liés à la catégorie contact)
  {
    id: 'contact-email',
    title: 'Email',
    description: '',
    detailedDescription: '',
    category: 'contact',
    position: { x: 0, y: 560 },
    email: 'williamrodriguez0621@gmail.com',
    isClickable: true,
  },
  {
    id: 'contact-github',
    title: 'GitHub',
    description: '',
    detailedDescription: '',
    category: 'contact',
    position: { x: -120, y: 460 },
    github: 'https://github.com/RzWilliam',
    isClickable: true,
    logo: githubLogo,
  },
  {
    id: 'contact-linkedin',
    title: 'LinkedIn',
    description: '',
    detailedDescription: '',
    category: 'contact',
    position: { x: 120, y: 460 },
    linkedin: 'https://www.linkedin.com/in/william-rodriguez-6588b1207',
    isClickable: true,
    logo: linkedinLogo,
  },
];
