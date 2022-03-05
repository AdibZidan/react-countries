import { determineIconDefinition, determineIconName, getUpdatedTheme } from './Header.helper';
import { Theme } from 'App';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

describe('HeaderHelper', () => {

  it('should determine the icon name', () => {
    const actualDarkMode: string = determineIconName(Theme.LIGHT);

    expect(actualDarkMode).toEqual('Dark Mode');

    const actualLightMode: string = determineIconName(Theme.DARK);

    expect(actualLightMode).toEqual('Light Mode');
  });

  it('should determine the icon definition', () => {
    const actualMoon: IconDefinition = determineIconDefinition(Theme.LIGHT);

    expect(actualMoon.iconName).toEqual('moon');

    const actualSun: IconDefinition = determineIconDefinition(Theme.DARK);

    expect(actualSun.iconName).toEqual('sun');
  });

  it('should get the updated theme', () => {
    const actualDark: Theme = getUpdatedTheme(Theme.LIGHT);

    expect(actualDark).toEqual(Theme.DARK);

    const actualLight: Theme = getUpdatedTheme(Theme.DARK);

    expect(actualLight).toEqual(Theme.LIGHT);
  });

});
