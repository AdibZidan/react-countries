import { CountriesState } from 'App';
import { Dispatch, SetStateAction } from 'react';
import SearchField from './search-field/SearchField';
import SearchFilter from './search-filter/SearchFilter';
import './SearchContainer.scss';

export interface SearchContainerProps {
  state: CountriesState;
  setCountries: Dispatch<SetStateAction<CountriesState>>;
}

export default function SearchContainer({ state, setCountries }: SearchContainerProps) {
  const regions: string[] = Array
    .from(new Set(state.copy.map((country) => country.continents[0])))
    .sort();

  return (
    <div className="search-container">
      <SearchField
        state={state}
        setCountries={setCountries}
      />

      <SearchFilter
        regions={regions}
        setCountries={setCountries}
      />
    </div>
  );
}
