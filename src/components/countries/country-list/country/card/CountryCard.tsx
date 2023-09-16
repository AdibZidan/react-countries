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
    <Div data-test="country-card" className="country-card">
        <CountryCardImage
            data-test="country-card-image"
            src={src}
            countryName={countryName}
            alt={alt}
        />
        <CountryCardFooter
            countryName={countryName}
            population={population}
            region={region}
            capital={capital}
        />
    </Div>
);
