
import React from 'react';
import { BarChart3, TrendingUp, Heart, Copy, Globe } from 'lucide-react';
import { useStats } from '../hooks/useStats';
import { useFavorites } from '../hooks/useFavorites';
import { countryNameData } from '../data/countryNames';

interface StatsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ isOpen, onClose }) => {
  const { stats } = useStats();
  const { favorites } = useFavorites();

  if (!isOpen) return null;

  const statItems = [
    {
      icon: TrendingUp,
      label: 'Names Generated',
      value: stats.totalGenerated.toLocaleString(),
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
    },
    {
      icon: Copy,
      label: 'Names Copied',
      value: stats.totalCopied.toLocaleString(),
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
    },
    {
      icon: Heart,
      label: 'Favorites',
      value: favorites.length.toString(),
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
    },
    {
      icon: Globe,
      label: 'Sessions',
      value: stats.sessionsCount.toString(),
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-2xl w-full max-w-2xl">
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Your Statistics</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors p-2"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {statItems.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} rounded-xl p-4 border border-white/10`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-white/80 text-sm font-medium">
                    {item.label}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          
          {stats.favoriteCountry && (
            <div className="bg-white/10 rounded-xl p-4 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Most Recent Country</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  {countryNameData[stats.favoriteCountry as keyof typeof countryNameData]?.flag}
                </span>
                <span className="text-white">
                  {countryNameData[stats.favoriteCountry as keyof typeof countryNameData]?.label}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
