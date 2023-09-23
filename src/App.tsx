import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CountryDetail, CountryList, MainHeader } from './components';

export const App: FC = () => (
    <Routes>
        <Route element={<MainHeader />}>
            <Route index element={<CountryList />} />
            <Route path="detail/:countryName" element={<CountryDetail />} />
        </Route>
    </Routes>
);
