import { getStyle } from './Countries.helper';
import './Countries.scss';
import Country from './country/Country';
import { Country as CountryInterface } from './country/Country.interface';

export interface CountriesProps {
  countries: CountryInterface[];
}

export default function Countries({ countries }: CountriesProps) {
  return (
    <section className="countries" style={getStyle(countries)}>
      {
        countries.length > 0 &&
        countries.map((country: CountryInterface, index: number): JSX.Element =>
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
