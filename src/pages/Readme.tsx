
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Download, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Readme: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-pink-700">
      {/* Header with back button */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="text-white hover:bg-white/10 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Generator
          </Button>
        </Link>

        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Random Name Generator
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500">
                  Documentation
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                The ultimate tool for generating thousands of random names from different countries and cultures.
              </p>
            </div>

            {/* Features section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  Key Features
                </h2>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-blue-400 mt-0.5" />
                    <span><strong>20+ Countries:</strong> Generate names from diverse cultures including American, British, French, German, Japanese, Korean, and many more.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Download className="w-5 h-5 text-green-400 mt-0.5" />
                    <span><strong>Export Options:</strong> Download your generated names as TXT or CSV files for easy use in your projects.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span><strong>Bulk Generation:</strong> Generate up to 1000 names at once with customizable gender preferences.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Perfect For</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-white mb-2">Writers</h3>
                    <p className="text-sm text-white/80">Character names for novels, stories, and scripts</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-white mb-2">Developers</h3>
                    <p className="text-sm text-white/80">Test data and placeholder names for applications</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-white mb-2">Gamers</h3>
                    <p className="text-sm text-white/80">Character names for RPGs and online games</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-white mb-2">Educators</h3>
                    <p className="text-sm text-white/80">Sample names for teaching and presentations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to use section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">How to Use</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                  <h3 className="font-semibold text-white mb-2">Select Country</h3>
                  <p className="text-white/80">Choose from 20+ countries to get culturally appropriate names</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                  <h3 className="font-semibold text-white mb-2">Set Preferences</h3>
                  <p className="text-white/80">Choose gender preference and number of names to generate</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                  <h3 className="font-semibold text-white mb-2">Generate & Export</h3>
                  <p className="text-white/80">Click generate and download your names in TXT or CSV format</p>
                </div>
              </div>
            </div>

            {/* SEO content section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Random Name Generator?</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/90 mb-4">
                  Our random name generator stands out as the most comprehensive and user-friendly tool for generating authentic names from around the world. Whether you're a creative writer seeking the perfect character name, a developer needing test data, or a gamer looking for unique usernames, our tool provides instant access to thousands of culturally diverse names.
                </p>
                <p className="text-white/90 mb-4">
                  The generator uses carefully curated databases of real names from each country, ensuring authenticity and cultural accuracy. Unlike other name generators that produce random combinations, our tool draws from actual naming conventions and popular names from each region.
                </p>
                <p className="text-white/90">
                  With support for bulk generation and multiple export formats, you can quickly generate hundreds of names for large projects. The intuitive interface makes it easy to filter by gender and instantly download your results in the format that works best for your workflow.
                </p>
              </div>
            </div>

            {/* CTA section */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Generate Names?</h2>
              <p className="text-white/90 mb-6">Start creating unique, culturally diverse names for your projects today.</p>
              <Link to="/">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3">
                  Start Generating Names
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readme;
