import { createElement, FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}

export const Heading: FC<Props> = ({ children, level, className }) =>
    createElement(`h${level}`, { className, children });
