
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-dark border-t border-white/10 mt-16 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
              Random Name Generator
            </h3>
            <p className="text-white/80 mb-4 max-w-md drop-shadow-sm">
              Generate authentic names from 20+ countries for your creative projects, testing, and writing needs. 
              Fast, free, and perfect for developers, writers, and content creators.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 glass rounded-full text-sm text-white/90 border border-violet-400/30">
                20+ Countries
              </span>
              <span className="px-3 py-1 glass rounded-full text-sm text-white/90 border border-pink-400/30">
                Instant Export
              </span>
              <span className="px-3 py-1 glass rounded-full text-sm text-white/90 border border-cyan-400/30">
                Mobile Friendly
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-sm">Popular Countries</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-yellow-300 transition-colors drop-shadow-sm">🇺🇸 American Names</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-300 transition-colors drop-shadow-sm">🇮🇳 Indian Names</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-300 transition-colors drop-shadow-sm">🇯🇵 Japanese Names</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-300 transition-colors drop-shadow-sm">🇫🇷 French Names</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-300 transition-colors drop-shadow-sm">🇩🇪 German Names</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-sm">Features</h4>
            <ul className="space-y-2">
              <li><span className="text-white/70 drop-shadow-sm">✨ Gender-specific names</span></li>
              <li><span className="text-white/70 drop-shadow-sm">📊 Export to CSV/TXT</span></li>
              <li><span className="text-white/70 drop-shadow-sm">🔍 Search & filter</span></li>
              <li><span className="text-white/70 drop-shadow-sm">📱 Mobile responsive</span></li>
              <li><span className="text-white/70 drop-shadow-sm">🌙 Dark mode support</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm drop-shadow-sm">
            © 2024 Random Name Generator. All names are fictional and for creative use only.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-yellow-300 text-sm transition-colors drop-shadow-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-yellow-300 text-sm transition-colors drop-shadow-sm">Terms of Use</a>
            <a href="#" className="text-white/60 hover:text-yellow-300 text-sm transition-colors drop-shadow-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
