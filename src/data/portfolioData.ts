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

import forinovLogo from '../assets/logos/forinov.webp';
import lamuseeLogo from '../assets/logos/lamusee.webp';
import vinciConstructionLogo from '../assets/logos/vinci-construction.webp';

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
    | 'skill-item'
    | 'autre';
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
  cv?: { label: string; link: string }; // Objet optionnel pour afficher un bouton vers le CV
  poste?: string; // Pour les expériences, le poste occupé
  typeExpérience?:
    | 'Stage'
    | 'Alternance'
    | 'Emploi'
    | 'Freelance'
    | 'Stage Alterné'
    | 'Autre'; // Type d'expérience (stage, alternance, emploi, freelance, autre
  duree?: string; // Durée de l'expérience ou du projet
}

export const portfolioEntries: PortfolioEntry[] = [
  // Nœud central
  {
    id: '1',
    title: 'Bonjour,',
    description: 'Développeur Full-Stack passionné',
    detailedDescription: `👋 Je m'appelle William Rodriguez.
  
Je suis un jeune développeur web, fraîchement diplômé de l’IIM, passionné par tout ce qui touche à la création et à la technologie. Ce que j’aime dans ce métier, c’est la possibilité de donner vie à des idées, de passer d’un simple concept à quelque chose de concret, utile et agréable à utiliser. J’accorde une grande importance au sens du détail et à la cohérence, que ce soit dans le design, la logique ou l’expérience utilisateur.

Dynamique et curieux, j’aime apprendre de nouvelles choses, tester, expérimenter et comprendre comment améliorer ce que je fais. Chaque projet est pour moi une occasion de progresser, de relever de nouveaux défis et de repousser un peu plus mes limites. J’aime travailler dans des environnements où règnent la collaboration, la bonne entente et la volonté d’avancer ensemble.

En dehors du développement, je suis passionné par le football, les animes et les mangas. Ces univers m’inspirent au quotidien, que ce soit pour leur créativité, leur sens du rythme ou leur capacité à raconter des histoires. Ils m’aident à garder un esprit ouvert et à toujours trouver de nouvelles sources de motivation.

Aujourd’hui, je cherche avant tout à évoluer dans un cadre qui me permettra de continuer à apprendre, à créer et à m’exprimer à travers des projets qui ont du sens.
`,
    cv: {
      label: 'Voir mon CV',
      link: '/CV_William_Rodriguez.pdf',
    },
    category: 'autre',
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
    position: { x: 500, y: -100 },
  },
  {
    id: 'backend-cat',
    title: 'Backend',
    description: '',
    detailedDescription: '',
    category: 'category',
    skillCategory: 'backend',
    isClickable: false, // Catégorie non cliquable
    position: { x: 650, y: 0 },
  },
  {
    id: 'other-cat',
    title: 'Autres',
    description: '',
    detailedDescription: '',
    category: 'category',
    skillCategory: 'other',
    isClickable: false, // Catégorie non cliquable
    position: { x: 500, y: 100 },
  },

  {
    id: 'projects-cat',
    title: 'Projets',
    description: '',
    detailedDescription: '',
    category: 'category',
    isClickable: false, // Catégorie non cliquable
    position: { x: -400, y: 0 },
  },
  {
    id: 'contact-cat',
    title: 'Contacts',
    description: '',
    detailedDescription: '',
    category: 'category',
    isClickable: false,
    position: { x: 0, y: 320 },
  },
  {
    id: 'experience-cat',
    title: 'Expériences',
    description: '',
    detailedDescription: '',
    category: 'category',
    isClickable: false,
    position: { x: 0, y: -320 },
  },

  // Expériences :
  {
    id: 'exp-vinci',
    title: 'VINCI Construction SI',
    poste: 'Développeur stagiaire au sein d’une digital factory',
    description: 'Gestion & Intégration de contenus pour applications internes',
    detailedDescription: `Lors de mon stage chez VINCI Construction, j'ai eu l'opportunité de travailler sur le développement d'outils web internes visant à améliorer la gestion des opérations quotidiennes. J'ai collaboré avec une équipe dynamique pour concevoir et implémenter des solutions adaptées aux besoins spécifiques de l'entreprise.`,
    category: 'experience',
    position: { x: -200, y: -470 },
    logo: vinciConstructionLogo,
    typeExpérience: 'Stage',
    duree: 'Juin 2022 - Août 2022',
  },

  {
    id: 'exp-lamusee',
    title: "L'Amusée",
    poste: 'Développeur back end',
    description:
      'Développement et maintenance de l\'administration de l\'entreprise.',
    detailedDescription: `Chez L'Amusée, j'ai eu l'occasion de travailler en tant que développeur web junior, où j'étais responsable de la création et de la maintenance de sites web pour une variété de clients. J'ai collaboré étroitement avec les équipes de design et de marketing pour m'assurer que chaque site répondait aux besoins spécifiques des clients tout en offrant une expérience utilisateur optimale. Cette expérience m'a permis de renforcer mes compétences techniques tout en développant une compréhension approfondie des attentes des clients dans le domaine du développement web.`,
    category: 'experience',
    position: { x: 0, y: -670 },
    logo: lamuseeLogo,
    typeExpérience: 'Stage Alterné',
    duree: 'Janvier 2023 - Juillet 2023',
  },

  {
    id: 'exp-forinov',
    title: 'Forinov',
    poste: 'Développeur Front-End',
    description: 'Participation à l\'amélioration continue de la plateforme.',
    detailedDescription: `Au sein de Forinov, j'ai travaillé en tant qu'alternant développeur web, où j'ai participé activement au développement de solutions web innovantes. J'ai eu l'opportunité de collaborer avec une équipe expérimentée, ce qui m'a permis d'acquérir des compétences pratiques tout en contribuant à des projets concrets. Cette expérience m'a non seulement aidé à renforcer mes compétences techniques, mais aussi à comprendre l'importance de l'innovation dans le domaine du développement web.`,
    category: 'experience',
    position: { x: 200, y: -470 },
    logo: forinovLogo,
    typeExpérience: 'Alternance',
    duree: 'Septembre 2023 - Septembre 2025',
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
    position: { x: 350, y: -200 },
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
    position: { x: 440, y: -300 },
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
    position: { x: 560, y: -300 },
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
    position: { x: 650, y: -200 },
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
    position: { x: 800, y: -100 },
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
    position: { x: 900, y: -60 },
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
    position: { x: 900, y: 60 },
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
    position: { x: 800, y: 100 },
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
    position: { x: 400, y: 200 },
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
    position: { x: 500, y: 250 },
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
    position: { x: 600, y: 200 },
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
    position: { x: -650, y: -275 },
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
    position: { x: -750, y: -100 },
    technologies: ['React', 'Socket.IO', 'Node.js', 'Phaser'],
    repository: 'https://github.com/RzWilliam/bomberman-multiplayer',
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
    position: { x: -750, y: 100 },
    technologies: ['Three.js', 'React', 'TypeScript', 'Tailwind'],
    repository: 'https://github.com/RzWilliam/solar-system',
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
    position: { x: -650, y: 275 },
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
    position: { x: 0, y: 520 },
    email: 'williamrodriguez0621@gmail.com',
    isClickable: true,
  },
  {
    id: 'contact-github',
    title: 'GitHub',
    description: '',
    detailedDescription: '',
    category: 'contact',
    position: { x: -120, y: 420 },
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
    position: { x: 120, y: 420 },
    linkedin: 'https://www.linkedin.com/in/william-rodriguez-6588b1207',
    isClickable: true,
    logo: linkedinLogo,
  },
];
