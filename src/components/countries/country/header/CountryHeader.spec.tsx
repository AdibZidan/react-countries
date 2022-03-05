import { render, screen } from '@testing-library/react';
import CountryHeader from './CountryHeader';

describe(CountryHeader.name, () => {

  it('should render with the required props', () => {
    render(
      <CountryHeader
        flag={'flag'}
        name={'Syria'}
      />
    );

    const header = screen.getByRole('banner');
    const image: HTMLImageElement = screen.getByRole('img');

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('country');

    expect(image).toBeInTheDocument();
    expect(image.src).toContain('flag');
    expect(image.alt).toEqual('Syria');
  });

});
