import { countryNameData, type CountryCode } from '../data/countryNames';

export type GenderFilter = 'male' | 'female' | 'mixed';

export interface GeneratedName {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: 'male' | 'female';
  country: CountryCode;
}

export const generateRandomNames = (
  count: number = 100, 
  genderFilter: GenderFilter = 'mixed',
  country: CountryCode = 'usa'
): GeneratedName[] => {
  const names: GeneratedName[] = [];
  const countryData = countryNameData[country];
  
  if (!countryData) {
    throw new Error(`Country ${country} not supported`);
  }
  
  for (let i = 0; i < count; i++) {
    let firstName: string;
    let gender: 'male' | 'female';
    
    if (genderFilter === 'mixed') {
      gender = Math.random() > 0.5 ? 'male' : 'female';
      firstName = gender === 'male' 
        ? countryData.male[Math.floor(Math.random() * countryData.male.length)]
        : countryData.female[Math.floor(Math.random() * countryData.female.length)];
    } else if (genderFilter === 'male') {
      gender = 'male';
      firstName = countryData.male[Math.floor(Math.random() * countryData.male.length)];
    } else {
      gender = 'female';
      firstName = countryData.female[Math.floor(Math.random() * countryData.female.length)];
    }
    
    const lastName = countryData.lastNames[Math.floor(Math.random() * countryData.lastNames.length)];
    const fullName = `${firstName} ${lastName}`;
    
    names.push({
      id: `name-${i}-${Date.now()}`,
      firstName,
      lastName,
      fullName,
      gender,
      country
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
  const headers = ['First Name', 'Last Name', 'Full Name', 'Gender', 'Country'];
  const csvContent = [
    headers.join(','),
    ...names.map(name => [
      name.firstName,
      name.lastName,
      name.fullName,
      name.gender,
      name.country
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
