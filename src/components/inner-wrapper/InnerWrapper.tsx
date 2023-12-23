import { Div } from '@ui';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import './InnerWrapper.scss';

interface Props {
    children: ReactNode;
    'data-test'?: string;
    justifyContent?:
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'center';
    wrap?: boolean;
    baseClassName?: string;
}

export const InnerWrapper: FC<Props> = ({
    children,
    'data-test': dataTest,
    justifyContent = 'space-between',
    wrap = false,
    baseClassName
}) => {
    const className = classNames(
        'inner-wrapper',
        {
            [justifyContent]: justifyContent,
            wrap
        },
        baseClassName
    );

    return (
        <Div data-test={dataTest} className={className}>
            {children}
        </Div>
    );
};
