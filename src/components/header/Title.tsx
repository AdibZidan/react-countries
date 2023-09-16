import { Heading } from '@ui';
import { FC } from 'react';

export const Title: FC = () => (
    <Heading data-test="main-title" className="main-title" level={1}>
        Where in the world?
    </Heading>
);
