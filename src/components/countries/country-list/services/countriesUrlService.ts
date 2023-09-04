import { BASE_URL } from '../../services';

export const composeCountryListUrl = (): string =>
    `${BASE_URL}?fields=flags,name,population,region,capital`;
