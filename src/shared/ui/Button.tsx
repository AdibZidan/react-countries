import { FC, ReactNode } from 'react';
import './Button.scss';

interface Props {
    children: ReactNode;
    className?: 'primary' | 'secondary';
    onClick?: () => void;
    isDisabled?: boolean;
}

export const Button: FC<Props> = ({
    children,
    className = 'primary',
    onClick = () => {},
    isDisabled = false
}) => (
    <button className={className} onClick={onClick} disabled={isDisabled}>
        {children}
    </button>
);
