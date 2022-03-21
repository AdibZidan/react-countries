import { CountriesState } from 'CountriesContext';
import { Dispatch, SetStateAction } from 'react';
import { filterByRegion } from './SearchFilter.helper';
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
          regions.map((region: string, index: number): JSX.Element =>
            <p
              key={index}
              onClick={(): void => filterByRegion(region, setCountries)}
            >
              {region}
            </p>
          )
        }
      </div>
    </details>
  );
}
