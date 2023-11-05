import { Image } from '@ui';
import { FC } from 'react';

interface Props {
    'data-test': string;
    src: string;
    countryName: string;
    onLoad: () => void;
}

export const CountryCardImageSkeleton: FC<Props> = ({
    'data-test': dataTest,
    src,
    countryName,
    onLoad
}) => (
    <Image
        data-test={`${dataTest}-loading`}
        className="country-card-image-loading"
        src={src}
        alt={`${countryName} image is loading`}
        onLoad={onLoad}
    />
);
