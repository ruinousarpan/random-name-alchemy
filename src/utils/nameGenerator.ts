
import { maleNames, femaleNames, lastNames } from '../data/names';

export type GenderFilter = 'male' | 'female' | 'mixed';

export interface GeneratedName {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: 'male' | 'female';
}

export const generateRandomNames = (count: number = 1000, genderFilter: GenderFilter = 'mixed'): GeneratedName[] => {
  const names: GeneratedName[] = [];
  
  for (let i = 0; i < count; i++) {
    let firstName: string;
    let gender: 'male' | 'female';
    
    if (genderFilter === 'mixed') {
      gender = Math.random() > 0.5 ? 'male' : 'female';
      firstName = gender === 'male' 
        ? maleNames[Math.floor(Math.random() * maleNames.length)]
        : femaleNames[Math.floor(Math.random() * femaleNames.length)];
    } else if (genderFilter === 'male') {
      gender = 'male';
      firstName = maleNames[Math.floor(Math.random() * maleNames.length)];
    } else {
      gender = 'female';
      firstName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
    }
    
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${firstName} ${lastName}`;
    
    names.push({
      id: `name-${i}-${Date.now()}`,
      firstName,
      lastName,
      fullName,
      gender
    });
  }
  
  return names;
};

export const downloadAsText = (names: GeneratedName[], filename: string = 'random-names.txt') => {
  const content = names.map(name => name.fullName).join('\n');
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const downloadAsCSV = (names: GeneratedName[], filename: string = 'random-names.csv') => {
  const headers = ['First Name', 'Last Name', 'Full Name', 'Gender'];
  const csvContent = [
    headers.join(','),
    ...names.map(name => [
      name.firstName,
      name.lastName,
      name.fullName,
      name.gender
    ].join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
};
