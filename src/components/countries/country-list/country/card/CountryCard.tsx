import { Div } from '@ui';
import { FC } from 'react';
import { Country } from '../../../types';
import './CountryCard.scss';
import { CountryCardFooter } from './CountryCardFooter';
import { CountryCardImage } from './CountryCardImage';

interface Props {
    country: Country;
}

export const CountryCard: FC<Props> = ({
    country: {
        flags: { png: src, alt },
        name: { common: countryName },
        population,
        region,
        capital = []
    }
}) => (
    <Div className="country-card">
        <CountryCardImage src={src} countryName={countryName} alt={alt} />
        <CountryCardFooter
            countryName={countryName}
            population={population}
            region={region}
            capital={capital}
        />
    </Div>
);
