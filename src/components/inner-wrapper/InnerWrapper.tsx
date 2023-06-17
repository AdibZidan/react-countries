import { Div } from '@ui';
import { FC, ReactNode } from 'react';

import './InnerWrapper.scss';

interface Props {
    children: ReactNode;
}

export const InnerWrapper: FC<Props> = ({ children }) => (
    <Div className="inner-wrapper">{children}</Div>
);
