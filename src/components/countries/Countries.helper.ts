import { Dispatch, SetStateAction, useEffect } from 'react';

const url = 'https://restcountries.com/v3.1/all';

export const useApiCall = (setCountries: Dispatch<SetStateAction<any>>) => {
  useEffect(() => {
    if (localStorage.getItem('countries') !== null) {
      fetch(url)
        .then(response => response.json())
        .then(countries => setCountries(countries));
    }
  }, []);
};
