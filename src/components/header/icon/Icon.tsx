import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction } from 'react';
import { Theme } from '../Header';
import { getUpdatedTheme } from '../Header.helper';
import './Icon.scss';

export interface IconProps {
  iconName: string;
  iconDefinition: IconDefinition;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export default function Icon({ iconName, iconDefinition, setTheme }: IconProps) {
  return (
    <button
      className="icon"
      onClick={(): void => setTheme(theme => getUpdatedTheme(theme))}>
      <FontAwesomeIcon
        icon={iconDefinition}
      />

      <span className="icon-name">
        {iconName}
      </span>
    </button>
  );
}
