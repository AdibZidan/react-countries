import { useApiCountriesCall } from 'components/countries/Countries.helper';
import { Country } from 'components/countries/country/Country.interface';
import { CountryDetailInformation } from 'components/countries/country/detail/CountryDetail.interface';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface CountriesState {
  countries: Country[];
  copy: Country[];
}

const state = {} as {
  countriesState: CountriesState,
  setCountries: Dispatch<SetStateAction<CountriesState>>,
  country: CountryDetailInformation,
  setCountry: Dispatch<SetStateAction<CountryDetailInformation>>;
};

export const CountriesContext = createContext(state);

export const CountriesProvider = ({ children }: any) => {
  const { countriesState, setCountries } = useApiCountriesCall();
  const [country, setCountry] = useState({} as CountryDetailInformation);

  return (
    <CountriesContext.Provider value={{
      countriesState,
      setCountries,
      country,
      setCountry
    }}>
      {children}
    </CountriesContext.Provider>
  );
};
