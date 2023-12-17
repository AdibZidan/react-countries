import { FC } from 'react';
import { InnerWrapper } from '../../../inner-wrapper';
import { CountryDetailButtonsSkeleton } from './CountryDetailButtonsSkeleton';
import './CountryDetailSkeleton.scss';

export const CountryDetailSkeleton: FC = () => (
    <InnerWrapper data-test="country-detail-skeleton">
        <figure
            data-test="country-detail-image-skeleton"
            className="country-detail-image-skeleton"
        />
        <div
            data-test="country-detail-divider-skeleton"
            className="country-detail-divider-skeleton"
        >
            <h2 />
            <div className="skeleton-container">
                <div>
                    <p />
                    <p />
                    <p />
                    <p />
                </div>
                <div>
                    <p />
                    <p />
                    <p />
                    <p />
                </div>
            </div>
            <CountryDetailButtonsSkeleton />
        </div>
    </InnerWrapper>
);
