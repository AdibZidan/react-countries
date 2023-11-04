import { useState } from 'react';
import { useQuery } from 'react-query';
import { makeBordersRequest } from '../services';

interface HookResult {
    isLoading: boolean;
    isWithError: boolean;
    borderNames: string[];
}

export const useCountryDetailBorders = (borders: string[]): HookResult => {
    const [borderNames, setBorderNames] = useState<string[]>([]);
    const { isLoading, error } = useQuery(
        `country-detail-borders-${borders}`,
        () => makeBordersRequest(borders).then(setBorderNames)
    );

    return {
        isLoading,
        isWithError: Boolean(error),
        borderNames
    };
};
