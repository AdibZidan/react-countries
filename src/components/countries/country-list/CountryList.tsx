import { Inline, Section } from '@ui';
import { FC } from 'react';
import { InnerWrapper } from '../../inner-wrapper';
import { CountryCard } from './country';
import './CountryList.scss';
import { useCountryList } from './hooks';

export const CountryList: FC = () => {
    const { isLoading, countries, isWithError } = useCountryList();

    if (isLoading) {
        return (
            <Section className="country-list-loading">
                <Inline data-test="country-list-loading">
                    Countries are loading...
                </Inline>
            </Section>
        );
    }

    if (isWithError) {
        return (
            <Section className="country-list-error">
                <Inline data-test="country-list-error">
                    Something went wrong...
                </Inline>
            </Section>
        );
    }

    return (
        <Section className="country-list">
            <InnerWrapper justifyContent="space-around" wrap>
                {countries.map(country => (
                    <CountryCard key={country.name.common} country={country} />
                ))}
            </InnerWrapper>
        </Section>
    );
};
