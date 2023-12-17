import { requestMock, useParamMock } from '@mocks';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useCountryDetail } from '../useCountryDetail';

describe('#useCountryDetail()', () => {
    it('returns isWithError true if there is no countryName param', async () => {
        useParamMock.mockImplementation(() => ({
            countryName: undefined
        }));

        const { result } = renderHook(useCountryDetail, {
            wrapper: ({ children }) => (
                <QueryClientProvider client={new QueryClient()}>
                    {children}
                </QueryClientProvider>
            )
        });

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
        useParamMock.mockImplementation(() => ({
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

        const { result } = renderHook(useCountryDetail, {
            wrapper: ({ children }) => (
                <QueryClientProvider client={new QueryClient()}>
                    {children}
                </QueryClientProvider>
            )
        });

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
