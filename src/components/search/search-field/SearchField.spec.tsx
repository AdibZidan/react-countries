import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchField from './SearchField';

describe(SearchField.name, () => {

  const state = {
    countries: [],
    copy: [
      { name: { common: 'Austria' } } as any,
      { name: { common: 'Syria' } } as any
    ]
  };

  const setCountriesMock = jest.fn();

  it('should render', () => {
    render(
      <MemoryRouter>
        <SearchField
          state={state}
          setCountries={setCountriesMock}
        />
      </MemoryRouter>
    );

    const inputField = screen.getByRole('textbox');

    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveClass('search-field');
    expect(inputField).toHaveAttribute('type', 'text');
    expect(inputField).toHaveAttribute('name', 'search-field');
    expect(inputField).toHaveAttribute('placeholder', 'Search for a Country...');
    expect(inputField).toHaveValue('');

    expect(setCountriesMock).not.toHaveBeenCalled();
  });

  it('should update the countriesState if the params include a country name', () => {
    render(
      <MemoryRouter initialEntries={['/?country=SYRIA']}>
        <SearchField
          state={state}
          setCountries={setCountriesMock}
        />
      </MemoryRouter>
    );

    const inputField = screen.getByRole('textbox');

    expect(inputField).toHaveValue('SYRIA');

    expect(setCountriesMock).toHaveBeenCalled();
    expect(setCountriesMock).toBeCalledTimes(2);
    expect(setCountriesMock).toBeCalledWith({
      countries: [{ name: { common: 'Syria' } } as any],
      copy: [
        { name: { common: 'Austria' } } as any,
        { name: { common: 'Syria' } } as any
      ]
    });
  });

});
