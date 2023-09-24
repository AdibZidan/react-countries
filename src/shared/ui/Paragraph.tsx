import { FC, ReactNode } from 'react';
import './Paragraph.scss';

interface Props {
    children: ReactNode;
    'data-test'?: string;
    className?: string;
}

export const Paragraph: FC<Props> = ({
    children,
    'data-test': dataTest,
    className
}) => (
    <p data-test={dataTest} className={className}>
        {children}
    </p>
);
