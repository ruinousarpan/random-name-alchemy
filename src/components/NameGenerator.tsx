
import React, { useState, useEffect } from 'react';
import { RefreshCcw, Download, Copy } from 'lucide-react';
import { generateRandomNames, downloadAsText, downloadAsCSV, copyToClipboard, type GenderFilter, type GeneratedName } from '../utils/nameGenerator';
import NameCard from './NameCard';
import ThemeToggle from './ThemeToggle';
import { toast } from '@/hooks/use-toast';

const NameGenerator: React.FC = () => {
  const [names, setNames] = useState<GeneratedName[]>([]);
  const [genderFilter, setGenderFilter] = useState<GenderFilter>('mixed');
  const [isGenerating, setIsGenerating] = useState(false);
  const [nameCount, setNameCount] = useState(100);

  useEffect(() => {
    generateNames();
  }, []);

  const generateNames = async () => {
    setIsGenerating(true);
    // Add a small delay for better UX
    setTimeout(() => {
      const newNames = generateRandomNames(nameCount, genderFilter);
      setNames(newNames);
      setIsGenerating(false);
      toast({
        title: "Names Generated!",
        description: `Generated ${nameCount} random names`,
      });
    }, 500);
  };

  const handleCopyAll = async () => {
    const allNames = names.map(name => name.fullName).join('\n');
    const success = await copyToClipboard(allNames);
    if (success) {
      toast({
        title: "All names copied!",
        description: `${names.length} names copied to clipboard`,
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
    downloadAsText(names, `random-names-${genderFilter}.txt`);
    toast({
      title: "Download started",
      description: "Names downloaded as TXT file",
    });
  };

  const handleDownloadCsv = () => {
    downloadAsCSV(names, `random-names-${genderFilter}.csv`);
    toast({
      title: "Download started",
      description: "Names downloaded as CSV file",
    });
  };

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Gender Filter */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Gender
                </label>
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value as GenderFilter)}
                  className="w-full px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="mixed">Mixed</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* Name Count */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Count
                </label>
                <select
                  value={nameCount}
                  onChange={(e) => setNameCount(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value={50}>50 Names</option>
                  <option value={100}>100 Names</option>
                  <option value={500}>500 Names</option>
                  <option value={1000}>1000 Names</option>
                </select>
              </div>

              {/* Generate Button */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Action
                </label>
                <button
                  onClick={generateNames}
                  disabled={isGenerating}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <RefreshCcw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                  {isGenerating ? 'Generating...' : 'Generate'}
                </button>
              </div>

              {/* Action Buttons */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Export
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyAll}
                    className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors flex items-center justify-center gap-1"
                    title="Copy All"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleDownloadTxt}
                    className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors flex items-center justify-center gap-1"
                    title="Download TXT"
                  >
                    <Download className="w-4 h-4" />
                    TXT
                  </button>
                  <button
                    onClick={handleDownloadCsv}
                    className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors flex items-center justify-center gap-1"
                    title="Download CSV"
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
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                {names.length} Random Names Generated
              </h2>
              <p className="text-white/60">
                Click any name to copy it to your clipboard
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {names.map((name) => (
                <NameCard key={name.id} name={name} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NameGenerator;
