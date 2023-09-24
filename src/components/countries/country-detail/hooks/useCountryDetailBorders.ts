import { useEffect, useState } from 'react';
import { makeBordersRequest } from '../services';

interface HookResult {
    isLoading: boolean;
    borderNames: string[];
    isWithError: boolean;
}

export const useCountryDetailBorders = (borders: string[]): HookResult => {
    const [isLoading, setIsLoading] = useState(false);
    const [borderNames, setBorderNames] = useState<string[]>([]);
    const [isWithError, setIsWithError] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        makeBordersRequest(borders)
            .then(setBorderNames)
            .catch(() => setIsWithError(true))
            .finally(() => setIsLoading(false));
    }, [borders]);

    return {
        isLoading,
        borderNames,
        isWithError
    };
};
