import { Theme } from 'App';
import { useState } from 'react';
import './Countries.scss';
import Country from './country/Country';
import { Country as ICountry } from './country/Country.interface';

export interface CountriesProps {
  theme: Theme;
}

export default function Countries({ theme }: CountriesProps) {
  const [countries, setCountries] = useState(
    JSON.parse(localStorage.getItem('countries') as string)
  );

  return (
    <section className={`countries ${theme}`}>
      {
        countries.length > 0 &&
        countries.map((country: ICountry, index: number): JSX.Element =>
          <Country
            key={index}
            flag={country.flags?.png}
            name={country.name.common}
            population={country.population}
            region={country.continents?.[0]}
            capital={country.capital?.[0]}
          />
        )
      }
    </section>
  );
}
