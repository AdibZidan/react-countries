import { Image } from '@ui';
import { FC, useState } from 'react';
import { CountryDetailImageSkeleton } from './skeleton';

interface Props {
    src: string;
    alt: string;
    countryName: string;
}

export const CountryDetailImage: FC<Props> = ({ src, alt, countryName }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    if (isImageLoaded) {
        return <Image data-test="country-detail-image" src={src} alt={alt} />;
    }

    const showImage = () => setIsImageLoaded(true);

    return (
        <CountryDetailImageSkeleton
            countryName={countryName}
            src={src}
            onLoad={showImage}
        />
    );
};
