import { useEffect, useState } from 'react';

interface State {
    theme: 'light' | 'dark';
    iconText: 'Light Mode' | 'Dark Mode';
}

interface Methods {
    onThemeSwitch: () => void;
}

type HookResult = State & Methods;

const THEME_KEY = 'theme';

const getTheme = (): State['theme'] => {
    const theme = localStorage.getItem(THEME_KEY);

    if (theme === 'light' || theme === 'dark') {
        return theme;
    }

    return 'light';
};

const getIconText = (): State['iconText'] => {
    const theme = localStorage.getItem(THEME_KEY);

    if (theme === 'dark') {
        return 'Light Mode';
    }

    return 'Dark Mode';
};

export const useThemeSwitcher = (): HookResult => {
    const [{ theme, iconText }, setState] = useState<State>({
        theme: getTheme(),
        iconText: getIconText()
    });

    useEffect(() => {
        localStorage.setItem(THEME_KEY, theme);
        document.body.className = theme;
    }, [theme]);

    const handleThemeSwitch = () =>
        setState(({ theme }) => ({
            theme: theme === 'light' ? 'dark' : 'light',
            iconText: theme === 'light' ? 'Light Mode' : 'Dark Mode'
        }));

    return {
        theme,
        iconText,
        onThemeSwitch: handleThemeSwitch
    };
};
