import { useSearchParams } from '@hooks';
import { act, renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('#useSearchParams()', () => {
    const withWrapper = (paramName = '') => ({
        wrapper: ({ children }: { children: ReactNode }) => {
            const initialEntries = paramName ? [`?${paramName}`] : undefined;

            return (
                <MemoryRouter initialEntries={initialEntries}>
                    <Routes>
                        <Route path="/" element={children} />
                    </Routes>
                </MemoryRouter>
            );
        }
    });

    it('returns empty paramName by default', () => {
        const { result } = renderHook(
            () => useSearchParams('countryName'),
            withWrapper()
        );

        expect(result.current.paramName).toBe('');
    });

    it('returns paramName value', () => {
        const { result } = renderHook(
            () => useSearchParams('countryName'),
            withWrapper('countryName=syria')
        );

        expect(result.current.paramName).toBe('syria');
    });

    it('updates a specific param', () => {
        const { result } = renderHook(
            () => useSearchParams('countryName'),
            withWrapper()
        );

        act(() => result.current.updateParam('austria'));

        expect(result.current.paramName).toBe('austria');
    });

    it('removes a specific param', () => {
        const { result } = renderHook(
            () => useSearchParams('countryName'),
            withWrapper('countryName=ukraine')
        );

        act(() => result.current.resetParam());

        expect(result.current.paramName).toBe('');
    });
});
