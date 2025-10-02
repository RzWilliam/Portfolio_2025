import React from 'react';
import { 
  type EdgeProps, 
  getSmoothStepPath, 
  getBezierPath,
  getStraightPath,
  getSimpleBezierPath
} from '@xyflow/react';

interface CustomEdgeData {
  label?: string;
  edgeType?: 'primary' | 'secondary' | 'cross' | 'highlight';
  animated?: boolean;
  strokeWidth?: number;
  strokeColor?: string;
  strokePattern?: 'solid' | 'dashed' | 'dotted';
  showArrow?: boolean;
  pathType?: 'smooth' | 'bezier' | 'straight' | 'simpleBezier';
  pulseEffect?: boolean;
}

const CustomPortfolioEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  markerEnd,
  selected
}) => {
  const edgeData = (data as unknown as CustomEdgeData) || {};
  
  // Configuration par défaut selon le type d'edge
  const getEdgeConfig = () => {
    const defaults = {
      primary: {
        strokeWidth: 4,
        strokeColor: '#3b82f6',
        animated: true,
        pathType: 'smooth' as const,
        pulseEffect: true
      },
      secondary: {
        strokeWidth: 2,
        strokeColor: '#60a5fa',
        animated: false,
        pathType: 'smooth' as const,
        pulseEffect: false
      },
      cross: {
        strokeWidth: 1,
        strokeColor: '#a855f7',
        animated: false,
        pathType: 'straight' as const,
        strokePattern: 'dashed' as const,
        pulseEffect: false
      },
      highlight: {
        strokeWidth: 5,
        strokeColor: '#4ecdc4',
        animated: true,
        pathType: 'bezier' as const,
        pulseEffect: true
      }
    };

    const type = edgeData.edgeType || 'secondary';
    return { ...defaults[type], ...edgeData };
  };

  const config = getEdgeConfig();

  // Générer le chemin selon le type
  const getPath = () => {
    switch (config.pathType) {
      case 'bezier':
        return getBezierPath({
          sourceX,
          sourceY,
          targetX,
          targetY,
          sourcePosition,
          targetPosition
        });
      case 'straight':
        return getStraightPath({
          sourceX,
          sourceY,
          targetX,
          targetY
        });
      case 'simpleBezier':
        return getSimpleBezierPath({
          sourceX,
          sourceY,
          targetX,
          targetY,
          sourcePosition,
          targetPosition
        });
      default:
        return getSmoothStepPath({
          sourceX,
          sourceY,
          targetX,
          targetY,
          sourcePosition,
          targetPosition,
          borderRadius: 20
        });
    }
  };

  const [edgePath, labelX, labelY] = getPath();

  // Styles pour les différents patterns
  const getStrokePattern = () => {
    switch (config.strokePattern) {
      case 'dashed':
        return '8,4';
      case 'dotted':
        return '2,3';
      default:
        return 'none';
    }
  };

  // ID unique pour les gradients et animations
  const gradientId = `gradient-${id}`;
  const glowId = `glow-${id}`;

  return (
    <>
      <defs>
        {/* Gradient pour l'effet de pulse */}
        {config.pulseEffect && (
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={config.strokeColor} stopOpacity="0.2">
              <animate 
                attributeName="stop-opacity" 
                values="0.2;0.8;0.2" 
                dur="2s" 
                repeatCount="indefinite" 
              />
            </stop>
            <stop offset="50%" stopColor={config.strokeColor} stopOpacity="1" />
            <stop offset="100%" stopColor={config.strokeColor} stopOpacity="0.2">
              <animate 
                attributeName="stop-opacity" 
                values="0.2;0.8;0.2" 
                dur="2s" 
                repeatCount="indefinite" 
                begin="1s"
              />
            </stop>
          </linearGradient>
        )}
        
        {/* Effet de glow pour les edges sélectionnés */}
        {selected && (
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        )}

        {/* Flèche custom */}
        {config.showArrow && (
          <marker
            id={`arrow-${id}`}
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon
              points="0,0 0,6 9,3"
              fill={config.strokeColor}
              opacity="0.8"
            />
          </marker>
        )}
      </defs>

      {/* Edge principal */}
      <path
        id={id}
        d={edgePath}
        stroke={config.pulseEffect ? `url(#${gradientId})` : config.strokeColor}
        strokeWidth={config.strokeWidth}
        strokeDasharray={getStrokePattern()}
        fill="none"
        opacity={selected ? 1 : 0.8}
        filter={selected ? `url(#${glowId})` : undefined}
        markerEnd={config.showArrow ? `url(#arrow-${id})` : markerEnd}
        className={`transition-all duration-300 ${config.animated ? 'animate-pulse' : ''}`}
      />

      {/* Edge de fond pour effet 3D */}
      <path
        d={edgePath}
        stroke="rgba(0,0,0,0.3)"
        strokeWidth={config.strokeWidth + 2}
        fill="none"
        opacity="0.5"
        style={{ transform: 'translate(1px, 1px)' }}
      />

      {/* Particules qui bougent le long de l'edge pour les connexions animées */}
      {config.animated && (
        <>
          <circle r="3" fill={config.strokeColor} opacity="0.8">
            <animateMotion dur="3s" repeatCount="indefinite" path={edgePath} />
          </circle>
          <circle r="2" fill="white" opacity="0.6">
            <animateMotion dur="3s" repeatCount="indefinite" path={edgePath} begin="1.5s" />
          </circle>
        </>
      )}

      {/* Label optionnel */}
      {config.label && (
        <text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xs font-medium fill-white"
          style={{
            background: 'rgba(0,0,0,0.7)',
            padding: '2px 6px',
            borderRadius: '4px'
          }}
        >
          {config.label}
        </text>
      )}

      {/* Point d'interaction pour les edges */}
      <circle
        cx={labelX}
        cy={labelY}
        r="8"
        fill="transparent"
        stroke={selected ? config.strokeColor : 'transparent'}
        strokeWidth="2"
        className="cursor-pointer hover:fill-white/20 transition-all duration-200"
        opacity={selected ? 0.8 : 0}
      />
    </>
  );
};

export default CustomPortfolioEdge;