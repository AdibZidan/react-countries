import { requestMock } from '@mocks';
import {
    composeBordersUrl,
    composeCountryDetailBorderHeadline,
    makeBordersRequest
} from '../countryDetailBordersService';

describe('#countryDetailBordersService()', () => {
    describe('#composeBordersUrl()', () => {
        it('returns single border code', () => {
            const actual = composeBordersUrl(['AUT']);

            expect(actual).toBe(
                'https://restcountries.com/v3.1/alpha?codes=AUT'
            );
        });

        it('returns multiple border codes', () => {
            const actual = composeBordersUrl(['AT', 'DEU']);

            expect(actual).toBe(
                'https://restcountries.com/v3.1/alpha?codes=AT,DEU'
            );
        });
    });

    describe('#makeBordersRequest()', () => {
        it('makes borders request', async () => {
            requestMock.get.mockImplementation(() => [
                { name: { common: 'Iraq' } },
                { name: { common: 'Jordan' } },
                { name: { common: 'Lebanon' } },
                { name: { common: 'Turkey' } }
            ]);

            const actual = await makeBordersRequest([
                'IRQ',
                'JOR',
                'LBN',
                'TUR'
            ]);

            expect(requestMock.get.mock.calls).toStrictEqual([
                ['https://restcountries.com/v3.1/alpha?codes=IRQ,JOR,LBN,TUR']
            ]);
            expect(actual).toStrictEqual([
                'Iraq',
                'Jordan',
                'Lebanon',
                'Turkey'
            ]);
        });
    });

    describe('#composeCountryDetailBorderHeadline()', () => {
        it('returns singular headline', () => {
            const actual = composeCountryDetailBorderHeadline(['Germany']);

            expect(actual).toBe('Border Country:');
        });

        it('returns plural headline', () => {
            const actual = composeCountryDetailBorderHeadline([
                'Germany',
                'Switzerland'
            ]);

            expect(actual).toBe('Border Countries:');
        });
    });
});
