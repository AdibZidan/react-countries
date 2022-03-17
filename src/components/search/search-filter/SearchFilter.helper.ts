import { CountriesState } from 'App';
import { Country } from 'components/countries/country/Country.interface';
import { Dispatch, SetStateAction } from 'react';

export const filterByRegion = (region: string, setCountries: Dispatch<SetStateAction<CountriesState>>): void =>
  setCountries(state => {
    if (region === 'All') {
      return {
        ...state,
        countries: state.copy
      };
    }

    return regionExclusiveCountries(region, state);
  });

export const regionExclusiveCountries = (region: string, state: CountriesState) => {
  const isWithinRegion = (country: Country): boolean => country.continents[0].includes(region);

  return {
    ...state,
    countries: state
      .copy
      .filter(isWithinRegion)
  };
};
