import { Dispatch, SetStateAction, useEffect } from 'react';

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

export const useApiCountryDetailCall = (countryName: undefined | string) => {
  const url = `https://restcountries.com/v3.1/name/${countryName}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(country => console.log(country));
  });
};
