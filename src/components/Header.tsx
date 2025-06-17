
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container mx-auto px-4 py-12">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Random Name
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Generator
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
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
