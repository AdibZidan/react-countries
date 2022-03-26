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
    <>
      {
        regions.length > 0 &&
        <details>
          <summary>
            Filter by Region
          </summary>

          <div className="regions">
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
      }
    </>
  );
}
