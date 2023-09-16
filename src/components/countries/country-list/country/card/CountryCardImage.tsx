import { Image } from '@ui';
import { FC } from 'react';
import { composeCountryCardAlt } from '../services';
import './CountryCardImage.scss';

interface Props {
    'data-test': string;
    src: string;
    countryName: string;
    alt?: string;
}

export const CountryCardImage: FC<Props> = ({
    'data-test': dataTest,
    src,
    countryName,
    alt
}) => (
    <Image
        data-test={dataTest}
        className="country-card-image"
        src={src}
        alt={composeCountryCardAlt(countryName, alt)}
    />
);
