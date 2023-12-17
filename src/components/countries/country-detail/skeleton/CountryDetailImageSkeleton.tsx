import { Image } from '@ui';
import { FC } from 'react';
import './CountryDetailImageSkeleton.scss';

interface Props {
    countryName: string;
    src: string;
    onLoad?: () => void;
}

export const CountryDetailImageSkeleton: FC<Props> = ({
    countryName,
    src,
    onLoad
}) => (
    <Image
        data-test="country-detail-image-skeleton"
        className="country-detail-image-skeleton"
        src={src}
        alt={`${countryName} image is loading`}
        onLoad={onLoad}
    />
);
