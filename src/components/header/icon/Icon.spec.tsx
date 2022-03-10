import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe(Icon.name, () => {

  it('should render', () => {
    const setThemeMock = jest.fn();

    const result = render(
      <Icon
        iconName="moon"
        iconDefinition={faMoon}
        setTheme={setThemeMock}
      />
    );

    const button = screen.getByRole('button');
    const iconName = result.container.querySelector('span.icon-name');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('icon');

    expect(iconName).toBeInTheDocument();
    expect(iconName).toHaveTextContent('moon');

    button.click();

    expect(setThemeMock).toBeCalled();
    expect(setThemeMock).toBeCalledTimes(1);
  });

});
