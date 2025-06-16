
import React from 'react';
import { Copy, User } from 'lucide-react';
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

  return (
    <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            name.gender === 'male' 
              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
              : 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
          }`}>
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
              {name.fullName}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
              {name.gender}
            </p>
          </div>
        </div>
        
        <button
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
          aria-label={`Copy ${name.fullName}`}
        >
          <Copy className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default NameCard;
