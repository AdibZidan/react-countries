import { useApiCountriesCall } from 'components/countries/Countries.helper';
import { Country } from 'components/countries/country/Country.interface';
import CountryDetail from 'components/countries/country/detail/CountryDetail';
import CountriesViewDeterminer from 'components/countries/view-determiner/CountriesViewDeterminer';
import SearchContainer from 'components/search/SearchContainer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface CountriesState {
  countries: Country[];
  copy: Country[];
}

export default function App() {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const { countriesState, setCountries } = useApiCountriesCall();

  document.body.className = theme;

  return (
    <>
      <Header
        theme={theme}
        setTheme={setTheme}
      />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <SearchContainer
                state={countriesState}
                setCountries={setCountries}
              />

              <CountriesViewDeterminer
                countriesState={countriesState}
              />
            </>
          }
        />

        <Route
          path='detail/:name'
          element={
            <CountryDetail
              setCountries={setCountries}
            />
          }
        />
      </Routes>
    </>
  );
}
