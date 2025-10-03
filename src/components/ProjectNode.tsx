import React from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

interface ProjectNodeData {
  title: string;
  description: string;
  detailedDescription?: string;
  technologies?: string[];
  link?: string;
  logo?: string;
}

const ProjectNode: React.FC<NodeProps> = ({ data, selected }) => {
  const nodeData = data as unknown as ProjectNodeData;

  return (
    <div className="relative">
      {/* Handles pour connexions */}
      <Handle
        type="target"
        position={Position.Left}
        id="left-target"
        className="opacity-0"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right-source"
        className="opacity-0"
      />

      <div
        className={`p-4 rounded-2xl text-white shadow-2xl border border-gray-700/40 bg-gradient-to-br from-zinc-900 to-zinc-800 w-80 ${selected ? 'ring-2 ring-discovery-teal/60' : ''}`}
      >
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-start gap-3 w-full">
            <div className="w-16 h-16 rounded-lg bg-zinc-900 flex-shrink-0 overflow-hidden border border-gray-700/60">
              {nodeData.logo ? (
                <img
                  src={nodeData.logo}
                  alt={`${nodeData.title} image`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl">
                  🗂️
                </div>
              )}
            </div>

            <div>
              <h4 className="font-bold text-sm leading-tight">
                {nodeData.title}
              </h4>
              <p className="text-xs opacity-70 mt-1 line-clamp-3">
                {nodeData.description}
              </p>
            </div>
          </div>

          <div className="flex-1">
            {nodeData.technologies && nodeData.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {nodeData.technologies.slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-black/40 rounded-full border border-gray-700"
                  >
                    {t}
                  </span>
                ))}
                {nodeData.technologies.length > 4 && (
                  <span className="text-xs px-2 py-1 bg-black/40 rounded-full border border-gray-700">
                    +{nodeData.technologies.length - 4}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNode;
