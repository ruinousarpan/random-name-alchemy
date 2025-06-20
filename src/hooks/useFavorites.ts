
import { useState, useEffect } from 'react';
import { GeneratedName } from '../utils/nameGenerator';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<GeneratedName[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('name-generator-favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    }
  }, []);

  const saveFavorites = (newFavorites: GeneratedName[]) => {
    setFavorites(newFavorites);
    localStorage.setItem('name-generator-favorites', JSON.stringify(newFavorites));
  };

  const addToFavorites = (name: GeneratedName) => {
    const newFavorites = [...favorites, name];
    saveFavorites(newFavorites);
  };

  const removeFromFavorites = (nameId: string) => {
    const newFavorites = favorites.filter(name => name.id !== nameId);
    saveFavorites(newFavorites);
  };

  const isFavorite = (nameId: string) => {
    return favorites.some(name => name.id === nameId);
  };

  const clearFavorites = () => {
    saveFavorites([]);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearFavorites,
  };
};
