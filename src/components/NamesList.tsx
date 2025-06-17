
import React from 'react';
import { RefreshCcw, Search } from 'lucide-react';
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
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <RefreshCcw className="w-10 h-10 text-white animate-spin mx-auto mb-3" />
          <p className="text-white/80 text-base">Generating random names...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search names..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-sm"
          />
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-white mb-1">
          {displayedNames.length} Random {countryNameData[country].label.split(' ')[1]} Names Generated
          {searchQuery && (
            <span className="block text-base text-white/70 mt-0.5">
              Filtered from {names.length} total names
            </span>
          )}
        </h2>
        <p className="text-white/60 text-sm">
          Click any name to copy it to your clipboard
        </p>
        {displayedNames.length > 0 && (
          <p className="text-white/50 text-xs mt-1">
            Generated using authentic {countryNameData[country].label.split(' ')[1]} naming conventions. Perfect for writers, developers, and creative projects.
          </p>
        )}
      </div>
      
      {displayedNames.length > 0 ? (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2">
          {displayedNames.map((name, index) => (
            <div
              key={name.id}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 20}ms` }}
            >
              <NameCard name={name} />
            </div>
          ))}
        </div>
      ) : searchQuery ? (
        <div className="text-center py-10">
          <div className="text-white/60 text-base mb-3">
            No names found matching "{searchQuery}"
          </div>
          <button
            onClick={onClearSearch}
            className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-md transition-colors text-sm"
          >
            Clear Search
          </button>
        </div>
      ) : null}
    </>
  );
};

export default NamesList;
