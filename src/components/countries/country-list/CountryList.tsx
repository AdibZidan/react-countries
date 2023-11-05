import { Section } from '@ui';
import { FC } from 'react';
import { InnerWrapper } from '../../inner-wrapper';
import { CountryCards } from './country';
import './CountryList.scss';
import { CountryListInputFilter } from './filter';

export const CountryList: FC = () => (
    <Section className="country-list">
        <InnerWrapper>
            <CountryListInputFilter />
        </InnerWrapper>
        <CountryCards />
    </Section>
);
