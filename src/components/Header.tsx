
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      <div className="relative container mx-auto px-4 py-12 z-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Random Name
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 animate-glow">
                Generator
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl drop-shadow-md">
              Generate thousands of random names from different countries. Perfect for writing, testing, or creative projects.
            </p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
