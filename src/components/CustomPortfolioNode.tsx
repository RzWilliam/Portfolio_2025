import React from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

interface CustomNodeData {
  label: string;
  title: string;
  description: string;
  category: 'project' | 'skill' | 'experience' | 'contact' | 'category' | 'skill-item';
  technologies?: string[];
  link?: string;
  isCenter?: boolean;
}

const CustomPortfolioNode: React.FC<NodeProps> = ({ data, selected }) => {
  const nodeData = data as unknown as CustomNodeData;

  return (
    <div className="relative">
      {/* paired handles on each side with deterministic ids */}
      <Handle type="source" position={Position.Top} id="top-source" className="opacity-0" />
      <Handle type="target" position={Position.Top} id="top-target" className="opacity-0" />

      <Handle type="source" position={Position.Right} id="right-source" className="opacity-0" />
      <Handle type="target" position={Position.Right} id="right-target" className="opacity-0" />

      <Handle type="source" position={Position.Bottom} id="bottom-source" className="opacity-0" />
      <Handle type="target" position={Position.Bottom} id="bottom-target" className="opacity-0" />

      <Handle type="source" position={Position.Left} id="left-source" className="opacity-0" />
      <Handle type="target" position={Position.Left} id="left-target" className="opacity-0" />

      <div 
        className={`p-4 rounded-xl text-white shadow-xl border border-gray-700/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${nodeData.isCenter ? 'central-node ring-2 ring-gray-600/50 w-80' : 'w-72'} ${selected ? 'ring-2 ring-gray-500' : ''}`}
        style={{ backgroundColor: '#0f0f0f' }}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className={`font-bold ${nodeData.isCenter ? 'text-xl' : 'text-lg'}`}>{nodeData.title}</h3>
        </div>

        <p className="text-sm opacity-70 mb-3 line-clamp-2">{nodeData.description}</p>

        {nodeData.technologies && nodeData.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {nodeData.technologies.slice(0,3).map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-800 rounded-full text-xs font-medium border border-gray-700">{tech}</span>
            ))}
            {nodeData.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-800 rounded-full text-xs font-medium border border-gray-700">+{nodeData.technologies.length - 3}</span>
            )}
          </div>
        )}

        <div className="mt-2 px-2 py-1 rounded-full text-xs font-medium inline-block bg-gray-800 text-gray-300 border border-gray-700">
          {nodeData.category.toUpperCase().replace('-', ' ')}
        </div>

        {nodeData.isCenter && <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold border border-gray-600">✦</div>}
      </div>
    </div>
  );
};



export default CustomPortfolioNode;