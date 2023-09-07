import { Section } from '@ui';
import { FC } from 'react';
import { InnerWrapper } from '../../inner-wrapper';
import { CountryCard } from './country';
import { useCountryList } from './hooks';

export const CountryList: FC = () => {
    const { isLoading, countries, isWithError } = useCountryList();

    if (isLoading) {
        return <>Countries are loading...</>;
    }

    if (isWithError) {
        return <>Something went wrong...</>;
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
