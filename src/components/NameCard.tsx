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

  // Enhanced avatar colors with modern gradients
  const avatarColors = [
    'bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30',
    'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30',
    'bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/30',
    'bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30',
    'bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-500/30',
    'bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-500/30',
    'bg-gradient-to-br from-teal-500 to-green-600 text-white shadow-lg shadow-teal-500/30',
    'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30',
    'bg-gradient-to-br from-fuchsia-500 to-pink-600 text-white shadow-lg shadow-fuchsia-500/30',
    'bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/30',
  ];

  // Use name hash to consistently assign colors
  const colorIndex = name.firstName.charCodeAt(0) % avatarColors.length;
  const avatarColor = avatarColors[colorIndex];

  // Gender emoji for visual distinction
  const genderEmoji = name.gender === 'male' ? '♂️' : '♀️';

  return (
    <div className="group glass dark:glass-dark rounded-xl p-2 hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-1 cursor-pointer transform hover:scale-105 active:scale-95 touch-manipulation border-0"
         onClick={handleCopy}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${avatarColor} transition-all duration-200 group-hover:scale-110 font-semibold text-xs`}>
            {name.firstName.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-white/95 dark:text-white text-xs group-hover:text-yellow-300 dark:group-hover:text-yellow-300 transition-colors truncate drop-shadow-sm">
              {name.fullName}
            </h3>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-xs text-white/70">
                {genderEmoji}
              </span>
              <span className="text-xs text-white/60 dark:text-white/60 uppercase tracking-wide font-medium">
                {name.country}
              </span>
            </div>
          </div>
        </div>
        
        <button
          className="opacity-0 group-hover:opacity-100 p-1 rounded-md glass dark:glass-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 transform hover:scale-110 active:scale-95 touch-manipulation"
          aria-label={`Copy ${name.fullName}`}
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
        >
          <Copy className="w-2.5 h-2.5 text-white/80 dark:text-white/80" />
        </button>
      </div>
      
      {/* Subtle click indicator */}
      <div className="mt-1 text-xs text-center text-white/50 dark:text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Click to copy
      </div>
    </div>
  );
};

export default NameCard;
