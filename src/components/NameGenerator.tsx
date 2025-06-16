
import React, { useState, useEffect } from 'react';
import { RefreshCcw, Download, Copy, Search } from 'lucide-react';
import { generateRandomNames, downloadAsText, downloadAsCSV, copyToClipboard, type GenderFilter, type GeneratedName } from '../utils/nameGenerator';
import NameCard from './NameCard';
import ThemeToggle from './ThemeToggle';
import { toast } from '@/hooks/use-toast';

const NameGenerator: React.FC = () => {
  const [names, setNames] = useState<GeneratedName[]>([]);
  const [filteredNames, setFilteredNames] = useState<GeneratedName[]>([]);
  const [genderFilter, setGenderFilter] = useState<GenderFilter>('mixed');
  const [isGenerating, setIsGenerating] = useState(false);
  const [nameCount, setNameCount] = useState(100);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    generateNames();
  }, []);

  useEffect(() => {
    // Filter names based on search query
    if (searchQuery.trim() === '') {
      setFilteredNames(names);
    } else {
      const filtered = names.filter(name => 
        name.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        name.firstName.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
        name.lastName.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      setFilteredNames(filtered);
    }
  }, [names, searchQuery]);

  const generateNames = async () => {
    setIsGenerating(true);
    // Add a small delay for better UX
    setTimeout(() => {
      const newNames = generateRandomNames(nameCount, genderFilter);
      setNames(newNames);
      setSearchQuery(''); // Clear search when generating new names
      setIsGenerating(false);
      toast({
        title: "Names Generated!",
        description: `Generated ${nameCount} random names`,
      });
    }, 500);
  };

  const handleCopyAll = async () => {
    const namesToCopy = filteredNames.length > 0 ? filteredNames : names;
    const allNames = namesToCopy.map(name => name.fullName).join('\n');
    const success = await copyToClipboard(allNames);
    if (success) {
      toast({
        title: "All names copied!",
        description: `${namesToCopy.length} names copied to clipboard`,
      });
    } else {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const handleDownloadTxt = () => {
    const namesToDownload = filteredNames.length > 0 ? filteredNames : names;
    downloadAsText(namesToDownload, `random-names-${genderFilter}.txt`);
    toast({
      title: "Download started",
      description: "Names downloaded as TXT file",
    });
  };

  const handleDownloadCsv = () => {
    const namesToDownload = filteredNames.length > 0 ? filteredNames : names;
    downloadAsCSV(namesToDownload, `random-names-${genderFilter}.csv`);
    toast({
      title: "Download started",
      description: "Names downloaded as CSV file",
    });
  };

  const handleNameCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setNameCount(Math.min(Math.max(value, 1), 1000));
  };

  const displayedNames = filteredNames.length > 0 ? filteredNames : names;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
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
                Generate thousands of random names instantly. Perfect for writing, testing, or creative projects.
              </p>
            </div>
            <ThemeToggle />
          </div>

          {/* Controls */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Gender Filter - Button Group */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">
                  Gender
                </label>
                <div className="flex rounded-lg overflow-hidden border border-white/20">
                  {[
                    { value: 'mixed', label: '⚧ Mixed', emoji: '⚧' },
                    { value: 'male', label: '♂ Male', emoji: '♂' },
                    { value: 'female', label: '♀ Female', emoji: '♀' }
                  ].map(({ value, label }) => (
                    <button
                      key={value}
                      onClick={() => setGenderFilter(value as GenderFilter)}
                      className={`flex-1 px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        genderFilter === value
                          ? 'bg-white/90 text-gray-900'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Name Count Input */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">
                  Count
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={nameCount}
                    onChange={handleNameCountChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter count..."
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                    Max: 1000
                  </span>
                </div>
              </div>

              {/* Generate Button */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">
                  Action
                </label>
                <button
                  onClick={generateNames}
                  disabled={isGenerating}
                  className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
                >
                  <RefreshCcw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                  {isGenerating ? 'Generating...' : 'Generate'}
                </button>
              </div>

              {/* Export Actions */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">
                  Export
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyAll}
                    className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 flex items-center justify-center gap-1 transform hover:scale-105 active:scale-95"
                    title="Copy All Names"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleDownloadTxt}
                    className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 flex items-center justify-center gap-1 transform hover:scale-105 active:scale-95"
                    title="Download as TXT file for simple text editors"
                  >
                    <Download className="w-4 h-4" />
                    TXT
                  </button>
                  <button
                    onClick={handleDownloadCsv}
                    className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 flex items-center justify-center gap-1 transform hover:scale-105 active:scale-95"
                    title="Download as CSV for Excel or Google Sheets"
                  >
                    <Download className="w-4 h-4" />
                    CSV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Names Grid */}
      <div className="container mx-auto px-4 pb-12">
        {isGenerating ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <RefreshCcw className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
              <p className="text-white/80 text-lg">Generating random names...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search names..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                {displayedNames.length} Random Names Generated
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
                  Generated using SSA and US Census data. Perfect for writers, developers, and creative projects.
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
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                >
                  Clear Search
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default NameGenerator;
