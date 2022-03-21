import { faMoon, faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Theme } from './Header';

export const determineIconName = (theme: Theme): string => Theme.LIGHT === theme ? 'Dark Mode' : 'Light Mode';

export const determineIconDefinition = (theme: Theme): IconDefinition => Theme.LIGHT === theme ? faMoon : faSun;

export const getUpdatedTheme = (theme: Theme): Theme => Theme.LIGHT === theme ? Theme.DARK : Theme.LIGHT;
