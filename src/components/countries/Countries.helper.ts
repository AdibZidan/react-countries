import { CountriesState } from 'CountriesContext';
import { useEffect, useState } from 'react';
import { Country } from './country/Country.interface';
import { countryDetailInformation } from './country/detail/CountryDetail.props';

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

export const useApiCountryDetailCall = (countryName: string) => {
  const [country, setCountry] = useState(countryDetailInformation);

  const url = `https://restcountries.com/v3.1/name/${countryName}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(country => setCountry(country[0]));
  }, []);

  return {
    country,
    setCountry
  };
};

export const getStyle = (countries: Country[]) => ({
  'justifyContent': countries.length <= 3 ? 'center' : 'space-evenly'
});
