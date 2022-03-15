import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CountriesState } from 'App';
import { getFilteredCountries, getNewState } from 'components/search-field/SearchField.helper';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchField.scss';

export interface SearchFieldProps {
  state: CountriesState;
  setCountries: Dispatch<SetStateAction<CountriesState>>;
}

export default function SearchField({ state, setCountries }: SearchFieldProps) {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const countryParam: undefined | string = searchParams.get('country')?.trim();

  useEffect(() => {
    if (countryParam) {
      setValue(countryParam);
      setCountries(getNewState(state, countryParam));
    }
  }, [value]);

  const searchForCountry = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchTerm: string = event.target.value;
    setValue(searchTerm);
    setSearchParams({ country: searchTerm });
    setCountries(
      ({ copy }: CountriesState) => ({
        countries: searchTerm.length === 0 ? copy : getFilteredCountries(state, countryParam),
        copy
      }));
  };

  return (
    <div className="search-field-wrapper">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
      />

      <input
        className="search-field"
        type="text"
        name="search-field"
        placeholder="Search for a Country..."
        value={value}
        onChange={searchForCountry}
      />
    </div>
  );
}
