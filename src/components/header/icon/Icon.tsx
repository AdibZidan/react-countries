import './Icon.scss';
import { getUpdatedTheme } from '../Header.helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';
import { Theme } from 'App';

export interface IconProps {
  iconName: string;
  iconDefinition: IconDefinition;
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export default function Icon({ iconName, iconDefinition, theme, setTheme }: IconProps) {
  return (
    <button
      className={ `${ theme } icon` }
      onClick={ (): void => setTheme(theme => getUpdatedTheme(theme)) }>
      <FontAwesomeIcon
        icon={ iconDefinition }
      />

      <span className="icon-name">
        { iconName }
      </span>
    </button>
  );
}
