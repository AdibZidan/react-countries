import { render } from '@testing-library/react';
import CountryContent, { CountryContentProps } from './CountryContent';

describe(CountryContent.name, () => {

  it('should render', () => {
    const props: CountryContentProps = {
      name: 'Austria',
      population: 8917205,
      region: 'Europe',
      capital: 'Vienna'
    };

    const result = render(
      <CountryContent
        {...props}
      />
    );

    const figcaption = result.container.querySelector('figcaption.country');
    const name = result.container.querySelector('span.name');
    const spans = result.container.querySelectorAll('span');
    const readablePopulation = spans.item(2).textContent;

    expect(figcaption).toBeInTheDocument();
    expect(figcaption).toHaveClass('country');

    expect(name).toBeInTheDocument();
    expect(name).toHaveClass('name');

    expect(readablePopulation).toEqual('8,917,205');
  });

});
