import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  type Connection,
  type Node,
  type Edge,
  type OnNodesChange,
  type OnEdgesChange,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomPortfolioNode from '../CustomPortfolioNode';
import SkillNode from '../SkillNode';
import SkillCategoryNode from '../SkillCategoryNode';
import { portfolioEntries } from '../../data/portfolioData';

interface ReactFlowCanvasProps {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onNodeClick: (event: React.MouseEvent, node: Node) => void;
}

const ReactFlowCanvas: React.FC<ReactFlowCanvasProps> = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onNodeClick,
}) => {
  // Types de composants custom
  const nodeTypes = {
    customPortfolio: CustomPortfolioNode,
    skillNode: SkillNode,
    skillCategoryNode: SkillCategoryNode,
  };

  const onConnect = useCallback(
    (params: Connection) => console.log('Connection attempt:', params),
    []
  );

  return (
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
          
          const colors: Record<string, string> = {
            project: '#ef4444',
            skill: '#3b82f6',
            experience: '#8b5cf6',
            contact: '#eab308',
            'skill-category': '#3b82f6',
            'skill-item': '#60a5fa'
          };
          return colors[entry.category] || '#6b7280';
        }}
        className="bg-black/40 border border-discovery-teal"
      />
      <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#4ecdc4" />
    </ReactFlow>
  );
};

export default ReactFlowCanvas;
