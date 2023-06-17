import { FC, ReactNode } from 'react';
import './Inline.scss';

interface Props {
    children: ReactNode;
    className?: string;
}

export const Inline: FC<Props> = ({ children, className }) => (
    <span className={className}>{children}</span>
);
