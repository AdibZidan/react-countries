import { FC, ReactNode } from 'react';
import './Inline.scss';

interface Props {
    children: ReactNode;
    'data-test'?: string;
    className?: string;
    strong?: boolean;
}

export const Inline: FC<Props> = ({
    children,
    'data-test': dataTest,
    className,
    strong = false
}) => {
    if (strong) {
        return (
            <strong>
                <span data-test={dataTest} className={className}>
                    {children}
                </span>
            </strong>
        );
    }

    return (
        <span data-test={dataTest} className={className}>
            {children}
        </span>
    );
};
