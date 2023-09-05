import { FC } from 'react';

interface Props {
    className?: string;
    src: string;
    alt: string;
}

export const Image: FC<Props> = ({ className, src, alt }) => (
    <figure className={className}>
        <img loading="lazy" src={src} alt={alt} />
    </figure>
);
