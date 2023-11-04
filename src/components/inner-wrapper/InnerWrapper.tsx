import { Div } from '@ui';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import './InnerWrapper.scss';

interface Props {
    children: ReactNode;
    justifyContent?:
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'center';
    wrap?: boolean;
}

export const InnerWrapper: FC<Props> = ({
    children,
    justifyContent = 'space-between',
    wrap = false
}) => {
    const className = classNames('inner-wrapper', {
        [justifyContent]: justifyContent,
        wrap
    });

    return <Div className={className}>{children}</Div>;
};
