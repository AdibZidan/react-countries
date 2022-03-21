import CountryDetail from 'components/countries/country/detail/CountryDetail';
import CountriesViewDeterminer from 'components/countries/view-determiner/CountriesViewDeterminer';
import SearchContainer from 'components/search/SearchContainer';
import { CountriesProvider } from 'CountriesContext';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';

export default function App() {
  return (
    <>
      <Header />

      <CountriesProvider>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <SearchContainer />
                <CountriesViewDeterminer />
              </>
            }
          />

          <Route
            path='detail/:name'
            element={<CountryDetail />}
          />
        </Routes>
      </CountriesProvider>
    </>
  );
}
