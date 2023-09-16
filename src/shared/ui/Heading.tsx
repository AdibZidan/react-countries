import { createElement, FC, ReactNode } from 'react';
import './Heading.scss';

interface Props {
    'data-test': string;
    children: ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}

export const Heading: FC<Props> = ({
    'data-test': dataTest,
    children,
    level,
    className
}) =>
    createElement(`h${level}`, { 'data-test': dataTest, className, children });
