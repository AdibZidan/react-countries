import { useApiCountriesCall } from 'components/countries/Countries.helper';
import { Country } from 'components/countries/country/Country.interface';
import React, { createContext, Dispatch, SetStateAction } from 'react';

export interface CountriesState {
  countries: Country[];
  copy: Country[];
}

const state = {} as {
  countriesState: CountriesState,
  setCountries: Dispatch<SetStateAction<CountriesState>>;
};

export const CountriesContext = createContext(state);

export const CountriesProvider = ({ children }: any) => {
  const { countriesState, setCountries } = useApiCountriesCall();

  return (
    <CountriesContext.Provider value={{
      countriesState,
      setCountries
    }}>
      {children}
    </CountriesContext.Provider >
  );
};
