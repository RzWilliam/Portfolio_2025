import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Handle, Position, type NodeProps } from '@xyflow/react';

interface ContactNodeData {
  title: string;
  email?: string;
  github?: string;
  linkedin?: string;
  logo?: string;
}

const ContactNode: React.FC<NodeProps> = ({ data, selected }) => {
  const nodeData = data as unknown as ContactNodeData;

  // Determine href and label
  let href = '';
  let isExternal = false;
  let label: React.ReactNode = nodeData.title;

  if (nodeData.email) {
    href = `mailto:${nodeData.email}`;
    label = <span className="text-sm font-medium">{nodeData.email}</span>;
  } else if (nodeData.github) {
    href = nodeData.github;
    isExternal = true;
  } else if (nodeData.linkedin) {
    href = nodeData.linkedin;
    isExternal = true;
  }

  const content = nodeData.logo ? (
    <img src={nodeData.logo} alt={nodeData.title} className="w-full h-full object-contain" />
  ) : (
    <div className="text-sm text-white px-2 text-center">{label}</div>
  );

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1400);
    return () => window.clearTimeout(t);
  }, [copied]);

  // helper to copy text with fallback
  const copyText = (text: string) => {
    if (!text) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => setCopied(true)).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); setCopied(true); } catch { /* copy fallback failed */ }
        document.body.removeChild(ta);
      });
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); setCopied(true); } catch { /* copy fallback failed */ }
      document.body.removeChild(ta);
    }
    // show sonner toast if available
    try { toast.success('Adresse copiée'); } catch { /* sonner not available */ }
  };

  return (
    <div className="relative">
      <Handle type="target" position={Position.Top} id="top-target" className="opacity-0" />
      <Handle type="source" position={Position.Top} id="top-source" className="opacity-0" />
      <Handle type="target" position={Position.Left} id="left-target" className="opacity-0" />
      <Handle type="source" position={Position.Right} id="right-source" className="opacity-0" />
      <Handle type="target" position={Position.Bottom} id="bottom-target" className="opacity-0" />
      <Handle type="source" position={Position.Bottom} id="bottom-source" className="opacity-0" />

      {/* If this is an email node, clicking copies to clipboard and shows a toast */}
      {nodeData.email ? (
        <div
          className={`w-fit h-12 rounded-full bg-zinc-800 shadow-xl border border-zinc-400/30 flex items-center justify-between px-4 py-2 select-none cursor-pointer hover:scale-105 transition-all ${selected ? 'ring-4 ring-discovery-teal/70' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            copyText(nodeData.email || '');
          }}
        >
          <div className="text-sm text-white truncate">{nodeData.email}</div>
        </div>
      ) : (
        <a
          href={href || '#'}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={`w-20 h-20 rounded-full bg-zinc-800 shadow-xl border border-zinc-400/30 cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-2xl flex items-center justify-center p-3 ${selected ? 'ring-4 ring-discovery-teal/70 scale-105' : ''}`}
          onClick={(e) => {
            // allow normal anchor behavior; if no href, prevent navigation
            if (!href) e.preventDefault();
          }}
        >
          {content}
        </a>
      )}

      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <div className="text-xs font-bold text-white bg-black/60 px-2 py-1 rounded">
          {nodeData.title}
        </div>
      </div>
    </div>
  );
};

export default ContactNode;
