import { CountryDetail } from '../../../types';
import {
    composeCountryCurrencies,
    composeCountryCurrenciesLabel,
    composeCountryDetail,
    composeCountryDetailUrl,
    composeCountryDetailValue,
    composeCountryLanguages,
    composeCountryLanguagesLabel,
    composeNativeCountryName
} from '../countryDetailService';

describe('#countryDetailService()', () => {
    describe('#composeCountryDetailUrl()', () => {
        it('composes country detail url', () => {
            const actual = composeCountryDetailUrl('Syria');

            expect(actual).toBe('https://restcountries.com/v3.1/name/Syria');
        });
    });

    describe('#composeNativeCountryName()', () => {
        it('composes the native country name', () => {
            const actual = composeNativeCountryName({
                ara: {
                    official: 'الجمهورية العربية السورية'
                }
            });

            expect(actual).toBe('الجمهورية العربية السورية');
        });
    });

    describe('#composeCountryCurrenciesLabel()', () => {
        it('returns single currency label', () => {
            const actual = composeCountryCurrenciesLabel({
                SYP: {
                    name: 'Syrian pound'
                }
            });

            expect(actual).toBe('Currency');
        });

        it('returns plural currencies label', () => {
            const actual = composeCountryCurrenciesLabel({
                EU: {
                    name: 'Euro'
                },
                US: {
                    name: 'USD'
                }
            });

            expect(actual).toBe('Currencies');
        });
    });

    describe('#composeCountryCurrencies()', () => {
        it('composes a single country currency', () => {
            const actual = composeCountryCurrencies({
                SYP: {
                    name: 'Syrian pound'
                }
            });

            expect(actual).toBe('Syrian pound');
        });

        it('composes multiple country currencies', () => {
            const actual = composeCountryCurrencies({
                EU: {
                    name: 'Euro'
                },
                US: {
                    name: 'USD'
                }
            });

            expect(actual).toBe('Euro, USD');
        });
    });

    describe('#composeCountryLanguagesLabel()', () => {
        it('returns single language label', () => {
            const actual = composeCountryLanguagesLabel({
                ara: 'Arabic'
            });

            expect(actual).toBe('Language');
        });

        it('returns plural languages label', () => {
            const actual = composeCountryLanguagesLabel({
                ara: 'Arabic',
                ukr: 'Ukrainian'
            });

            expect(actual).toBe('Languages');
        });
    });

    describe('#composeCountryLanguages()', () => {
        it('returns single language', () => {
            const actual = composeCountryLanguages({
                ara: 'Arabic'
            });

            expect(actual).toBe('Arabic');
        });

        it('returns plural languages', () => {
            const actual = composeCountryLanguages({
                ara: 'Arabic',
                ukr: 'Ukrainian'
            });

            expect(actual).toBe('Arabic, Ukrainian');
        });
    });

    describe('#composeCountryDetailValue()', () => {
        it('converts number into a readable value', () => {
            const actual = composeCountryDetailValue(21_000_000);

            expect(actual).toBe('21,000,000');
        });

        it('returns string type without modifications', () => {
            const actual = composeCountryDetailValue('Damascus');

            expect(actual).toBe('Damascus');
        });
    });

    describe('#composeCountryDetail()', () => {
        it('returns undefined if countryName does not exist in the list', () => {
            const actual = composeCountryDetail('Austria', []);

            expect(actual).toBeUndefined();
        });

        it('finds the country given multiple countries', () => {
            const actual = composeCountryDetail('Austria', [
                { name: { common: 'Germany' } } as CountryDetail,
                { name: { common: 'Austria' } } as CountryDetail
            ]);

            expect(actual).toStrictEqual({ name: { common: 'Austria' } });
        });

        it('returns the first country', () => {
            const actual = composeCountryDetail('Ukraine', [
                { name: { common: 'Ukraine' } } as CountryDetail
            ]);

            expect(actual).toStrictEqual({ name: { common: 'Ukraine' } });
        });
    });
});
