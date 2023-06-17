import { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

export const Header: FC<Props> = ({ children, className }) => (
    <header className={className}>{children}</header>
);
