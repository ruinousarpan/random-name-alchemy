
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Random Name Generator
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Generate authentic names from 20+ countries for your creative projects, testing, and writing needs. 
              Fast, free, and perfect for developers, writers, and content creators.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                20+ Countries
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                Instant Export
              </span>
              <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                Mobile Friendly
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Popular Countries</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">🇺🇸 American Names</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">🇮🇳 Indian Names</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">🇯🇵 Japanese Names</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">🇫🇷 French Names</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">🇩🇪 German Names</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">✨ Gender-specific names</span></li>
              <li><span className="text-gray-300">📊 Export to CSV/TXT</span></li>
              <li><span className="text-gray-300">🔍 Search & filter</span></li>
              <li><span className="text-gray-300">📱 Mobile responsive</span></li>
              <li><span className="text-gray-300">🌙 Dark mode support</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Random Name Generator. All names are fictional and for creative use only.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Use</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
