import React, { useState } from 'react';
import './App.scss';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(Theme.LIGHT);

  return (
    <>
      <Header
        theme={theme}
        setTheme={setTheme}
      />
      <Countries
        theme={theme}
      />
    </>
  );
}
