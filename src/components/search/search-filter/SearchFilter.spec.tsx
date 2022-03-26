import { render, screen } from '@testing-library/react';
import SearchFilter from './SearchFilter';

describe(SearchFilter.name, () => {

  const regionsMock = [
    'Europe',
    'Asia'
  ];
  const setCountriesMock = jest.fn();

  it('should not render if the regions array is empty', () => {
    render(
      <SearchFilter
        regions={[]}
        setCountries={setCountriesMock}
      />
    );

    expect(() => screen.getByRole('group')).toThrow();
  });

  it('should render only if the regions array is not empty', () => {
    render(
      <SearchFilter
        regions={regionsMock}
        setCountries={setCountriesMock}
      />
    );

    const detailsElement = screen.getByRole('group');
    const summaryElement = document.querySelector('summary');
    const regionWrapper = document.querySelector('div.regions');
    const regions = document.querySelectorAll('p');

    expect(detailsElement).toBeInTheDocument();
    expect(summaryElement).toBeInTheDocument();
    expect(regionWrapper).toBeInTheDocument();

    expect(summaryElement).toHaveTextContent('Filter by Region');

    expect(regions.length).toEqual(2);
    expect(regions.item(0).innerHTML).toEqual('Europe');
    expect(regions.item(1).innerHTML).toEqual('Asia');

    expect(setCountriesMock).not.toHaveBeenCalled();
  });

});
