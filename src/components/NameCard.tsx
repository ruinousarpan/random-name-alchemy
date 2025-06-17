
import React from 'react';
import { Copy } from 'lucide-react';
import { GeneratedName, copyToClipboard } from '../utils/nameGenerator';
import { toast } from '@/hooks/use-toast';

interface NameCardProps {
  name: GeneratedName;
}

const NameCard: React.FC<NameCardProps> = ({ name }) => {
  const handleCopy = async () => {
    const success = await copyToClipboard(name.fullName);
    if (success) {
      toast({
        title: "Copied!",
        description: `${name.fullName} copied to clipboard`,
      });
    } else {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  // Improved avatar colors with better contrast
  const avatarColors = [
    'bg-gradient-to-br from-blue-500 to-blue-600 text-white',
    'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white',
    'bg-gradient-to-br from-purple-500 to-purple-600 text-white',
    'bg-gradient-to-br from-orange-500 to-orange-600 text-white',
    'bg-gradient-to-br from-pink-500 to-pink-600 text-white',
    'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white',
    'bg-gradient-to-br from-teal-500 to-teal-600 text-white',
    'bg-gradient-to-br from-cyan-500 to-cyan-600 text-white',
    'bg-gradient-to-br from-violet-500 to-violet-600 text-white',
    'bg-gradient-to-br from-rose-500 to-rose-600 text-white',
  ];

  // Use name hash to consistently assign colors
  const colorIndex = name.firstName.charCodeAt(0) % avatarColors.length;
  const avatarColor = avatarColors[colorIndex];

  // Gender emoji for visual distinction
  const genderEmoji = name.gender === 'male' ? '♂️' : '♀️';

  return (
    <div className="group bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-2 border border-gray-200/60 dark:border-gray-700/60 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 cursor-pointer transform hover:scale-105 active:scale-95 touch-manipulation"
         onClick={handleCopy}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${avatarColor} transition-all duration-200 group-hover:scale-110 font-semibold text-xs shadow-sm`}>
            {name.firstName.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 dark:text-white text-xs group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors truncate">
              {name.fullName}
            </h3>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {genderEmoji}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide font-medium">
                {name.country}
              </span>
            </div>
          </div>
        </div>
        
        <button
          className="opacity-0 group-hover:opacity-100 p-1 rounded-md bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-110 active:scale-95 touch-manipulation"
          aria-label={`Copy ${name.fullName}`}
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
        >
          <Copy className="w-2.5 h-2.5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      
      {/* Subtle click indicator */}
      <div className="mt-1 text-xs text-center text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Click to copy
      </div>
    </div>
  );
};

export default NameCard;
