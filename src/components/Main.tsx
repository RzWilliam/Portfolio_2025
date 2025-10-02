import React, { useCallback, useState } from 'react';
import { useNodesState, useEdgesState, type Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ReactFlowCanvas from './sections/ReactFlowCanvas';
import Sidebar from './sections/Sidebar';
import SidebarToggleButton from './sections/SidebarToggleButton';
import { portfolioEntries } from '../data/portfolioData';
import { createInitialNodes, createInitialEdges } from '../data/graphConfig';

const initialNodes = createInitialNodes(portfolioEntries);
const initialEdges = createInitialEdges();

const Main: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [selectedEntry, setSelectedEntry] = useState<typeof portfolioEntries[0] | null>(portfolioEntries[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    const entry = portfolioEntries.find(e => e.id === node.id);
    // Ne pas ouvrir la sidebar si le node n'est pas cliquable
    if (entry && entry.isClickable !== false) {
      setSelectedEntry(entry);
    }
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
          />
        </div>

        {/* Sidebar */}
        <Sidebar
          selectedEntry={selectedEntry}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        {/* Bouton pour rouvrir la sidebar */}
        {selectedEntry && !isSidebarOpen && (
          <SidebarToggleButton onClick={() => setIsSidebarOpen(true)} />
        )}
      </div>
    </div>
  );
};

export default Main;
