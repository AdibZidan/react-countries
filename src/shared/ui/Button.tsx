import { FC, ReactElement, ReactNode } from 'react';
import './Button.scss';

interface Props {
    children: ReactNode;
    className?: 'primary' | 'secondary';
    onClick?: () => void;
    isDisabled?: boolean;
    icon?: ReactElement;
    'data-test'?: string;
}

export const Button: FC<Props> = ({
    children,
    className = 'primary',
    onClick = () => {},
    isDisabled = false,
    icon,
    'data-test': dataTest
}) => (
    <button
        data-test={dataTest}
        className={className}
        onClick={onClick}
        disabled={isDisabled}
    >
        {icon}
        {children}
    </button>
);
