import { useParams } from '@hooks';
import { request } from '@request';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { CountryDetail } from '../../types';
import { composeCountryDetail, composeCountryDetailUrl } from '../services';

interface HookResult {
    isLoading: boolean;
    isWithError: boolean;
    country: undefined | CountryDetail;
}

export const useCountryDetail = (): HookResult => {
    const { countryName = '' } = useParams<{ countryName?: string }>();
    const [country, setCountry] = useState<undefined | CountryDetail>(
        undefined
    );
    const { isLoading, error } = useQuery(
        `${countryName}-detail`,
        () =>
            request
                .get<CountryDetail[]>(composeCountryDetailUrl(countryName))
                .then((countries: CountryDetail[]) =>
                    setCountry(composeCountryDetail(countryName, countries))
                ),
        { enabled: Boolean(countryName) }
    );

    return {
        isLoading,
        isWithError: Boolean(error),
        country
    };
};
