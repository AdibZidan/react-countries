import { Image } from '@ui';
import { FC } from 'react';
import { composeCountryCardAlt } from '../services';
import './CountryCardImage.scss';

interface Props {
    src: string;
    countryName: string;
    alt?: string;
}

export const CountryCardImage: FC<Props> = ({ src, countryName, alt }) => (
    <Image
        className="country-card-image"
        src={src}
        alt={composeCountryCardAlt(countryName, alt)}
    />
);
