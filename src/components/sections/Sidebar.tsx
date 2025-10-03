import React from 'react';
import type { PortfolioEntry } from '../../data/portfolioData';

interface SidebarProps {
  selectedEntry: PortfolioEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedEntry, isOpen, onClose }) => {
  if (!selectedEntry || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <aside className="absolute right-0 top-0 h-full">
        <div
          onClick={(e) => e.stopPropagation()}
          className="sidebar-content w-96 bg-black/40 backdrop-blur-xl border-l border-discovery-teal/30 p-6 overflow-y-auto h-full"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">{selectedEntry.title}</h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={onClose}
                    className="text-discovery-teal hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                    title="Fermer la sidebar"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  selectedEntry.category === 'project'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                    : selectedEntry.category === 'skill'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : selectedEntry.category === 'experience'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : selectedEntry.category === 'contact'
                    ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    : selectedEntry.category === 'skill-category'
                    ? 'bg-blue-400/20 text-blue-300 border border-blue-400/30'
                    : selectedEntry.category === 'skill-item'
                    ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                    : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                }`}
              >
                {selectedEntry.category.toUpperCase().replace('-', ' ')}
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
                  {selectedEntry.email && (
                    <a href={`mailto:${selectedEntry.email}`} className="flex items-center gap-3 p-3 bg-discovery-teal/10 border border-discovery-teal/30 rounded-lg hover:bg-discovery-teal/20 transition-colors">
                      <span className="text-xl">📧</span>
                      <span className="text-discovery-teal font-medium">{selectedEntry.email}</span>
                    </a>
                  )}
                  {selectedEntry.github && (
                    <a href={selectedEntry.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-discovery-teal/10 border border-discovery-teal/30 rounded-lg hover:bg-discovery-teal/20 transition-colors">
                      <span className="text-xl">💻</span>
                      <span className="text-discovery-teal font-medium">GitHub</span>
                    </a>
                  )}
                  {selectedEntry.linkedin && (
                    <a href={selectedEntry.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-discovery-teal/10 border border-discovery-teal/30 rounded-lg hover:bg-discovery-teal/20 transition-colors">
                      <span className="text-xl">📇</span>
                      <span className="text-discovery-teal font-medium">LinkedIn</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
