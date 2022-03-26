import { CountriesContext } from 'CountriesContext';
import { useContext } from 'react';
import SearchField from './search-field/SearchField';
import SearchFilter from './search-filter/SearchFilter';
import './SearchContainer.scss';

export default function SearchContainer() {
  const { countriesState, setCountries } = useContext(CountriesContext);

  const regions: string[] = Array
    .from(new Set(countriesState.copy.map((country) => country.continents[0])))
    .concat('All')
    .sort();

  return (
    <div className="search-container">
      <SearchField
        state={countriesState}
        setCountries={setCountries}
      />

      <SearchFilter
        regions={regions}
        setCountries={setCountries}
      />
    </div>
  );
}
