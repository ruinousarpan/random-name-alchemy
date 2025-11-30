
import React from 'react';
import { RefreshCcw, Download, Copy, Sparkles } from 'lucide-react';
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
  hideCountrySelector?: boolean;
  hideGenderFilter?: boolean;
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
  hideCountrySelector = false,
  hideGenderFilter = false,
}) => {
  const totalCols = hideCountrySelector && hideGenderFilter ? 3 : hideCountrySelector || hideGenderFilter ? 4 : 5;
  return (
    <div className="relative">
      {/* Enhanced glass container with better shadows */}
      <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 mb-12 shadow-2xl shadow-black/20 relative overflow-hidden">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-3xl"></div>
        
        <div className={`relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${totalCols} gap-8`}>
          {/* Country Selector */}
          {!hideCountrySelector && <div className="space-y-3">
            <label className="block text-white/90 text-sm font-semibold mb-3 tracking-wide">
              🌍 Country
            </label>
            <Select value={country} onValueChange={(value: CountryCode) => onCountryChange(value)}>
              <SelectTrigger className="w-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-white/30 rounded-xl h-12 text-gray-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl max-h-60 overflow-y-auto">
                {getAvailableCountries().map((countryCode) => (
                  <SelectItem key={countryCode} value={countryCode} className="hover:bg-white/20 dark:hover:bg-white/10">
                    {countryNameData[countryCode].label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>}

          {/* Gender Filter - Enhanced Button Group */}
          {!hideGenderFilter && <div className="space-y-3">
            <label className="block text-white/90 text-sm font-semibold mb-3 tracking-wide">
              ⚧ Gender
            </label>
            <div className="flex rounded-xl overflow-hidden border border-white/30 shadow-lg">
              {[
                { value: 'mixed', label: '⚧ Mixed', gradient: 'from-purple-400 to-indigo-500' },
                { value: 'male', label: '♂ Male', gradient: 'from-blue-400 to-cyan-500' },
                { value: 'female', label: '♀ Female', gradient: 'from-pink-400 to-rose-500' }
              ].map(({ value, label, gradient }) => (
                <button
                  key={value}
                  onClick={() => onGenderChange(value as GenderFilter)}
                  className={`flex-1 px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                    genderFilter === value
                      ? `bg-gradient-to-r ${gradient} text-white shadow-lg transform scale-105`
                      : 'bg-white/20 text-white/90 hover:bg-white/30 hover:scale-102'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>}

          {/* Enhanced Name Count Input */}
          <div className="space-y-3">
            <label className="block text-white/90 text-sm font-semibold mb-3 tracking-wide">
              📊 Count
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="1000"
                value={nameCount}
                onChange={onNameCountChange}
                className="w-full px-4 py-3 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-white/30 focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-lg hover:shadow-xl transition-all duration-300 text-gray-900 dark:text-white h-12"
                placeholder="Enter count..."
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-md">
                Max: 1000
              </span>
            </div>
          </div>

          {/* Enhanced Generate Button */}
          <div className="space-y-3">
            <label className="block text-white/90 text-sm font-semibold mb-3 tracking-wide">
              ⚡ Action
            </label>
            <button
              onClick={onGenerate}
              disabled={isGenerating}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl h-12"
            >
              {isGenerating ? (
                <RefreshCcw className="w-5 h-5 animate-spin" />
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
              {isGenerating ? 'Generating...' : 'Generate'}
            </button>
          </div>

          {/* Enhanced Export Actions */}
          <div className="space-y-3">
            <label className="block text-white/90 text-sm font-semibold mb-3 tracking-wide">
              📤 Export
            </label>
            <div className="flex gap-2">
              <button
                onClick={onCopyAll}
                className="flex-1 px-3 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                title="Copy All Names"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={onDownloadTxt}
                className="flex-1 px-2 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-1 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-xs font-medium"
                title="Download as TXT file"
              >
                <Download className="w-3 h-3" />
                TXT
              </button>
              <button
                onClick={onDownloadCsv}
                className="flex-1 px-2 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-1 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-xs font-medium"
                title="Download as CSV file"
              >
                <Download className="w-3 h-3" />
                CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerationControls;
