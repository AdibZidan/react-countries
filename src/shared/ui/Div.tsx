import { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

export const Div: FC<Props> = ({ children, className }) => (
    <div className={className}>{children}</div>
);
