import React, { useState } from 'react';
import { FileText, Heart, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import FavoritesPanel from './FavoritesPanel';
import StatsPanel from './StatsPanel';
import { useFavorites } from '../hooks/useFavorites';

const Header: React.FC = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const { favorites } = useFavorites();

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-yellow-300/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-1.5 h-1.5 bg-pink-300/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300/40 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 z-10">
          <div className="flex justify-between items-start mb-12">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                Random Name
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 animate-glow filter drop-shadow-lg">
                  Generator
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-lg leading-relaxed">
                Generate thousands of random names from different countries. Perfect for writing, testing, or creative projects.
              </p>
              
              {/* Added feature highlights */}
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  ✨ 26+ Countries
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  🚀 Instant Export
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  📱 Mobile Friendly
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  ❤️ Save Favorites
                </span>
              </div>
            </div>
            
            {/* Top right buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFavorites(true)}
                className="relative flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
                aria-label="View favorites"
              >
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Favorites</span>
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {favorites.length > 9 ? '9+' : favorites.length}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setShowStats(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
                aria-label="View statistics"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="hidden sm:inline">Stats</span>
              </button>
              
              <Link 
                to="/readme"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
                aria-label="View README documentation"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">README</span>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <FavoritesPanel isOpen={showFavorites} onClose={() => setShowFavorites(false)} />
      <StatsPanel isOpen={showStats} onClose={() => setShowStats(false)} />
    </>
  );
};

export default Header;
