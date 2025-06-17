
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
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <RefreshCcw className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
          <p className="text-white/80 text-lg">Generating random names...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search names..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          {displayedNames.length} Random {countryNameData[country].label.split(' ')[1]} Names Generated
          {searchQuery && (
            <span className="block text-lg text-white/70 mt-1">
              Filtered from {names.length} total names
            </span>
          )}
        </h2>
        <p className="text-white/60">
          Click any name to copy it to your clipboard
        </p>
        {displayedNames.length > 0 && (
          <p className="text-white/50 text-sm mt-2">
            Generated using authentic {countryNameData[country].label.split(' ')[1]} naming conventions. Perfect for writers, developers, and creative projects.
          </p>
        )}
      </div>
      
      {displayedNames.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedNames.map((name) => (
            <NameCard key={name.id} name={name} />
          ))}
        </div>
      ) : searchQuery ? (
        <div className="text-center py-12">
          <div className="text-white/60 text-lg mb-4">
            No names found matching "{searchQuery}"
          </div>
          <button
            onClick={onClearSearch}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
          >
            Clear Search
          </button>
        </div>
      ) : null}
    </>
  );
};

export default NamesList;
