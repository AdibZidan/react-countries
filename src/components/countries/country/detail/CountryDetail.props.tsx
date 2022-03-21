import { CountriesState } from 'CountriesContext';
import { CountryDetailInformation } from './CountryDetail.interface';

export const countryDetailInformation: CountryDetailInformation = {
  population: null,
  currencies: [],
  flags: {
    png: null,
    svg: null
  },
  name: {
    common: null,
    official: null
  },
  continents: [],
  subregion: null,
  capital: null,
  tld: [],
  languages: [],
  borders: [],
  cca3: null
};

export const borderNamesConvertedIntoCommonName = (
  countriesState: CountriesState,
  country: CountryDetailInformation
) => countriesState
  .countries
  .filter(element => country.borders?.includes(element.cca3 as string))
  .map(element => element.name.common)
  .sort();
