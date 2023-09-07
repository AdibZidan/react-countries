import { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

export const Section: FC<Props> = ({ children, className }) => (
    <section className={className}>{children}</section>
);
