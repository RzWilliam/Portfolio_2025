import type { PortfolioEntry } from './portfolioData';
import type { Node, Edge } from '@xyflow/react';

// Fonction pour récupérer la position d'un nœud depuis portfolioData
export const getNodePosition = (entry: PortfolioEntry) => {
  // Utiliser la position définie dans portfolioData
  return entry.position;
};

// Configuration des points de connexion par nœud
export const getConnectionPoints = (entry: PortfolioEntry) => {
  // Nœud central - toutes les connexions
  if (entry.id === '1') {
    return { top: true, right: true, bottom: true, left: true };
  }

  // Catégories de skills - connexions depuis le centre et vers les skills
  if (entry.category === 'category') {
    return {
      top: false,
      right: true, // Vers les skills individuels
      bottom: false,
      left: true, // Vers le centre
    };
  }

  // Skills individuels - connexions depuis leur catégorie
  if (entry.category === 'skill-item') {
    return {
      top: false,
      right: false,
      bottom: false,
      left: true, // Connexion vers leur catégorie
    };
  }

  // Par défaut, pas de connexions
  return {
    top: false,
    right: false,
    bottom: false,
    left: false,
  };
};

// Création des nœuds initiaux
export const createInitialNodes = (
  portfolioEntries: PortfolioEntry[]
): Node[] => {
  return portfolioEntries.map((entry) => {
    // Déterminer le type de node
    let nodeType = 'customPortfolio';
    if (entry.category === 'skill-item') {
      nodeType = 'skillNode';
    } else if (entry.category === 'category') {
      nodeType = 'categoryNode';
    } else if (entry.category === 'project') {
      nodeType = 'projectNode';
    }

    return {
      id: entry.id,
      type: nodeType,
      position: getNodePosition(entry),
      data: {
        label: entry.title,
        title: entry.title,
        description: entry.description,
        category: entry.category,
        technologies: entry.technologies,
        link: entry.link,
        logo: entry.logo,
        isCenter: entry.id === '1',
        isClickable: entry.isClickable !== false, // Par défaut true
        connectionPoints: getConnectionPoints(entry),
      },
      draggable: false,
      selectable: true,
    };
  });
};

// Création des edges initiaux
export const createInitialEdges = (): Edge[] => {
  const edges: Edge[] = [
    // Connexions du nœud central vers les catégories
    {
      id: 'e1-frontend',
      source: '1',
      target: 'frontend-cat',
      sourceHandle: 'right-source',
      targetHandle: 'left-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 4 },
      animated: true,
    },
    {
      id: 'e1-backend',
      source: '1',
      target: 'backend-cat',
      sourceHandle: 'right-source',
      targetHandle: 'left-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 4 },
      animated: true,
    },
    {
      id: 'e1-other',
      source: '1',
      target: 'other-cat',
      sourceHandle: 'right-source',
      targetHandle: 'left-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 4 },
      animated: true,
    },

    {
      id: 'e1-projects',
      source: '1',
      target: 'projects-cat',
      sourceHandle: 'left-source',
      targetHandle: 'right-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 4 },
      animated: true,
    },

    // Connexions des catégories vers les skills individuels - Frontend
    {
      id: 'ecat-react',
      source: 'frontend-cat',
      target: 'skill-react',
      sourceHandle: 'top-source',
      targetHandle: 'bottom-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 2 },
      animated: false,
    },
    {
      id: 'ecat-typescript',
      source: 'frontend-cat',
      target: 'skill-typescript',
      sourceHandle: 'top-source',
      targetHandle: 'bottom-target',
      type: 'bezier',
      style: { stroke: '#ffffff', strokeWidth: 2 },
      animated: false,
    },
    {
      id: 'ecat-nextjs',
      source: 'frontend-cat',
      target: 'skill-nextjs',
      sourceHandle: 'top-source',
      targetHandle: 'bottom-target',
      type: 'bezier',
      style: { stroke: '#ffffff', strokeWidth: 2 },
      animated: false,
    },
    {
      id: 'ecat-tailwind',
      source: 'frontend-cat',
      target: 'skill-tailwind',
      sourceHandle: 'top-source',
      targetHandle: 'bottom-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 2 },
      animated: false,
    },

    // Connexions des catégories vers les skills individuels - Backend
    {
      id: 'ecat-nodejs',
      source: 'backend-cat',
      target: 'skill-nodejs',
      sourceHandle: 'right-source',
      targetHandle: 'left-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 2 },
      animated: false,
    },
    {
      id: 'ecat-symfony',
      source: 'backend-cat',
      target: 'skill-symfony',
      sourceHandle: 'right-source',
      targetHandle: 'left-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 2 },
      animated: false,
    },
    {
      id: 'ecat-socketio',
      source: 'backend-cat',
      target: 'skill-socketio',
      sourceHandle: 'right-source',
      targetHandle: 'left-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 2 },
      animated: false,
    },
    {
      id: 'ecat-php',
      source: 'backend-cat',
      target: 'skill-php',
      sourceHandle: 'right-source',
      targetHandle: 'left-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 2 },
      animated: false,
    },

    // Connexions des catégories vers les skills individuels - Autres
    {
      id: 'ecat-git',
      source: 'other-cat',
      target: 'skill-git',
      sourceHandle: 'bottom-source',
      targetHandle: 'top-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 2 },
      animated: false,
    },
    {
      id: 'ecat-figma',
      source: 'other-cat',
      target: 'skill-figma',
      sourceHandle: 'bottom-source',
      targetHandle: 'top-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 2 },
      animated: false,
    },
    {
      id: 'ecat-supabase',
      source: 'other-cat',
      target: 'skill-supabase',
      sourceHandle: 'bottom-source',
      targetHandle: 'top-target',
      type: 'bezier',
      style: { stroke: '#fff', strokeWidth: 2 },
      animated: false,
    },
  ];

  return edges;
};
