import { Button, Inline } from '@ui';
import { FC } from 'react';
import { useThemeSwitcher } from './hooks';
import { ThemeIcon } from './icons';

export const ThemeSwitcher: FC = () => {
    const {
        theme,
        iconText,
        onThemeSwitch: handleThemeSwitch
    } = useThemeSwitcher();

    return (
        <Button onClick={handleThemeSwitch}>
            <ThemeIcon theme={theme} />
            <Inline>{iconText}</Inline>
        </Button>
    );
};
