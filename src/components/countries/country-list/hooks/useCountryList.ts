import { useFilteredCountryListState } from '@hooks';
import { request } from '@request';
import { useQuery } from 'react-query';
import { Country } from '../../types';
import { composeCountryListUrl } from '../services';

interface HookResult {
    isLoading: boolean;
    isWithError: boolean;
    countries: Country[];
}

export const useCountryList = (): HookResult => {
    const { filteredCountries, setCountries } = useFilteredCountryListState();
    const { isLoading, error } = useQuery('country-list', () =>
        request.get<Country[]>(composeCountryListUrl()).then(setCountries)
    );

    return {
        isLoading,
        isWithError: Boolean(error),
        countries: filteredCountries
    };
};
