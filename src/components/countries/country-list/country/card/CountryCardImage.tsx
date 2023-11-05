import { Image } from '@ui';
import { FC, useState } from 'react';
import { composeCountryCardAlt } from '../services';
import './CountryCardImage.scss';
import { CountryCardImageSkeleton } from './CountryCardImageSkeleton';

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
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    if (isImageLoaded) {
        return (
            <Image
                data-test={dataTest}
                className="country-card-image"
                src={src}
                alt={composeCountryCardAlt(countryName, alt)}
            />
        );
    }

    const showImage = () => setIsImageLoaded(true);

    return (
        <CountryCardImageSkeleton
            data-test={dataTest}
            src={src}
            countryName={countryName}
            onLoad={showImage}
        />
    );
};
