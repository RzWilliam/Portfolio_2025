import React, { useCallback, useRef, useState } from 'react';
import { useNodesState, useEdgesState, type Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ReactFlowCanvas from './sections/ReactFlowCanvas';
import Sidebar from './sections/Sidebar';
import { portfolioEntries } from '../data/portfolioData';
import { createInitialNodes, createInitialEdges } from '../data/graphConfig';
import Loader from './Loader';
import LogoSrc from '../assets/logo_white.png';

const initialNodes = createInitialNodes(portfolioEntries);
const initialEdges = createInitialEdges();

const Main: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [selectedEntry, setSelectedEntry] = useState<typeof portfolioEntries[0] | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loaderFade, setLoaderFade] = useState(false);

  // reactflow instance ref (will be set via ReactFlowCanvas onInit)
  const rfInstanceRef = useRef<unknown | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);

  // (removed unused temporary typing)

  // When loader finishes: animate loader logo into the DOM node for the central node
  // and then hide the loader. No viewport zoom – we want the loader logo to
  // visually match the central node element.
  const handleLoaderFinish = () => {
    // 1) attempt to zoom the React Flow viewport to the central node
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rf = rfInstanceRef.current as any;
      if (rf) {
        // Try to get the central node position from the model
        const node = rf.getNode ? rf.getNode('1') : null;
        let nodePos: { x: number; y: number } | null = null;
        if (node && node.position) nodePos = node.position;
        if (!nodePos) {
          const entry = portfolioEntries.find(e => e.id === '1');
          if (entry) nodePos = entry.position;
        }

        if (nodePos) {
          // Immediately set viewport/transform so the user doesn't see a zoom animation
          const targetZoom = 1.3;
          // map world (node) coordinates to screen center:
          // screen = world * zoom + x  =>  x = screenCenter - world * zoom
          const tx = window.innerWidth / 2 - nodePos.x * targetZoom;
          const ty = window.innerHeight / 2 - nodePos.y * targetZoom - 15;
          if (rf.setViewport) {
            // some implementations accept a second options param for animation; omit it for immediate
            rf.setViewport({ x: tx, y: ty, zoom: targetZoom });
          } else if (rf.setTransform) {
            rf.setTransform({ x: tx, y: ty, zoom: targetZoom });
          }
        }
      }
    } catch (err) {
      console.warn('ReactFlow zoom failed', err);
    }

    // 2) trigger loader fade and hide after fade duration
    setLoaderFade(true);
    const fadeDuration = 700;
    window.setTimeout(() => setIsLoading(false), fadeDuration + 50);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReactFlowInit = (instance: any) => {
    rfInstanceRef.current = instance;
  };

  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    const entry = portfolioEntries.find(e => e.id === node.id);
    // Ne pas ouvrir la sidebar si le node n'est pas cliquable
    if (!entry || entry.isClickable === false) return;

    // For contact nodes we let the node-local handlers manage click/copy behavior
    if (entry.category === 'contact') return;

    setSelectedEntry(entry);
    setIsSidebarOpen(true);

  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-purple to-space-blue text-gray-100">
      <div className="flex min-h-screen">
        {/* React Flow Canvas */}
        <div className="flex-1 relative">
            <ReactFlowCanvas
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onNodeClick={onNodeClick}
              onInit={handleReactFlowInit}
            />
            {/* Loader overlays everything until finished */}
            {isLoading && (
              <Loader duration={1500} logoSrc={LogoSrc} onFinish={handleLoaderFinish} logoRef={logoRef} fade={loaderFade} />
            )}
        </div>

        {/* Sidebar */}
        <Sidebar
          selectedEntry={selectedEntry}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </div>
  );
};

export default Main;
