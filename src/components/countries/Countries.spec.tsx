import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Countries from './Countries';

describe(Countries.name, () => {

  it('should render', () => {
    const result = render(
      <Countries
        countries={[]}
      />
    );

    const section = result.container.querySelector('section');

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('countries');
    expect(section).toHaveStyle('justifyContent: center');
  });

  it('should update the style if there are more than 3 countries', () => {
    const result = render(
      <MemoryRouter>
        <Countries
          countries={[
            { name: { common: 'Syria' } } as any,
            { name: { common: 'Austria' } } as any,
            { name: { common: 'U.S' } } as any,
            { name: { common: 'Germany' } } as any
          ]}
        />
      </MemoryRouter>
    );

    const section = result.container.querySelector('section');

    expect(section).toHaveStyle('justifyContent: space-evenly');
  });

  it('should render the countries', () => {
    render(
      <MemoryRouter>
        <Countries
          countries={[
            { name: { common: 'Syria' }, } as any,
            { name: { common: 'Austria' } } as any,
            { name: { common: 'U.S' } } as any
          ]}
        />
      </MemoryRouter>
    );

    const countries = screen.getAllByRole('figure');

    expect(countries.length).toEqual(3);

    countries.forEach(country => {
      expect(country).toBeInTheDocument();
    });
  });

});
