import { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

export const Footer: FC<Props> = ({ className, children }) => (
    <footer className={className}>{children}</footer>
);
