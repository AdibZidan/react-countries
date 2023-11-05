import { FC, ReactNode, useEffect, useState } from 'react';
import './Details.scss';

interface Props {
    openOnLoad: boolean;
    title: string;
    children: ReactNode;
    showSeparator?: boolean;
}

export const Details: FC<Props> = ({
    openOnLoad,
    title,
    children,
    showSeparator = true
}) => {
    const [isOpenOnInitialLoad, setIsOpenOnInitialLoad] = useState(false);

    useEffect(() => {
        if (openOnLoad) {
            setIsOpenOnInitialLoad(true);
        }
    }, []);

    return (
        <details open={isOpenOnInitialLoad}>
            <summary>{title}</summary>
            {showSeparator && <hr />}
            {children}
        </details>
    );
};
