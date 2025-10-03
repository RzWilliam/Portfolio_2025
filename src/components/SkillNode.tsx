import React from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

interface SkillNodeData {
  label: string;
  title: string;
  description: string;
  logo?: string;
}

const SkillNode: React.FC<NodeProps> = ({ data, selected }) => {
  const nodeData = data as unknown as SkillNodeData;

  return (
    <div style={{ transform: 'translate(-50%, -50%)' }} className="relative">
      {/* Handles pour les connexions */}
      <Handle type="target" position={Position.Top} id="top-target" className="opacity-0" />
      <Handle type="source" position={Position.Top} id="top-source" className="opacity-0" />
      
      <Handle type="target" position={Position.Left} id="left-target" className="opacity-0" />
      <Handle type="source" position={Position.Right} id="right-source" className="opacity-0" />
      
      <Handle type="target" position={Position.Bottom} id="bottom-target" className="opacity-0" />
      <Handle type="source" position={Position.Bottom} id="bottom-source" className="opacity-0" />

      {/* Nœud rond avec logo */}
  <div className={`w-24 h-24 rounded-full bg-zinc-800 shadow-xl border-3 border-zinc-400/50 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center justify-center p-3 ${selected ? 'ring-4 ring-discovery-teal/70 scale-105' : ''}`}>
        {nodeData.logo ? (
          <img 
            src={nodeData.logo} 
            alt={nodeData.title} 
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="text-3xl">⭐</div>
        )}
      </div>
      
      {/* Nom de la skill en dessous */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <div className="text-xs font-bold text-white bg-black/60 px-2 py-1 rounded">
          {nodeData.title}
        </div>
      </div>
    </div>
  );
};

export default SkillNode;
