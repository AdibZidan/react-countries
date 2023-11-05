import { FC } from 'react';
import './CountryCardSkeleton.scss';

export const CountryCardSkeleton: FC = () => (
    <>
        {new Array(30).fill(0).map((_, index) => (
            <div
                data-test="country-list-skeleton-card"
                key={index}
                className="country-list-skeleton-card"
            >
                <div className="skeleton-image" />
                <div className="skeleton-content">
                    <h3 />
                    <div className="skeleton-information" />
                    <div className="skeleton-information" />
                    <div className="skeleton-information" />
                </div>
            </div>
        ))}
    </>
);
