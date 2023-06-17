import { FC } from 'react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';
import './ThemeIcon.scss';

interface Props {
    theme: 'light' | 'dark';
}

export const ThemeIcon: FC<Props> = ({ theme }) => {
    if (theme === 'light') {
        return <MoonIcon />;
    }

    return <SunIcon />;
};
