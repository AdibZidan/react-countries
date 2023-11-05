import { renderHook } from '@testing-library/react';
import { useRegions } from '../useRegions';

describe('#useRegions()', () => {
    it('returns the regions array', () => {
        const actual = renderHook(useRegions);

        expect(actual.result.current.regions).toStrictEqual([
            'Africa',
            'America',
            'Asia',
            'Europe',
            'Oceania'
        ]);
    });
});
