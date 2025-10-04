import React from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import LogoWhite from '../assets/logo_white.png';

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
  // Use a wrapper that will be centered on the node position
  // add data-nodeid so we can query the DOM element for animation/positioning
  <div data-nodeid={data?.id} className="relative">
      {/* paired handles on each side with deterministic ids */}
      <Handle type="source" position={Position.Top} id="top-source" className="opacity-0" />
      <Handle type="target" position={Position.Top} id="top-target" className="opacity-0" />

      <Handle type="source" position={Position.Right} id="right-source" className="opacity-0" />
      <Handle type="target" position={Position.Right} id="right-target" className="opacity-0" />

      <Handle type="source" position={Position.Bottom} id="bottom-source" className="opacity-0" />
      <Handle type="target" position={Position.Bottom} id="bottom-target" className="opacity-0" />

      <Handle type="source" position={Position.Left} id="left-source" className="opacity-0" />
      <Handle type="target" position={Position.Left} id="left-target" className="opacity-0" />

      {/* If this is the central node, render a circular logo instead of the card */}
      {nodeData.isCenter ? (
        <div className={`flex items-center justify-center w-40 h-40 rounded-full bg-black border border-gray-700/50 shadow-lg cursor-pointer ${selected ? 'ring-4 ring-gray-500/40' : ''}`}>
          <img src={LogoWhite} alt="Logo portfolio" className="w-28 h-28 object-contain" />
        </div>
      ) : (
        <div 
          className={`p-4 rounded-xl text-white shadow-xl border border-gray-700/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl w-72 ${selected ? 'ring-2 ring-gray-500' : ''}`}
          style={{ backgroundColor: '#0f0f0f' }}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className={`font-bold text-lg`}>{nodeData.title}</h3>
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
        </div>
      )}
    </div>
  );
};



export default CustomPortfolioNode;