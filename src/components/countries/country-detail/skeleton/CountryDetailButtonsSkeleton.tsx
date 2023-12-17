import { FC } from 'react';
import './CountryDetailButtonsSkeleton.scss';

export const CountryDetailButtonsSkeleton: FC = () => (
    <footer
        data-test="country-detail-buttons-skeleton"
        className="country-detail-buttons-skeleton"
    >
        <h2 />
        <div className="buttons">
            <div className="button" />
            <div className="button" />
            <div className="button" />
            <div className="button" />
            <div className="button" />
        </div>
    </footer>
);
