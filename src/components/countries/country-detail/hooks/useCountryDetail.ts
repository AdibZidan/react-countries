import { useParams } from '@hooks';
import { request } from '@request';
import { useEffect, useState } from 'react';
import { CountryDetail } from '../../types';
import { composeCountryDetail, composeCountryDetailUrl } from '../services';

interface HookResult {
    isLoading: boolean;
    country: undefined | CountryDetail;
    isWithError: boolean;
}

export const useCountryDetail = (): HookResult => {
    const { countryName } = useParams<{ countryName?: string }>();
    const [isLoading, setIsLoading] = useState(false);
    const [country, setCountry] = useState<undefined | CountryDetail>(
        undefined
    );
    const [isWithError, setIsWithError] = useState(false);

    useEffect(() => {
        if (!countryName) {
            setIsWithError(true);
            return undefined;
        }

        setIsLoading(true);

        request
            .get<CountryDetail[]>(composeCountryDetailUrl(countryName))
            .then((countries: CountryDetail[]) =>
                setCountry(composeCountryDetail(countryName, countries))
            )
            .catch(() => setIsWithError(true))
            .finally(() => setIsLoading(false));
    }, [countryName]);

    return {
        isLoading,
        country,
        isWithError
    };
};
