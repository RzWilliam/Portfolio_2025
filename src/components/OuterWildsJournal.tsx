import React, { useCallback, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  type Connection,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomPortfolioNode from './CustomPortfolioNode';

interface PortfolioEntry {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  category: 'project' | 'skill' | 'experience' | 'education' | 'contact';
  status: 'active' | 'learning' | 'completed';
  technologies?: string[];
  link?: string;
}

const portfolioEntries: PortfolioEntry[] = [
  {
    id: '1',
    title: 'À Propos',
    description: 'Développeur Full-Stack passionné',
    detailedDescription: 'Développeur Full-Stack avec 3+ années d\'expérience en React, TypeScript, Node.js et bases de données. Passionné par l\'innovation et les technologies modernes.',
    category: 'experience',
    status: 'active'
  },
  {
    id: '2',
    title: 'React & TypeScript',
    description: 'Expertise en développement frontend moderne',
    detailedDescription: 'Maîtrise avancée de React 18+, TypeScript, Next.js, et écosystème moderne (Vite, Tailwind CSS, React Query).',
    category: 'skill',
    status: 'active',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    id: '3',
    title: 'Portfolio Interactif',
    description: 'Application React avec React Flow',
    detailedDescription: 'Portfolio innovant utilisant React Flow pour créer une expérience interactive inspirée des jeux vidéo, avec navigation fluide et design immersif.',
    category: 'project',
    status: 'completed',
    technologies: ['React', 'TypeScript', 'React Flow', 'Tailwind CSS'],
    link: 'https://github.com/username/portfolio'
  },
  {
    id: '4',
    title: 'Backend & APIs',
    description: 'Node.js, Express, bases de données',
    detailedDescription: 'Développement d\'APIs REST et GraphQL robustes avec Node.js, Express, MongoDB, PostgreSQL. Expérience en microservices et déploiement cloud.',
    category: 'skill',
    status: 'active',
    technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL']
  },
  {
    id: '5',
    title: 'E-Commerce Platform',
    description: 'Plateforme complète avec paiements',
    detailedDescription: 'Développement d\'une plateforme e-commerce complète avec gestion des utilisateurs, catalogue produits, panier, paiements Stripe et tableau de bord admin.',
    category: 'project',
    status: 'completed',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB', 'JWT'],
    link: 'https://github.com/username/ecommerce'
  },
  {
    id: '6',
    title: 'Contact',
    description: 'Connectons-nous !',
    detailedDescription: 'N\'hésitez pas à me contacter pour discuter de nouvelles opportunités, collaborations ou simplement échanger sur les technologies.',
    category: 'contact',
    status: 'active'
  },
  {
    id: '7',
    title: 'Formation Ingénieur',
    description: 'Master en Informatique',
    detailedDescription: 'Master en Informatique spécialisé en développement logiciel et intelligence artificielle. Formation solide en algorithmique, structures de données et gestion de projet.',
    category: 'education',
    status: 'completed'
  },
  {
    id: '8',
    title: 'Intelligence Artificielle',
    description: 'Machine Learning & IA',
    detailedDescription: 'Exploration des technologies IA modernes : LLMs, Computer Vision, NLP. Intégration d\'APIs comme OpenAI GPT et développement d\'applications intelligentes.',
    category: 'skill',
    status: 'learning',
    technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Langchain']
  }
];

const getStatusIcon = (status: string) => {
  const icons = {
    active: '🚀',
    learning: '📚',
    completed: '✅'
  };
  return icons[status as keyof typeof icons] || '⭐';
};

// Fonction pour calculer les positions des nœuds en îlots logiques avec espacement
const getNodePosition = (entry: PortfolioEntry) => {
  // Nœud central "À Propos" (id: '1') - VIOLET/PURPLE au centre
  if (entry.id === '1') {
    return { x: 600, y: 400 };
  }

  // ÎlOT BLEU - Compétences techniques (skills) - Zone Nord-Est
  if (entry.category === 'skill') {
    const skillEntries = portfolioEntries.filter(e => e.category === 'skill');
    const skillIndex = skillEntries.findIndex(e => e.id === entry.id);
    return {
      x: 1000 + (skillIndex % 2) * 350, // 2 colonnes
      y: -150 + Math.floor(skillIndex / 2) * 280 // Espacement vertical de 280px
    };
  }

  // ÎLOT ROUGE - Projets (projects) - Zone Sud-Est  
  if (entry.category === 'project') {
    const projectEntries = portfolioEntries.filter(e => e.category === 'project');
    const projectIndex = projectEntries.findIndex(e => e.id === entry.id);
    return {
      x: 1000 + projectIndex * 380, // Espacement horizontal de 380px
      y: 650
    };
  }

  // ÎLOT VERT - Éducation/Formation (education) - Zone Ouest
  if (entry.category === 'education') {
    return { x: 100, y: 400 };
  }

  // ÎLOT JAUNE - Contact (contact) - Zone Sud
  if (entry.category === 'contact') {
    return { x: 600, y: 750 };
  }

  // Position par défaut (ne devrait pas être utilisée)
  return { x: 300, y: 300 };
};

// Configuration des points de connexion par nœud
const getConnectionPoints = (entry: PortfolioEntry) => {
  // Nœud central - toutes les connexions
  if (entry.id === '1') {
    return { top: true, right: true, bottom: true, left: true };
  }
  
  // Compétences - connexions depuis le centre et vers les projets
  if (entry.category === 'skill') {
    return { 
      top: false, 
      right: entry.id === '2', // Seulement React peut se connecter aux projets
      bottom: entry.id === '4', // Backend peut se connecter aux projets
      left: true // Connexion vers le centre
    };
  }
  
  // Projets - connexions depuis les compétences
  if (entry.category === 'project') {
    return { 
      top: true, // Connexion depuis les compétences
      right: false, 
      bottom: false, 
      left: true // Connexion vers le centre
    };
  }
  
  // Education et Contact - seulement connexion centrale
  return { 
    top: entry.category === 'contact', 
    right: entry.category === 'education', 
    bottom: false, 
    left: entry.category === 'contact' 
  };
};

const initialNodes = portfolioEntries.map((entry) => ({
  id: entry.id,
  type: 'customPortfolio',
  position: getNodePosition(entry),
  data: {
    label: entry.title,
    title: entry.title,
    description: entry.description,
    category: entry.category,
    status: entry.status,
    technologies: entry.technologies,
    link: entry.link,
    isCenter: entry.id === '1',
    connectionPoints: getConnectionPoints(entry)
  },
  draggable: false,
  selectable: true
}));

const initialEdges: Edge[] = [
  // Connexions principales du nœud central "À Propos" vers chaque représentant d'îlot
  {
    id: 'e1-2',
    source: '1',
    target: '2', // Premier skill (React & TypeScript) - ÎLOT BLEU
    sourceHandle: 'right-source',
    targetHandle: 'top-target',
    type: 'smoothstep',
    style: { stroke: '#3b82f6', strokeWidth: 4 },
    animated: true,
    label: 'Frontend Skills'
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3', // Premier projet (Portfolio) - ÎLOT ROUGE
    sourceHandle: 'right-source',
    targetHandle: 'left-target',
    type: 'smoothstep',
    style: { stroke: '#ef4444', strokeWidth: 4 },
    animated: true,
    label: 'Projets'
  },
  {
    id: 'e1-7',
    source: '1',
    target: '7', // Éducation - ÎLOT VERT
    sourceHandle: 'left-source',
    targetHandle: 'right-target',
    type: 'smoothstep',
    style: { stroke: '#22c55e', strokeWidth: 4 },
    animated: true,
    label: 'Formation'
  },
  {
    id: 'e1-6',
    source: '1',
    target: '6', // Contact - ÎLOT JAUNE
    sourceHandle: 'bottom-source',
    targetHandle: 'top-target',
    type: 'smoothstep',
    style: { stroke: '#eab308', strokeWidth: 4 },
    animated: true,
    label: 'Contact'
  },
  
  // Connexions à l'intérieur de l'ÎLOT BLEU (compétences)
  {
    id: 'e2-4',
    source: '2',
    target: '4', // React vers Backend
    sourceHandle: 'bottom-source',
    targetHandle: 'top-target',
    type: 'smoothstep',
    style: { stroke: '#60a5fa', strokeWidth: 2 },
    animated: false,
    label: 'Full-Stack'
  },
  {
    id: 'e2-8',
    source: '2',
    target: '8', // React vers IA
    sourceHandle: 'bottom-source',
    targetHandle: 'top-target',
    type: 'bezier',
    style: { stroke: '#60a5fa', strokeWidth: 2 },
    animated: false,
    label: 'Innovation'
  },
  {
    id: 'e4-8',
    source: '4',
    target: '8', // Backend vers IA
    sourceHandle: 'bottom-source',
    targetHandle: 'top-target',
    type: 'smoothstep',
    style: { stroke: '#60a5fa', strokeWidth: 2 },
    animated: false
  },
  
  // Connexions à l'intérieur de l'ÎLOT ROUGE (projets)
  {
    id: 'e3-5',
    source: '3',
    target: '5', // Portfolio vers E-Commerce
    sourceHandle: 'right-source',
    targetHandle: 'left-target',
    type: 'smoothstep',
    style: { stroke: '#f87171', strokeWidth: 2 },
    animated: false,
    label: 'Evolution'
  },
  
  // Connexions inter-îlots logiques (compétences vers projets correspondants)
  {
    id: 'e2-3-cross',
    source: '2',
    target: '3', // React skills vers Portfolio project
    sourceHandle: 'right-source',
    targetHandle: 'left-target',
    type: 'straight',
    style: { stroke: '#a855f7', strokeWidth: 1, strokeDasharray: '5,5' },
    animated: false,
    label: 'Application'
  },
  {
    id: 'e4-5-cross',
    source: '4',
    target: '5', // Backend skills vers E-Commerce project
    sourceHandle: 'right-source',
    targetHandle: 'left-target',
    type: 'straight',
    style: { stroke: '#a855f7', strokeWidth: 1, strokeDasharray: '5,5' },
    animated: false,
    label: 'Architecture'
  }
];

const OuterWildsJournal: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [selectedEntry, setSelectedEntry] = useState<PortfolioEntry | null>(portfolioEntries[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // Types de composants custom
  const nodeTypes = {
    customPortfolio: CustomPortfolioNode,
  };

  const onConnect = useCallback(
    (params: Connection) => console.log('Connection attempt:', params),
    []
  );

  const onNodeClick = useCallback((_event: React.MouseEvent, node: { id: string }) => {
    const entry = portfolioEntries.find(e => e.id === node.id);
    setSelectedEntry(entry || null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-purple to-space-blue text-gray-100">
      <div className="flex min-h-screen">
        {/* React Flow */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            fitView
            nodesDraggable={false}
            nodesConnectable={true}
            elementsSelectable={true}
            attributionPosition="bottom-left"
            className="bg-transparent"
          >
            <Controls className="bg-black/40 border border-discovery-teal" />
            <MiniMap 
              nodeColor={(node) => {
                const entry = portfolioEntries.find(e => e.id === node.id);
                if (!entry) return '#6b7280';
                
                const colors = {
                  project: '#ef4444',
                  skill: '#3b82f6',
                  experience: '#8b5cf6',
                  education: '#22c55e',
                  contact: '#eab308'
                };
                return colors[entry.category];
              }}
              className="bg-black/40 border border-discovery-teal"
            />
            <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#4ecdc4" />
          </ReactFlow>
        </div>

        {/* Sidebar */}
        {selectedEntry && isSidebarOpen && (
          <div className="sidebar-content w-96 bg-black/40 backdrop-blur-xl border-l border-discovery-teal/30 p-6 overflow-y-auto">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">{selectedEntry.title}</h2>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{getStatusIcon(selectedEntry.status)}</span>
                    <button 
                      onClick={() => setIsSidebarOpen(false)}
                      className="text-discovery-teal hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                      title="Fermer la sidebar"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  selectedEntry.category === 'project' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                  selectedEntry.category === 'skill' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                  selectedEntry.category === 'experience' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                  selectedEntry.category === 'education' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                  'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                }`}>
                  {selectedEntry.category.toUpperCase()}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedEntry.detailedDescription}
                </p>

                {selectedEntry.technologies && (
                  <div className="mb-6">
                    <h4 className="text-discovery-teal font-semibold mb-3">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEntry.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-discovery-teal/20 text-discovery-teal border border-discovery-teal/30 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedEntry.link && (
                  <a 
                    href={selectedEntry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-mystery-red to-mystery-red/80 text-white font-medium rounded-lg hover:from-mystery-red/80 hover:to-mystery-red transition-all duration-300 transform hover:scale-105"
                  >
                    🔗 Voir le projet
                  </a>
                )}

                {selectedEntry.category === 'contact' && (
                  <div className="space-y-3">
                    <a href="mailto:contact@example.com" className="flex items-center gap-3 p-3 bg-discovery-teal/10 border border-discovery-teal/30 rounded-lg hover:bg-discovery-teal/20 transition-colors">
                      <span className="text-xl">📧</span>
                      <span className="text-discovery-teal font-medium">contact@example.com</span>
                    </a>
                    <a href="https://github.com" className="flex items-center gap-3 p-3 bg-discovery-teal/10 border border-discovery-teal/30 rounded-lg hover:bg-discovery-teal/20 transition-colors">
                      <span className="text-xl">💻</span>
                      <span className="text-discovery-teal font-medium">GitHub</span>
                    </a>
                    <a href="https://linkedin.com" className="flex items-center gap-3 p-3 bg-discovery-teal/10 border border-discovery-teal/30 rounded-lg hover:bg-discovery-teal/20 transition-colors">
                      <span className="text-xl">💼</span>
                      <span className="text-discovery-teal font-medium">LinkedIn</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Bouton pour rouvrir la sidebar */}
        {selectedEntry && !isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="sidebar-toggle-btn fixed top-1/2 right-4 transform -translate-y-1/2 bg-discovery-teal hover:bg-discovery-teal/80 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            title="Ouvrir la sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default OuterWildsJournal;
