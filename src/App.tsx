import CountryDetail from 'components/countries/country/detail/CountryDetail';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(Theme.LIGHT);
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
          element={<Countries />}
        />

        <Route
          path='detail/:name'
          element={<CountryDetail />}
        />
      </Routes>
    </>
  );
}
