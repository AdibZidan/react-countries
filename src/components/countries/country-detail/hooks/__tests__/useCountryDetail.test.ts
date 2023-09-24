import { requestMock } from '@mocks';
import { renderHook, waitFor } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { Mock } from 'vitest';
import { useCountryDetail } from '../useCountryDetail';

vi.mock('react-router-dom', async () => ({
    ...(await vi.importActual<typeof import('react-router-dom')>(
        'react-router-dom'
    )),
    useParams: vi.fn().mockImplementation(() => ({}))
}));
// TODO: Configure vitest to include this mock
vi.mock('@request');

describe('#useCountryDetail()', () => {
    it('returns isWithError true if there is no countryName param', async () => {
        const { result } = renderHook(useCountryDetail);

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current).toStrictEqual({
            isLoading: false,
            country: undefined,
            isWithError: true
        });
    });

    it('returns the country detail state when given countryName param', async () => {
        (useParams as Mock).mockImplementation(() => ({
            countryName: 'Syria'
        }));
        requestMock.get.mockImplementation(() =>
            Promise.resolve([
                {
                    name: {
                        common: 'Syria'
                    }
                }
            ])
        );

        const { result } = renderHook(useCountryDetail);

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current).toStrictEqual({
            isLoading: false,
            country: {
                name: {
                    common: 'Syria'
                }
            },
            isWithError: false
        });
    });
});
