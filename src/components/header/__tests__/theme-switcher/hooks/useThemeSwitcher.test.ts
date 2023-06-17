import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { useThemeSwitcher } from '../../../theme-switcher/hooks';

describe('#useThemeSwitcher()', () => {
    beforeEach(() => localStorage.clear());

    it('returns light theme per default', () => {
        const { result } = renderHook(useThemeSwitcher);

        expect(result.current.theme).toBe('light');
        expect(result.current.iconText).toBe('Dark Mode');
        expect(localStorage.getItem('theme')).toBe('light');
        expect(document.body.className).toBe('light');
    });

    it('switches to dark theme', () => {
        const { result } = renderHook(useThemeSwitcher);

        act(result.current.onThemeSwitch);

        expect(result.current.theme).toBe('dark');
        expect(result.current.iconText).toBe('Light Mode');
        expect(localStorage.getItem('theme')).toBe('dark');
        expect(document.body.className).toBe('dark');
    });

    it('returns dark theme if localStorage has the dark theme', () => {
        localStorage.setItem('theme', 'dark');

        const { result } = renderHook(useThemeSwitcher);

        expect(result.current.theme).toBe('dark');
        expect(result.current.iconText).toBe('Light Mode');
        expect(localStorage.getItem('theme')).toBe('dark');
        expect(document.body.className).toBe('dark');
    });
});
