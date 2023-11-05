import { useFilteredCountryListState, useSearchParams } from '@hooks';
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
    const { paramName: countryNameParam } = useSearchParams('countryName');
    const { paramName: regionParam } = useSearchParams('region');
    const { filteredCountries, setCountries, setFilteredCountries } =
        useFilteredCountryListState();
    const { isLoading, error } = useQuery(
        'country-list',
        () =>
            request.get<Country[]>(composeCountryListUrl()).then(setCountries),
        {
            onSuccess: () => {
                if (countryNameParam) {
                    setFilteredCountries(countryNameParam, 'name');
                }

                if (regionParam) {
                    setFilteredCountries(regionParam, 'region');
                }
            }
        }
    );

    return {
        isLoading,
        isWithError: Boolean(error),
        countries: filteredCountries
    };
};
