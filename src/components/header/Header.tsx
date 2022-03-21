import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { determineIconDefinition, determineIconName } from './Header.helper';
import './Header.scss';
import Icon from './icon/Icon';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export default function Header() {
  const [theme, setTheme] = useState(Theme.LIGHT);

  document.body.className = theme;

  const iconName: string = determineIconName(theme);
  const iconDefinition: IconDefinition = determineIconDefinition(theme);

  return (
    <header className="main-header">
      <h1>
        Where in the world?
      </h1>

      <Icon
        iconName={iconName}
        iconDefinition={iconDefinition}
        setTheme={setTheme}
      />
    </header>
  );
}
