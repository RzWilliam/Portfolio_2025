import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { PortfolioEntry } from '../../data/portfolioData';
import reactLogo from '../../assets/logos/react.webp';
import typescriptLogo from '../../assets/logos/typescript.webp';
import nextjsLogo from '../../assets/logos/nextjs.webp';
import tailwindLogo from '../../assets/logos/tailwind.webp';
import nodejsLogo from '../../assets/logos/nodejs.webp';
import symfonyLogo from '../../assets/logos/symfony.webp';
import socketioLogo from '../../assets/logos/socketio.webp';
import phpLogo from '../../assets/logos/php.webp';
import gitLogo from '../../assets/logos/git.webp';
import githubLogo from '../../assets/logos/github.svg';
import figmaLogo from '../../assets/logos/figma.webp';
import supabaseLogo from '../../assets/logos/supabase.webp';
import pythonLogo from '../../assets/logos/python.webp';
import phaserLogo from '../../assets/logos/phaser.webp';
import threejsLogo from '../../assets/logos/threejs.webp';

interface SidebarProps {
  selectedEntry: PortfolioEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedEntry,
  isOpen,
  onClose,
}) => {
  // Preload preview image when sidebar opens to reduce layout shift
  useEffect(() => {
    if (!isOpen || !selectedEntry?.previewImage) return;
    const img = new Image();
    img.src = selectedEntry.previewImage;
    // no-op handlers; browser will cache the image
    return () => {
      // help GC
      img.src = '';
    };
  }, [isOpen, selectedEntry?.previewImage]);

  if (!selectedEntry) return null;

  // Helper to render technology logos (returns JSX elements)
  const renderTechLogos = (technologies?: string[]) => {
    if (!technologies || technologies.length === 0) return null;

    const techLogos: Record<string, string> = {
      React: reactLogo,
      TypeScript: typescriptLogo,
      'Next.js': nextjsLogo,
      Tailwind: tailwindLogo,
      'Node.js': nodejsLogo,
      Symfony: symfonyLogo,
      'Socket.IO': socketioLogo,
      PHP: phpLogo,
      Git: gitLogo,
      Figma: figmaLogo,
      Supabase: supabaseLogo,
      Python: pythonLogo,
      Phaser: phaserLogo,
      'Three.js': threejsLogo,
    };

    return technologies.map((tech, idx) => {
      const logo = techLogos[tech];
      return logo ? (
        <img
          key={idx}
          src={logo}
          alt={tech}
          title={tech}
          className="w-16 h-auto object-contain p-1"
        />
      ) : (
        <span
          key={idx}
          className="px-3 py-1 bg-discovery-teal/20 text-discovery-teal border border-discovery-teal/30 rounded-full text-sm font-medium"
        >
          {tech}
        </span>
      );
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{}}
        >
          <motion.div
            className="absolute inset-0 bg-black/40 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.aside
            className="fixed right-0 top-0 h-full w-full sm:w-1/2 z-50"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="sidebar-content w-full bg-black/40 backdrop-blur-xl sm:border-l sm:border-teal-400/40 p-6 overflow-y-auto h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-white">
                      {selectedEntry.title}
                    </h2>
                    <div className="flex items-center gap-3">
                      <motion.button
                        onClick={onClose}
                        className="text-discovery-teal transition-colors p-2 rounded-lg"
                        title="Fermer la sidebar"
                        whileHover={{ scale: 1.05, color: '#ffffff' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ×
                      </motion.button>
                    </div>
                  </div>

                  {selectedEntry.previewImage && (
                    <a
                      href={selectedEntry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Image wrapper reserves space to avoid layout shift when image loads */}
                      <div
                        className="w-full rounded-lg mb-4 bg-white/5 overflow-hidden"
                        style={{
                          // reserve a reasonable preview height to avoid content jump
                          minHeight: 180,
                        }}
                      >
                        <img
                          src={selectedEntry.previewImage}
                          alt={selectedEntry.title}
                          className="w-full h-full object-cover"
                          style={{ display: 'block' }}
                        />
                      </div>
                    </a>
                  )}

                  {selectedEntry.category === 'experience' && (
                    <>
                      {/* Reserve logo area to prevent layout shifts */}
                      <div className="w-full rounded-lg mb-4 flex items-center justify-center bg-white/5 p-3" style={{ minHeight: 80 }}>
                        <img
                          src={selectedEntry.logo}
                          alt={selectedEntry.title}
                          className="max-h-[150px] object-contain"
                          style={{ display: 'block' }}
                        />
                      </div>

                      <div className="mb-4">
                        <h4 className="text-discovery-teal font-semibold mb-3">Détails</h4>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/6 rounded-lg">
                            <span className="text-2xl">👨‍💼</span>
                            <div>
                              <div className="text-sm text-gray-300">Poste</div>
                              <div className="text-white font-medium">
                                {selectedEntry.poste ?? 'Non renseigné'}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/6 rounded-lg">
                            <span className="text-2xl">📃</span>
                            <div>
                              <div className="text-sm text-gray-300">Contrat</div>
                              <div className="text-white font-medium">
                                {selectedEntry.typeExpérience ?? '—'}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/6 rounded-lg">
                            <span className="text-2xl">⏳</span>
                            <div>
                              <div className="text-sm text-gray-300">Durée</div>
                              <div className="text-white font-medium">
                                {selectedEntry.duree ?? '—'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedEntry.category === 'project' && (
                    <h3 className="text-xl font-bold text-white mb-2">
                      {selectedEntry.title}, c'est quoi ?
                    </h3>
                  )}

                  <p className="text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
                    {selectedEntry.detailedDescription}
                  </p>

                  {selectedEntry.technologies && (
                    <div className="mb-6">
                      <h4 className="text-discovery-teal font-semibold mb-3">
                        Technologies :
                      </h4>
                      <div className="flex flex-wrap gap-2 items-center">
                        {renderTechLogos(selectedEntry.technologies)}
                      </div>
                    </div>
                  )}

                  {/* project preview / description area remains here; action buttons moved to footer */}

                  {selectedEntry.category === 'contact' && (
                    <div className="space-y-3">
                      {selectedEntry.email && (
                        <a
                          href={`mailto:${selectedEntry.email}`}
                          className="flex items-center gap-3 p-3 bg-discovery-teal/10 border border-discovery-teal/30 rounded-lg hover:bg-discovery-teal/20 transition-colors"
                        >
                          <span className="text-xl">📧</span>
                          <span className="text-discovery-teal font-medium">
                            {selectedEntry.email}
                          </span>
                        </a>
                      )}
                      {selectedEntry.github && (
                        <a
                          href={selectedEntry.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-discovery-teal/10 border border-discovery-teal/30 rounded-lg hover:bg-discovery-teal/20 transition-colors"
                        >
                          <span className="text-xl">💻</span>
                          <span className="text-discovery-teal font-medium">
                            GitHub
                          </span>
                        </a>
                      )}
                      {selectedEntry.linkedin && (
                        <a
                          href={selectedEntry.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-discovery-teal/10 border border-discovery-teal/30 rounded-lg hover:bg-discovery-teal/20 transition-colors"
                        >
                          <span className="text-xl">�</span>
                          <span className="text-discovery-teal font-medium">
                            LinkedIn
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer: action buttons pinned to bottom via flex layout */}
              <div className="pt-4">
                {selectedEntry.category === 'project' &&
                  selectedEntry.repository && (
                    <motion.a
                      href={selectedEntry.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-4 py-2 bg-black text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-101 w-full justify-center mb-3 border border-gray-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
                      <span>Voir le code</span>
                    </motion.a>
                  )}
                {selectedEntry.category === 'project' && selectedEntry.link && (
                  <motion.a
                    href={selectedEntry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-lg transition-all duration-300 transform hover:scale-101 w-full justify-center mb-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Voir le projet
                  </motion.a>
                )}

                {selectedEntry.id === '1' && selectedEntry.cv && (
                  <motion.a
                    href={selectedEntry.cv.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-lg transition-all duration-300 transform hover:scale-101 w-full justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedEntry.cv.label}
                  </motion.a>
                )}
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
