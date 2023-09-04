import { composeCountryListUrl } from '../countriesUrlService';

describe('#countriesUrlService()', () => {
    describe('#composeCountryListUrl()', () => {
        it('composes country list url', () => {
            const actual = composeCountryListUrl();

            expect(actual).toBe(
                'https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital'
            );
        });
    });
});
