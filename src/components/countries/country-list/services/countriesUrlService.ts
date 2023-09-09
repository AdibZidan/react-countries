import { BASE_URL } from '../../services';

export const composeCountryListUrl = (): string =>
    `${BASE_URL}/all?fields=flags,name,population,region,capital`;
