import {
    composeCountryCardAlt,
    composeCountryCardValue
} from '../countryCardService.ts';

describe('#countryCardService()', () => {
    describe('#composeCountryCardAlt()', () => {
        it('composes country card alt if given no country alt', () => {
            const actual = composeCountryCardAlt('Syria');

            expect(actual).toBe('The flag of Syria.');
        });

        it('returns country alt if given', () => {
            const actual = composeCountryCardAlt(
                'Syria',
                'The flag of Syria is composed of three equal horizontal bands of red, white and black.'
            );

            expect(actual).toBe(
                'The flag of Syria is composed of three equal horizontal bands of red, white and black.'
            );
        });
    });

    describe('#composeCountryCardValue()', () => {
        it('converts number into a readable value', () => {
            const actual = composeCountryCardValue(21_000_000);

            expect(actual).toBe('21,000,000');
        });

        it('returns string type without modifications', () => {
            const actual = composeCountryCardValue('Damascus');

            expect(actual).toBe('Damascus');
        });
    });
});
