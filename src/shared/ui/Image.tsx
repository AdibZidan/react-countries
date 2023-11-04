import { FC } from 'react';

interface Props {
    'data-test': string;
    src: string;
    alt: string;
    className?: string;
    onLoad?: () => void;
}

export const Image: FC<Props> = ({
    'data-test': dataTest,
    src,
    alt,
    className,
    onLoad = () => {}
}) => (
    <figure className={className}>
        <img
            data-test={dataTest}
            loading="lazy"
            src={src}
            alt={alt}
            onLoad={onLoad}
        />
    </figure>
);
