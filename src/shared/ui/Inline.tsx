import { FC, ReactNode } from 'react';
import './Inline.scss';

interface Props {
    children: ReactNode;
    'data-test'?: string;
    className?: string;
    strong?: boolean;
    onClick?: () => void;
}

export const Inline: FC<Props> = ({
    children,
    'data-test': dataTest,
    className,
    strong = false,
    onClick = () => {}
}) => {
    if (strong) {
        return (
            <strong onClick={onClick}>
                <span data-test={dataTest} className={className}>
                    {children}
                </span>
            </strong>
        );
    }

    return (
        <span data-test={dataTest} className={className} onClick={onClick}>
            {children}
        </span>
    );
};
