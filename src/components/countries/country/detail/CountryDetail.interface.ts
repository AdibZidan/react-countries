export interface CountryDetailInformation {
  population: null | number;
  currencies: null | string[];
  flags: null | Flags;
  name: null | Name;
  continents: null | string[];
  subregion: null | string;
  capital: null | string;
  tld: null | string[];
  languages: null | string[];
  borders: null | string[];
}

export interface Flags {
  png: null | string;
  svg: null | string;
}

export interface Name {
  common: null | string;
  official: null | string;
}
