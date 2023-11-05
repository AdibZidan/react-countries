import { Inline } from '@ui';
import { FC } from 'react';
import { InnerWrapper } from '../../inner-wrapper';
import './CountryDetail.scss';
import { CountryFocusPage } from './CountryFocusPage';
import { CountryInformation } from './CountryInformation';
import { useCountryDetail } from './hooks';

export const CountryDetail: FC = () => {
    const { isLoading, isWithError, country } = useCountryDetail();

    if (isLoading) {
        return (
            <CountryFocusPage className="country-detail-loading">
                <InnerWrapper justifyContent="center">
                    <Inline>Country Detail is loading...</Inline>
                </InnerWrapper>
            </CountryFocusPage>
        );
    }

    if (isWithError) {
        return (
            <CountryFocusPage className="country-detail-error">
                <InnerWrapper justifyContent="center">
                    <Inline>Country Detail api failed...</Inline>
                </InnerWrapper>
            </CountryFocusPage>
        );
    }

    return <>{country && <CountryInformation country={country} />}</>;
};
