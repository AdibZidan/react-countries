import { Section } from '@ui';
import { FC } from 'react';
import { CountryCards } from './country';
import './CountryList.scss';
import { CountryListFilters } from './filter';

export const CountryList: FC = () => (
    <Section className="country-list">
        <CountryListFilters />
        <CountryCards />
    </Section>
);
