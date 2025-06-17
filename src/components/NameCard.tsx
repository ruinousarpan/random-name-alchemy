
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

  // Generate random avatar colors for visual variety
  const avatarColors = [
    'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
    'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
    'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
    'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
  ];

  // Use name hash to consistently assign colors
  const colorIndex = name.firstName.charCodeAt(0) % avatarColors.length;
  const avatarColor = avatarColors[colorIndex];

  // Gender emoji for visual distinction
  const genderEmoji = name.gender === 'male' ? '♂️' : '♀️';

  return (
    <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer transform hover:scale-105 active:scale-95 touch-manipulation"
         onClick={handleCopy}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${avatarColor} transition-all duration-200 group-hover:scale-110 font-bold text-lg`}>
            {name.firstName.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors truncate">
              {name.fullName}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                {genderEmoji} {name.gender}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                {name.country}
              </span>
            </div>
          </div>
        </div>
        
        <button
          className="opacity-0 group-hover:opacity-100 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-110 active:scale-95 touch-manipulation"
          aria-label={`Copy ${name.fullName}`}
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
        >
          <Copy className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      
      {/* Subtle click indicator */}
      <div className="mt-3 text-xs text-center text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Click to copy
      </div>
    </div>
  );
};

export default NameCard;
