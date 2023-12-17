import { Inline } from '@ui';
import { FC } from 'react';
import { InnerWrapper } from '../../../../inner-wrapper';
import { useCountryList } from '../../hooks';
import { CountryCard } from './CountryCard';
import { CountryCardSkeleton } from './CountryCardSkeleton';

export const CountryCards: FC = () => {
    const { isLoading, isWithError, countries } = useCountryList();

    if (isLoading) {
        return (
            <InnerWrapper
                data-test="country-list-loading"
                justifyContent="space-around"
                wrap
            >
                <CountryCardSkeleton />;
            </InnerWrapper>
        );
    }

    if (isWithError) {
        return (
            <InnerWrapper justifyContent="space-around" wrap>
                <Inline data-test="country-list-error-message" className="info">
                    Your request could not be completed at this time.
                </Inline>
                <Inline data-test="country-list-error-message" className="info">
                    Please refresh your browser.
                </Inline>
            </InnerWrapper>
        );
    }

    if (countries.length === 0) {
        return (
            <InnerWrapper justifyContent="space-around" wrap>
                <Inline data-test="country-list-empty-list" className="info">
                    We couldn't find any results that match your search
                    criteria.
                </Inline>
            </InnerWrapper>
        );
    }

    return (
        <InnerWrapper justifyContent="space-around" wrap>
            {countries.map(country => (
                <CountryCard key={country.name.common} country={country} />
            ))}
        </InnerWrapper>
    );
};
