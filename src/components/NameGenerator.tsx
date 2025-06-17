
import React, { useState, useEffect } from 'react';
import { generateRandomNames, downloadAsText, downloadAsCSV, copyToClipboard, type GenderFilter, type GeneratedName } from '../utils/nameGenerator';
import { type CountryCode } from '../data/countryNames';
import { toast } from '@/hooks/use-toast';
import Header from './Header';
import GenerationControls from './GenerationControls';
import NamesList from './NamesList';
import Footer from './Footer';

const NameGenerator: React.FC = () => {
  const [names, setNames] = useState<GeneratedName[]>([]);
  const [filteredNames, setFilteredNames] = useState<GeneratedName[]>([]);
  const [genderFilter, setGenderFilter] = useState<GenderFilter>('mixed');
  const [country, setCountry] = useState<CountryCode>('usa');
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
      const newNames = generateRandomNames(nameCount, genderFilter, country);
      setNames(newNames);
      setSearchQuery(''); // Clear search when generating new names
      setIsGenerating(false);
      toast({
        title: "Names Generated!",
        description: `Generated ${nameCount} random names from ${country.toUpperCase()}`,
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900">
      <Header />

      {/* Controls */}
      <div className="container mx-auto px-4">
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
        />
      </div>

      {/* Names Grid */}
      <div className="container mx-auto px-4 pb-12">
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
