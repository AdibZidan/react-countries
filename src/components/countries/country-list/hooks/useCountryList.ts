import { useFilteredCountryListState } from '@hooks';
import { request } from '@request';
import { useEffect, useState } from 'react';
import { Country } from '../../types';
import { composeCountryListUrl } from '../services';

interface HookResult {
    isLoading: boolean;
    countries: Country[];
    isWithError: boolean;
}

export const useCountryList = (): HookResult => {
    const [isLoading, setIsLoading] = useState(false);
    const { filteredCountries, setCountries } = useFilteredCountryListState();
    const [isWithError, setIsWithError] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        request
            .get<Country[]>(composeCountryListUrl())
            .then(setCountries)
            .catch(() => setIsWithError(true))
            .finally(() => setIsLoading(false));
    }, []);

    return {
        isLoading,
        countries: filteredCountries,
        isWithError
    };
};
