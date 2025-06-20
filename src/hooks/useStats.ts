
import { useState, useEffect } from 'react';

interface GenerationStats {
  totalGenerated: number;
  sessionsCount: number;
  favoriteCountry: string;
  totalCopied: number;
}

export const useStats = () => {
  const [stats, setStats] = useState<GenerationStats>({
    totalGenerated: 0,
    sessionsCount: 0,
    favoriteCountry: 'usa',
    totalCopied: 0,
  });

  useEffect(() => {
    const savedStats = localStorage.getItem('name-generator-stats');
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats));
      } catch (error) {
        console.error('Error loading stats:', error);
      }
    }
  }, []);

  const saveStats = (newStats: GenerationStats) => {
    setStats(newStats);
    localStorage.setItem('name-generator-stats', JSON.stringify(newStats));
  };

  const incrementGenerated = (count: number, country: string) => {
    const newStats = {
      ...stats,
      totalGenerated: stats.totalGenerated + count,
      sessionsCount: stats.sessionsCount + 1,
      favoriteCountry: country,
    };
    saveStats(newStats);
  };

  const incrementCopied = () => {
    const newStats = {
      ...stats,
      totalCopied: stats.totalCopied + 1,
    };
    saveStats(newStats);
  };

  return {
    stats,
    incrementGenerated,
    incrementCopied,
  };
};
