import { BASE_URL } from '../../services';
import { CountryDetail } from '../../types';

const toCurrencyNames = (
    currencies: NonNullable<CountryDetail['currencies']>
): string[] => Object.values(currencies).map(({ name }) => name);

const toLanguageValues = (
    languages: NonNullable<CountryDetail['languages']>
): string[] => Object.values(languages);

export const composeCountryDetailUrl = (countryName: string): string =>
    `${BASE_URL}/name/${countryName}`;

export const composeNativeCountryName = (
    nativeName: NonNullable<CountryDetail['name']['nativeName']>
): string => Object.values(nativeName).map(({ official }) => official)[0];

export const composeCountryCurrenciesLabel = (
    currencies: NonNullable<CountryDetail['currencies']>
): string =>
    toCurrencyNames(currencies).length > 1 ? 'Currencies' : 'Currency';

export const composeCountryCurrencies = (
    currencies: NonNullable<CountryDetail['currencies']>
): string => toCurrencyNames(currencies).join(', ');

export const composeCountryLanguagesLabel = (
    languages: NonNullable<CountryDetail['languages']>
): string =>
    toLanguageValues(languages).length > 1 ? 'Languages' : 'Language';

export const composeCountryLanguages = (
    languages: NonNullable<CountryDetail['languages']>
): string => toLanguageValues(languages).join(', ');

export const composeCountryDetailValue = (value: string | number): string => {
    if (typeof value === 'number') {
        return new Intl.NumberFormat().format(value);
    }

    return value;
};

export const composeCountryDetail = (
    countryName: string,
    countries: CountryDetail[]
): undefined | CountryDetail => {
    if (countries.length > 1) {
        return countries.find(({ name: { common } }) => common === countryName);
    }

    return countries[0];
};
