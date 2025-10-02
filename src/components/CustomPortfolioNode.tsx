import React from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

interface CustomNodeData {
  label: string;
  title: string;
  description: string;
  category: 'project' | 'skill' | 'experience' | 'education' | 'contact';
  status: 'active' | 'learning' | 'completed';
  technologies?: string[];
  link?: string;
  isCenter?: boolean;
}

const getCategoryColor = (category: string) => {
  const colors: Record<string,string> = {
    project: 'from-red-500 to-red-600',
    skill: 'from-blue-500 to-blue-600',
    experience: 'from-purple-500 to-purple-600',
    education: 'from-green-500 to-green-600',
    contact: 'from-yellow-500 to-yellow-600'
  };
  return colors[category] || 'from-gray-500 to-gray-600';
};

const getStatusIcon = (status: string) => {
  const icons: Record<string,string> = { active: '🚀', learning: '📚', completed: '✅' };
  return icons[status] || '⭐';
};

const CustomPortfolioNode: React.FC<NodeProps> = ({ data, selected }) => {
  const nodeData = data as unknown as CustomNodeData;

  return (
    <div className="relative">
      {/* paired handles on each side with deterministic ids */}
      <Handle type="source" position={Position.Top} id="top-source" className="w-3 h-3 bg-discovery-teal border-2 border-white opacity-80 hover:opacity-100 transition-opacity" />
      <Handle type="target" position={Position.Top} id="top-target" className="w-3 h-3 bg-discovery-teal border-2 border-white opacity-80 hover:opacity-100 transition-opacity" />

      <Handle type="source" position={Position.Right} id="right-source" className="w-3 h-3 bg-discovery-teal border-2 border-white opacity-80 hover:opacity-100 transition-opacity" />
      <Handle type="target" position={Position.Right} id="right-target" className="w-3 h-3 bg-discovery-teal border-2 border-white opacity-80 hover:opacity-100 transition-opacity" />

      <Handle type="source" position={Position.Bottom} id="bottom-source" className="w-3 h-3 bg-discovery-teal border-2 border-white opacity-80 hover:opacity-100 transition-opacity" />
      <Handle type="target" position={Position.Bottom} id="bottom-target" className="w-3 h-3 bg-discovery-teal border-2 border-white opacity-80 hover:opacity-100 transition-opacity" />

      <Handle type="source" position={Position.Left} id="left-source" className="w-3 h-3 bg-discovery-teal border-2 border-white opacity-80 hover:opacity-100 transition-opacity" />
      <Handle type="target" position={Position.Left} id="left-target" className="w-3 h-3 bg-discovery-teal border-2 border-white opacity-80 hover:opacity-100 transition-opacity" />

      <div className={`p-4 rounded-xl bg-gradient-to-br ${getCategoryColor(nodeData.category)} text-white shadow-xl border border-white/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${nodeData.isCenter ? 'central-node ring-4 ring-purple-400/50 w-80' : 'w-72'} ${selected ? 'ring-4 ring-discovery-teal/70' : ''}`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className={`font-bold ${nodeData.isCenter ? 'text-xl' : 'text-lg'}`}>{nodeData.title}</h3>
          <span className={`${nodeData.isCenter ? 'text-3xl' : 'text-2xl'}`}>{getStatusIcon(nodeData.status)}</span>
        </div>

        <p className="text-sm opacity-90 mb-3 line-clamp-2">{nodeData.description}</p>

        {nodeData.technologies && nodeData.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {nodeData.technologies.slice(0,3).map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">{tech}</span>
            ))}
            {nodeData.technologies.length > 3 && (
              <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">+{nodeData.technologies.length - 3}</span>
            )}
          </div>
        )}

        <div className={`mt-2 px-2 py-1 rounded-full text-xs font-medium inline-block ${nodeData.category === 'project' ? 'bg-red-200 text-red-800' : nodeData.category === 'skill' ? 'bg-blue-200 text-blue-800' : nodeData.category === 'experience' ? 'bg-purple-200 text-purple-800' : nodeData.category === 'education' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
          {nodeData.category.toUpperCase()}
        </div>

        {nodeData.isCenter && <div className="absolute -top-2 -right-2 w-6 h-6 bg-discovery-teal rounded-full flex items-center justify-center text-xs font-bold animate-pulse">✦</div>}
      </div>
    </div>
  );
};



export default CustomPortfolioNode;