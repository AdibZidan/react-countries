import { CountriesState } from 'App';
import Countries from 'components/countries/Countries';
import './CountriesViewDetermines.scss';

export interface CountriesViewDeterminerProps {
  countriesState: CountriesState;
}

export default function CountriesViewDeterminer({ countriesState }: CountriesViewDeterminerProps) {
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
