
import React from 'react';
import { Heart, Trash2, Download, Copy } from 'lucide-react';
import { GeneratedName, downloadAsText, downloadAsCSV, copyToClipboard } from '../utils/nameGenerator';
import { useFavorites } from '../hooks/useFavorites';
import { toast } from '@/hooks/use-toast';
import NameCard from './NameCard';

interface FavoritesPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const FavoritesPanel: React.FC<FavoritesPanelProps> = ({ isOpen, onClose }) => {
  const { favorites, clearFavorites } = useFavorites();

  const handleCopyAllFavorites = async () => {
    if (favorites.length === 0) return;
    
    const allNames = favorites.map(name => name.fullName).join('\n');
    const success = await copyToClipboard(allNames);
    if (success) {
      toast({
        title: "All favorites copied!",
        description: `${favorites.length} names copied to clipboard`,
      });
    }
  };

  const handleDownloadFavorites = (format: 'txt' | 'csv') => {
    if (favorites.length === 0) return;
    
    if (format === 'txt') {
      downloadAsText(favorites, 'favorite-names.txt');
    } else {
      downloadAsCSV(favorites, 'favorite-names.csv');
    }
    
    toast({
      title: "Download started",
      description: `Favorites downloaded as ${format.toUpperCase()} file`,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-pink-400 fill-current" />
              <h2 className="text-2xl font-bold text-white">
                Favorite Names ({favorites.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors p-2"
            >
              ✕
            </button>
          </div>
          
          {favorites.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={handleCopyAllFavorites}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
                Copy All
              </button>
              <button
                onClick={() => handleDownloadFavorites('txt')}
                className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                TXT
              </button>
              <button
                onClick={() => handleDownloadFavorites('csv')}
                className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                CSV
              </button>
              <button
                onClick={clearFavorites}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-white transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </button>
            </div>
          )}
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <p className="text-white/70 text-lg">No favorite names yet</p>
              <p className="text-white/50 text-sm mt-2">
                Click the heart icon on any name to add it to your favorites
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {favorites.map((name) => (
                <NameCard key={name.id} name={name} showFavorite={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPanel;
