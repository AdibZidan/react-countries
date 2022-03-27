import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Country from './Country';

describe(Country.name, () => {

  it('should render', () => {
    render(
      <MemoryRouter>
        <Country
          flag='flag'
          capital='Damascus'
          name='Syria'
          population={17500657}
          region='Asia'
        />
      </MemoryRouter>
    );

    const country = screen.getByRole('figure');

    expect(country).toBeInTheDocument();
    expect(country).toHaveClass('country');
  });

});
