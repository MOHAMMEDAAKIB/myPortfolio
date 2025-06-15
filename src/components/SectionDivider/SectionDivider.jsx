import React from 'react';

const SectionDivider = ({ type = 'default', height = 'medium' }) => {
  const getHeight = () => {
    switch (height) {
      case 'small': return 'h-8';
      case 'medium': return 'h-16';
      case 'large': return 'h-24';
      default: return 'h-16';
    }
  };

  const getGradient = () => {
    switch (type) {
      case 'gradient':
        return 'bg-gradient-to-b from-gray-800/50 via-gray-700/30 to-gray-900';
      case 'reverse':
        return 'bg-gradient-to-b from-gray-900 to-gray-800/50';
      case 'glow':
        return 'bg-gradient-to-b from-transparent via-blue-500/5 to-transparent';
      default:
        return 'bg-gradient-to-b from-gray-800/30 to-gray-900/30';
    }
  };

  return (
    <div className={`w-full ${getHeight()} ${getGradient()} relative overflow-hidden`}>
      {type === 'glow' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
      )}
    </div>
  );
};

export default SectionDivider;