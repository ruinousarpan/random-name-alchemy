import { countryNameData, type CountryCode } from '../data/countryNames';

export type GenderFilter = 'male' | 'female' | 'mixed';
export type GeneratorMode = 'person' | 'username' | 'pet';

export interface GeneratedName {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: 'male' | 'female';
  country: CountryCode;
}

// Username generation data
const usernameAdjectives = [
  'Shadow', 'Dark', 'Silent', 'Toxic', 'Neon', 'Royal', 'Frost', 'Cyber', 
  'Phantom', 'Thunder', 'Lightning', 'Fire', 'Ice', 'Storm', 'Crimson', 'Mystic',
  'Savage', 'Wild', 'Epic', 'Legendary', 'Supreme', 'Ultimate', 'Elite', 'Alpha',
  'Beta', 'Omega', 'Quantum', 'Digital', 'Cosmic', 'Stellar', 'Lunar', 'Solar',
  'Ghost', 'Stealth', 'Ninja', 'Rogue', 'Knight', 'Dragon', 'Phoenix', 'Titan'
];

const usernameNouns = [
  'Wolf', 'Sniper', 'Gamer', 'Rider', 'Hunter', 'Warrior', 'Knight', 'Assassin',
  'Demon', 'Angel', 'Beast', 'Legend', 'Master', 'King', 'Queen', 'Prince',
  'Shadow', 'Blade', 'Storm', 'Thunder', 'Lightning', 'Fire', 'Ice', 'Dragon',
  'Phoenix', 'Tiger', 'Lion', 'Eagle', 'Hawk', 'Raven', 'Viper', 'Cobra',
  'Reaper', 'Ninja', 'Samurai', 'Slayer', 'Destroyer', 'Conqueror', 'Emperor', 'Titan'
];

const usernameConnectors = ['_', '-', '', 'X', 'x'];

// Pet name data
const petNames = [
  'Milo', 'Luna', 'Simba', 'Bella', 'Oreo', 'Whiskers', 'Coco', 'Bruno', 
  'Shadow', 'Misty', 'Snowy', 'Ginger', 'Charlie', 'Max', 'Daisy', 'Lucy',
  'Oliver', 'Leo', 'Lily', 'Molly', 'Bailey', 'Sadie', 'Rocky', 'Cooper',
  'Buddy', 'Tucker', 'Duke', 'Bear', 'Jack', 'Bentley', 'Toby', 'Zeus',
  'Sophie', 'Stella', 'Penny', 'Lola', 'Chloe', 'Zoe', 'Nala', 'Ruby',
  'Oscar', 'Jasper', 'Teddy', 'Winston', 'Finn', 'Buster', 'Sam', 'Dexter',
  'Rosie', 'Gracie', 'Pepper', 'Cookie', 'Princess', 'Peanut', 'Honey', 'Angel'
];

const petSuffixes = ['', '', '', '', 'Paws', 'Jr', 'the Great', 'the Brave'];

const generateUsername = (index: number): GeneratedName => {
  const adjective = usernameAdjectives[Math.floor(Math.random() * usernameAdjectives.length)];
  const noun = usernameNouns[Math.floor(Math.random() * usernameNouns.length)];
  const connector = usernameConnectors[Math.floor(Math.random() * usernameConnectors.length)];
  const hasNumber = Math.random() > 0.5;
  const number = hasNumber ? Math.floor(Math.random() * 100) : '';
  
  const username = `${adjective}${connector}${noun}${number}`;
  
  return {
    id: `username-${index}-${Date.now()}`,
    firstName: adjective,
    lastName: noun,
    fullName: username,
    gender: 'male',
    country: 'usa'
  };
};

const generatePetName = (index: number): GeneratedName => {
  const name = petNames[Math.floor(Math.random() * petNames.length)];
  const suffix = petSuffixes[Math.floor(Math.random() * petSuffixes.length)];
  const fullName = suffix ? `${name} ${suffix}` : name;
  
  return {
    id: `pet-${index}-${Date.now()}`,
    firstName: name,
    lastName: suffix,
    fullName: fullName,
    gender: Math.random() > 0.5 ? 'male' : 'female',
    country: 'usa'
  };
};

export const generateRandomNames = (
  count: number = 100, 
  genderFilter: GenderFilter = 'mixed',
  country: CountryCode = 'usa',
  mode: GeneratorMode = 'person'
): GeneratedName[] => {
  const names: GeneratedName[] = [];
  
  // Generate usernames
  if (mode === 'username') {
    for (let i = 0; i < count; i++) {
      names.push(generateUsername(i));
    }
    return names;
  }
  
  // Generate pet names
  if (mode === 'pet') {
    for (let i = 0; i < count; i++) {
      names.push(generatePetName(i));
    }
    return names;
  }
  
  // Generate person names (default)
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
