import { Inline } from '@ui';
import { FC } from 'react';
import { InnerWrapper } from '../../inner-wrapper';
import './CountryDetail.scss';
import { CountryFocusPage } from './CountryFocusPage';
import { CountryInformation } from './CountryInformation';
import { useCountryDetail } from './hooks';
import { CountryDetailSkeleton } from './skeleton';

export const CountryDetail: FC = () => {
    const { isLoading, isWithError, country } = useCountryDetail();

    if (isLoading) {
        return (
            <CountryFocusPage className="country-detail-loading">
                <CountryDetailSkeleton />
            </CountryFocusPage>
        );
    }

    if (isWithError || !country) {
        return (
            <CountryFocusPage className="country-detail-error">
                <InnerWrapper justifyContent="center">
                    <Inline data-test="country-detail-error-message">
                        Country Detail api failed...
                    </Inline>
                </InnerWrapper>
            </CountryFocusPage>
        );
    }

    return <CountryInformation country={country} />;
};
