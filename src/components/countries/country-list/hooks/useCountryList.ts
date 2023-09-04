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
    const [countries, setCountries] = useState<Country[]>([]);
    const [isWithError, setIsWithError] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        request
            .get<Country[]>(composeCountryListUrl())
            .then(countries => setCountries(countries))
            .catch(() => setIsWithError(true))
            .finally(() => setIsLoading(false));
    }, []);

    return {
        isLoading,
        countries,
        isWithError
    };
};
