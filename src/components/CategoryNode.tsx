import React from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

interface CategoryNodeData {
  label: string;
  title: string;
  isClickable?: boolean;
}

const CategoryNode: React.FC<NodeProps> = ({ data, selected }) => {
  const nodeData = data as unknown as CategoryNodeData;
  const isClickable = nodeData.isClickable !== false; // Par défaut cliquable

  return (
    <div style={{ transform: 'translate(-50%, -50%)' }} className="relative">
      {/* Handles pour les connexions */}
      <Handle type="target" position={Position.Top} id="top-target" className="opacity-0" />
      <Handle type="source" position={Position.Top} id="top-source" className="opacity-0" />
      
      <Handle type="target" position={Position.Left} id="left-target" className="opacity-0" />
      <Handle type="source" position={Position.Left} id="left-source" className="opacity-0" />
      <Handle type="source" position={Position.Right} id="right-source" className="opacity-0" />
      <Handle type="target" position={Position.Right} id="right-target" className="opacity-0" />
      
      <Handle type="target" position={Position.Bottom} id="bottom-target" className="opacity-0" />
      <Handle type="source" position={Position.Bottom} id="bottom-source" className="opacity-0" />

      {/* Nœud de catégorie simplifié - juste le titre */}
      <div 
        className={`px-6 py-3 rounded-lg text-white shadow-lg border border-gray-700/50 transition-all duration-300 ${
          isClickable 
            ? 'cursor-pointer hover:scale-105 hover:shadow-xl' 
            : 'cursor-default opacity-80'
        } ${selected ? 'ring-2 ring-gray-500' : ''}`}
        style={{ backgroundColor: '#0f0f0f' }}
      >
        <h3 className="font-bold text-lg text-center whitespace-nowrap">
          {nodeData.title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryNode;
