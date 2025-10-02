import React from 'react';

interface SidebarToggleButtonProps {
  onClick: () => void;
}

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="sidebar-toggle-btn fixed top-1/2 right-4 transform -translate-y-1/2 bg-discovery-teal hover:bg-discovery-teal/80 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
      title="Ouvrir la sidebar"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export default SidebarToggleButton;
