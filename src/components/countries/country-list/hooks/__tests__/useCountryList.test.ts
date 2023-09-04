import { requestMock } from '@mocks';
import { renderHook, waitFor } from '@testing-library/react';
import { useCountryList } from '../useCountryList';

vi.mock('@request');

describe('#useCountryList()', () => {
    it('returns the initial state', async () => {
        requestMock.get.mockResolvedValue(Promise.resolve([]));

        const { result } = renderHook(useCountryList);

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current).toStrictEqual({
            isLoading: false,
            countries: [],
            isWithError: false
        });
    });

    it('returns countries after a successful request', async () => {
        requestMock.get.mockResolvedValueOnce(
            Promise.resolve([
                {
                    flags: { png: 'png', svg: 'svg' },
                    name: { common: 'Syria' },
                    capital: ['Damascus'],
                    region: 'Asia',
                    population: 21_320_000
                }
            ])
        );

        const { result } = renderHook(useCountryList);

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current).toStrictEqual({
            isLoading: false,
            countries: [
                {
                    capital: ['Damascus'],
                    flags: {
                        png: 'png',
                        svg: 'svg'
                    },
                    name: {
                        common: 'Syria'
                    },
                    population: 21_320_000,
                    region: 'Asia'
                }
            ],
            isWithError: false
        });
    });

    it('returns error if request has failed', async () => {
        requestMock.get.mockRejectedValueOnce({});

        const { result } = renderHook(useCountryList);

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current).toStrictEqual({
            isLoading: false,
            countries: [],
            isWithError: true
        });
    });
});
