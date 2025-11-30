import React, { useState, useEffect } from 'react';
import { generateRandomNames, downloadAsText, downloadAsCSV, copyToClipboard, type GenderFilter, type GeneratedName, type GeneratorMode } from '../utils/nameGenerator';
import { type CountryCode } from '../data/countryNames';
import { useStats } from '../hooks/useStats';
import { toast } from '@/hooks/use-toast';
import Header from './Header';
import GenerationControls from './GenerationControls';
import NamesList from './NamesList';
import Footer from './Footer';

interface NameGeneratorProps {
  mode?: GeneratorMode;
  initialCountry?: CountryCode;
  hideCountrySelector?: boolean;
}

const NameGenerator: React.FC<NameGeneratorProps> = ({ 
  mode = 'person',
  initialCountry = 'usa',
  hideCountrySelector = false
}) => {
  const [names, setNames] = useState<GeneratedName[]>([]);
  const [filteredNames, setFilteredNames] = useState<GeneratedName[]>([]);
  const [genderFilter, setGenderFilter] = useState<GenderFilter>('mixed');
  const [country, setCountry] = useState<CountryCode>(initialCountry);
  const [isGenerating, setIsGenerating] = useState(false);
  const [nameCount, setNameCount] = useState(100);
  const [searchQuery, setSearchQuery] = useState('');
  const { incrementGenerated } = useStats();

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
      const newNames = generateRandomNames(nameCount, genderFilter, country, mode);
      setNames(newNames);
      setSearchQuery(''); // Clear search when generating new names
      incrementGenerated(nameCount, country);
      setIsGenerating(false);
      
      const modeLabel = mode === 'username' ? 'usernames' : mode === 'pet' ? 'pet names' : `names from ${country.toUpperCase()}`;
      toast({
        title: "Names Generated!",
        description: `Generated ${nameCount} random ${modeLabel}`,
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
    downloadAsText(namesToDownload, `random-names-${country}-${genderFilter}.txt`);
    toast({
      title: "Download started",
      description: "Names downloaded as TXT file",
    });
  };

  const handleDownloadCsv = () => {
    const namesToDownload = filteredNames.length > 0 ? filteredNames : names;
    downloadAsCSV(namesToDownload, `random-names-${country}-${genderFilter}.csv`);
    toast({
      title: "Download started",
      description: "Names downloaded as CSV file",
    });
  };

  const handleNameCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setNameCount(Math.min(Math.max(value, 1), 1000));
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 dark:from-violet-900 dark:via-purple-900 dark:to-fuchsia-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-violet-600/20 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-400/10 to-fuchsia-600/10 rounded-full blur-3xl animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
      </div>

      <Header />

      {/* Controls */}
      <div className="container mx-auto px-4 relative z-10">
        <GenerationControls
          country={country}
          genderFilter={genderFilter}
          nameCount={nameCount}
          isGenerating={isGenerating}
          onCountryChange={setCountry}
          onGenderChange={setGenderFilter}
          onNameCountChange={handleNameCountChange}
          onGenerate={generateNames}
          onCopyAll={handleCopyAll}
          onDownloadTxt={handleDownloadTxt}
          onDownloadCsv={handleDownloadCsv}
          hideCountrySelector={hideCountrySelector}
          hideGenderFilter={mode !== 'person'}
        />
      </div>

      {/* Names Grid */}
      <div className="container mx-auto px-4 pb-12 relative z-10">
        <NamesList
          names={names}
          filteredNames={filteredNames}
          searchQuery={searchQuery}
          country={country}
          isGenerating={isGenerating}
          onSearchChange={handleSearchChange}
          onClearSearch={handleClearSearch}
        />
      </div>

      <Footer />
    </div>
  );
};

export default NameGenerator;
