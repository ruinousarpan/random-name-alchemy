
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
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
                ✨ 20+ Countries
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300">
                🚀 Instant Export
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300">
                📱 Mobile Friendly
              </span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
