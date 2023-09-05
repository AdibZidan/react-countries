import { Heading } from '@ui';
import { FC } from 'react';
import './Title.scss';

export const Title: FC = () => (
    <Heading className="main-title" level={1}>
        Where in the world?
    </Heading>
);
