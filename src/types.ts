export interface TribeSection {
  title: string;
  description: string;
  details: string[];
}

export interface TribeStamp {
  id: string;
  name: string;
  symbol: string; // Emoji or icon
  description: string;
}

export interface Tribe {
  id: string;
  name: string;
  altNames: string[];
  region: string;
  islandGroup: 'Luzon' | 'Visayas' | 'Mindanao';
  coords: { x: number; y: number }; // Percentage coords on our SVG map
  image: string;
  overview: string;
  nature: TribeSection;  // Kalikasan & Kapaligiran
  culture: TribeSection; // Kultura & Sining
  beliefs: TribeSection; // Paniniwala & Tradisyon
  language: string;      // Primary Language/Wika
  livelihood: string;    // Main Kabuhayan
  stamps: TribeStamp[];  // Key Artifacts & Symbols
}
