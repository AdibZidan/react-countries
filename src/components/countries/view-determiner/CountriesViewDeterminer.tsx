import Countries from 'components/countries/Countries';
import { CountriesContext } from 'CountriesContext';
import { useContext } from 'react';
import './CountriesViewDetermines.scss';

export default function CountriesViewDeterminer(): JSX.Element {
  const { countriesState } = useContext(CountriesContext);

  if (countriesState.copy.length === 0) {
    return (
      <div className="empty-list">
        Loading...
      </div>
    );
  }

  if (countriesState.countries.length === 0) {
    return (
      <div className="empty-list">
        No Country with the given search is available.
      </div>
    );
  }

  return (
    <Countries
      countries={countriesState.countries}
    />
  );
}
