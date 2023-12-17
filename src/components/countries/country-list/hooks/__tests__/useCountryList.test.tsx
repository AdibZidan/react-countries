import { requestMock } from '@mocks';
import { renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useCountryList } from '../useCountryList';

describe('#useCountryList()', () => {
    const withWrapper = (paramName = '') => ({
        wrapper: ({ children }: { children: ReactNode }) => {
            const initialEntries = paramName ? [`?${paramName}`] : undefined;

            return (
                <QueryClientProvider client={new QueryClient()}>
                    <MemoryRouter initialEntries={initialEntries}>
                        <Routes>
                            <Route path="/" element={children} />
                        </Routes>
                    </MemoryRouter>
                </QueryClientProvider>
            );
        }
    });

    it('returns the initial state', async () => {
        requestMock.get.mockResolvedValueOnce(Promise.resolve([]));

        const { result } = renderHook(useCountryList, withWrapper());

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

        const { result } = renderHook(useCountryList, withWrapper());

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
});
