import { CountriesState } from 'CountriesContext';
import { useEffect, useState } from 'react';
import { Country } from './country/Country.interface';

export const useApiCountriesCall = () => {
  const [countriesState, setCountries] = useState({
    countries: [],
    copy: []
  } as CountriesState);

  const url = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(countries =>
        setCountries({
          countries,
          copy: countries
        }));
  }, []);

  return {
    countriesState,
    setCountries
  };
};

export const useApiCountryDetailCall = (countryName: string): Promise<any> => {
  const url = `https://restcountries.com/v3.1/name/${countryName}`;

  return fetch(url)
    .then(response => response.json());
};

export const getStyle = (countries: Country[]) => ({
  'justifyContent': countries.length <= 3 ? 'center' : 'space-evenly'
});
