
import React from 'react';
import { RefreshCcw, Search, Sparkles } from 'lucide-react';
import { type GeneratedName } from '../utils/nameGenerator';
import { countryNameData, type CountryCode } from '../data/countryNames';
import NameCard from './NameCard';

interface NamesListProps {
  names: GeneratedName[];
  filteredNames: GeneratedName[];
  searchQuery: string;
  country: CountryCode;
  isGenerating: boolean;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
}

const NamesList: React.FC<NamesListProps> = ({
  names,
  filteredNames,
  searchQuery,
  country,
  isGenerating,
  onSearchChange,
  onClearSearch,
}) => {
  const displayedNames = filteredNames.length > 0 ? filteredNames : names;

  if (isGenerating) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center relative">
          {/* Loading animation with enhanced styling */}
          <div className="relative mb-6">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
            <Sparkles className="w-8 h-8 text-yellow-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
          <p className="text-white/90 text-lg font-medium drop-shadow-lg">Generating amazing names...</p>
          <p className="text-white/60 text-sm mt-2">Creating authentic names just for you</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Enhanced Search Bar */}
      <div className="max-w-lg mx-auto mb-10">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
          <input
            type="text"
            placeholder="Search names..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl border border-white/30 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 shadow-xl hover:shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      {/* Enhanced Header Section */}
      <div className="text-center mb-10">
        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {displayedNames.length} Random {countryNameData[country].label.split(' ')[1]} Names Generated
          </h2>
          {searchQuery && (
            <span className="block text-lg text-white/80 mt-2 font-medium">
              Filtered from {names.length} total names
            </span>
          )}
          <p className="text-white/70 text-base mt-3 font-medium">
            Click any name to copy it to your clipboard
          </p>
          {displayedNames.length > 0 && (
            <p className="text-white/60 text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
              Generated using authentic {countryNameData[country].label.split(' ')[1]} naming conventions. Perfect for writers, developers, and creative projects.
            </p>
          )}
        </div>
      </div>
      
      {displayedNames.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3">
          {displayedNames.map((name, index) => (
            <div
              key={name.id}
              className="animate-slide-in-enhanced"
              style={{ animationDelay: `${index * 15}ms` }}
            >
              <NameCard name={name} />
            </div>
          ))}
        </div>
      ) : searchQuery ? (
        <div className="text-center py-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-8 border border-white/20 shadow-xl">
            <div className="text-white/80 text-lg mb-4 font-medium">
              No names found matching "{searchQuery}"
            </div>
            <button
              onClick={onClearSearch}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Clear Search
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NamesList;
