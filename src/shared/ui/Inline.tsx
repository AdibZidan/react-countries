import { FC, ReactNode } from 'react';
import './Inline.scss';

interface Props {
    children: ReactNode;
    className?: string;
    strong?: boolean;
}

export const Inline: FC<Props> = ({ children, className, strong = false }) => {
    if (strong) {
        return (
            <strong>
                <span className={className}>{children}</span>
            </strong>
        );
    }

    return <span className={className}>{children}</span>;
};
