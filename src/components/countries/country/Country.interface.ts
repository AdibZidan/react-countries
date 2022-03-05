export interface Country {
  flags: Flags;
  name: Name;
  population: number;
  continents: string[];
  capital: string[];
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Name {
  common: string;
}
