import { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Div: FC<Props> = ({ children, className, onClick = () => {} }) => (
    <div className={className} onClick={onClick}>
        {children}
    </div>
);
