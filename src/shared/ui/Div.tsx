import { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    'data-test'?: string;
    className?: string;
    onClick?: () => void;
}

export const Div: FC<Props> = ({
    children,
    'data-test': dataTest,
    className,
    onClick = () => {}
}) => (
    <div data-test={dataTest} className={className} onClick={onClick}>
        {children}
    </div>
);
