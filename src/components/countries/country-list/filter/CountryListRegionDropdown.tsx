import { Div } from '@ui';
import { FC } from 'react';
import './CountryListRegionDropdown.scss';
import { CountryListRegions } from './CountryListRegions';

export const CountryListRegionDropdown: FC = () => (
    <Div
        data-test="country-list-region-dropdown-container"
        className="country-list-region-dropdown-container"
    >
        <CountryListRegions />
    </Div>
);
