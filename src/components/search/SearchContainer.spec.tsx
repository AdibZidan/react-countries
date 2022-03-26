import { render, screen } from '@testing-library/react';
import { CountryDetailInformation } from 'components/countries/country/detail/CountryDetail.interface';
import { CountriesContext } from 'CountriesContext';
import { MemoryRouter } from 'react-router-dom';
import SearchContainer from './SearchContainer';

describe(SearchContainer.name, () => {

  const state = {
    countriesState: {
      countries: [],
      copy: []
    },
    setCountries: jest.fn(),
    country: {} as CountryDetailInformation,
    setCountry: jest.fn()
  };

  it('should render', () => {
    render(
      <CountriesContext.Provider value={state}>
        <MemoryRouter>
          <SearchContainer />
        </MemoryRouter>
      </CountriesContext.Provider>
    );

    const searchFieldComponent = screen.getByRole('textbox');
    const searchFilterComponent = screen.getByRole('group');

    expect(searchFieldComponent).toBeInTheDocument();
    expect(searchFilterComponent).toBeInTheDocument();
  });

});
