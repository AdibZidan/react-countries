import { CountriesState } from 'App';
import { Country } from 'components/countries/country/Country.interface';
import { Dispatch, SetStateAction } from 'react';
import './SearchFilter.scss';

export interface SearchFilterProps {
  regions: string[];
  setCountries: Dispatch<SetStateAction<CountriesState>>;
}

export default function SearchFilter({ regions, setCountries }: SearchFilterProps) {
  return (
    regions &&
    <details>
      <summary>
        Filter by Region
      </summary>

      <div className="region">
        {
          regions.map((region: string, index: number) =>
            <p
              key={index}
              onClick={() => {
                setCountries(state => {
                  const regionExclusiveCountries: Country[] = state
                    .copy
                    .filter(country => country.continents[0].includes(region));

                  return {
                    ...state,
                    countries: regionExclusiveCountries
                  };
                });
              }}
            >
              {region}
            </p>
          )
        }
      </div>
    </details>
  );
}
