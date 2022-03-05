import { render } from '@testing-library/react';
import CountryInformation from './CountryInformation';

describe(CountryInformation.name, () => {

  it('should render', () => {
    const result = render(
      <CountryInformation
        pointer='Pointer'
        value='value'
      />
    );

    const div = result.container.querySelector('div.information');
    const pointer = result.container.querySelector('span.key');
    const value = result.container.querySelector('span.value');

    expect(div).toBeInTheDocument();
    expect(div).toHaveClass('information');

    expect(pointer).toBeInTheDocument();
    expect(pointer).toHaveClass('key');
    expect(pointer).toHaveTextContent('Pointer:');

    expect(value).toBeInTheDocument();
    expect(value).toHaveClass('value');
    expect(value).toHaveTextContent('value');
  });

});
