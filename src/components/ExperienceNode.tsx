import React from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

interface ExperienceNodeData {
  title: string;
  poste: string;
  typeExpérience: string;
  duree: string;
  description: string;
  detailedDescription?: string;
  logo?: string;
}

const ExperienceNode: React.FC<NodeProps> = ({ data, selected }) => {
  const nodeData = data as unknown as ExperienceNodeData;

  return (
    <div className="relative">
      {/* Handles pour connexions */}
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-target"
        className="opacity-0"
      />

      <div
        className={`p-4 rounded-2xl text-white shadow-2xl border border-gray-700/40 bg-gradient-to-br from-zinc-900 to-zinc-800 w-80 hover:scale-105 transition-transform ${selected ? 'ring-2 ring-discovery-teal/60' : ''}`}
      >
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-start gap-3 w-full">
            <div className="w-16 h-16 rounded-lg bg-white flex-shrink-0 overflow-hidden border border-gray-700/60">
              {nodeData.logo ? (
                <img
                  src={nodeData.logo}
                  alt={`${nodeData.title} logo`}
                  className="w-full h-full object-contain"
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
                Poste : {nodeData.poste}
              </p>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-xs opacity-70">
              {nodeData.typeExpérience} : {nodeData.duree}
            </p>
            <p className="text-sm mt-2 leading-snug line-clamp-4">
              {nodeData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceNode;
