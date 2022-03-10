import { Dispatch, SetStateAction, useEffect } from 'react';
import { CountryDetailInformation } from './country/detail/CountryDetail.interface';

export const useApiCountriesCall = (setCountries: Dispatch<SetStateAction<any>>) => {
  const url = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    if (localStorage.getItem('countries') !== null) {
      fetch(url)
        .then(response => response.json())
        .then(countries => setCountries(countries));
    }
  }, []);
};

export const useApiCountryDetailCall = (countryName: undefined | string, setCountry: Dispatch<SetStateAction<CountryDetailInformation>>) => {
  const url = `https://restcountries.com/v3.1/name/${countryName}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(country => setCountry(country[0]));
  }, []);
};
