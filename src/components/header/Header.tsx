import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Theme } from 'App';
import { Dispatch, SetStateAction } from 'react';
import { determineIconDefinition, determineIconName } from './Header.helper';
import './Header.scss';
import Icon from './icon/Icon';

export interface HeaderProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export default function Header({ theme, setTheme }: HeaderProps) {
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
