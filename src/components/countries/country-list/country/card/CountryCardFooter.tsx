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
        <Heading data-test="country-card-heading" level={3}>
            {countryName}
        </Heading>
        <CountryCardInformation
            data-test="country-card-population"
            label="population"
            value={population}
        />
        <CountryCardInformation
            data-test="country-card-region"
            label="region"
            value={region}
        />
        {capital.length === 1 && (
            <CountryCardInformation
                data-test="country-card-capital"
                label="capital"
                value={capital[0]}
            />
        )}
    </Footer>
);
