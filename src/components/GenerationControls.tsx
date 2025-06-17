
import React from 'react';
import { RefreshCcw, Download, Copy } from 'lucide-react';
import { countryNameData, getAvailableCountries, type CountryCode } from '../data/countryNames';
import { type GenderFilter } from '../utils/nameGenerator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface GenerationControlsProps {
  country: CountryCode;
  genderFilter: GenderFilter;
  nameCount: number;
  isGenerating: boolean;
  onCountryChange: (country: CountryCode) => void;
  onGenderChange: (gender: GenderFilter) => void;
  onNameCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerate: () => void;
  onCopyAll: () => void;
  onDownloadTxt: () => void;
  onDownloadCsv: () => void;
}

const GenerationControls: React.FC<GenerationControlsProps> = ({
  country,
  genderFilter,
  nameCount,
  isGenerating,
  onCountryChange,
  onGenderChange,
  onNameCountChange,
  onGenerate,
  onCopyAll,
  onDownloadTxt,
  onDownloadCsv,
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Country Selector */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-3">
            Country
          </label>
          <Select value={country} onValueChange={(value: CountryCode) => onCountryChange(value)}>
            <SelectTrigger className="w-full bg-white/90 dark:bg-gray-800">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
              {getAvailableCountries().map((countryCode) => (
                <SelectItem key={countryCode} value={countryCode}>
                  {countryNameData[countryCode].label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Gender Filter - Button Group */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-3">
            Gender
          </label>
          <div className="flex rounded-lg overflow-hidden border border-white/20">
            {[
              { value: 'mixed', label: '⚧ Mixed' },
              { value: 'male', label: '♂ Male' },
              { value: 'female', label: '♀ Female' }
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => onGenderChange(value as GenderFilter)}
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
              onChange={onNameCountChange}
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
            onClick={onGenerate}
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
              onClick={onCopyAll}
              className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 flex items-center justify-center gap-1 transform hover:scale-105 active:scale-95"
              title="Copy All Names"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={onDownloadTxt}
              className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 flex items-center justify-center gap-1 transform hover:scale-105 active:scale-95"
              title="Download as TXT file for simple text editors"
            >
              <Download className="w-4 h-4" />
              TXT
            </button>
            <button
              onClick={onDownloadCsv}
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
  );
};

export default GenerationControls;
