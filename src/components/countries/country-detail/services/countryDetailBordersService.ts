import { request } from '@request';
import { BASE_URL } from '../../services';
import { CountryDetail } from '../../types';

export const composeBordersUrl = (borders: string[]): string =>
    `${BASE_URL}/alpha?codes=${borders.join(',')}`;

export const makeBordersRequest = async (
    borders: string[]
): Promise<string[]> => {
    const countryDetails = await request.get<CountryDetail[]>(
        composeBordersUrl(borders)
    );

    return countryDetails.map(({ name: { common } }) => common);
};

export const composeCountryDetailBorderHeadline = (borders: string[]): string =>
    borders.length > 1 ? 'Border Countries:' : 'Border Country:';
