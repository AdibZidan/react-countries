import { render, screen } from '@testing-library/react';
import Header, { Theme } from './Header';

describe(Header.name, () => {

  it('should render', () => {
    render(
      <Header />
    );

    const header = screen.getByRole('banner');
    const h1 = screen.getByRole('heading');
    const button = screen.getByRole('button');

    expect(header).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(header).toHaveClass('main-header');
    expect(h1).toHaveTextContent('Where in the world?');

    expect(document.body).toHaveClass(Theme.LIGHT);
  });

  it(`should update the body's className to dark after clicking on the theme changer button`, () => {
    render(
      <Header />
    );

    const button = screen.getByRole('button');

    button.click();

    expect(document.body).toHaveClass(Theme.DARK);
  });

});
