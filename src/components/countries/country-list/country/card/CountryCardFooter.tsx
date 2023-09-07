import { Footer, Heading } from '@ui';
import { FC } from 'react';
import './CountryCardFooter.scss';
import { CountryCardInformation } from './CountryCardInformation';

interface Props {
    countryName: string;
    population: number;
    region: string;
    capital: string[];
}

export const CountryCardFooter: FC<Props> = ({
    countryName,
    population,
    region,
    capital
}) => (
    <Footer className="country-card-footer">
        <Heading level={3}>{countryName}</Heading>
        <CountryCardInformation label="population" value={population} />
        <CountryCardInformation label="region" value={region} />
        {capital.length === 1 && (
            <CountryCardInformation label="capital" value={capital[0]} />
        )}
    </Footer>
);
