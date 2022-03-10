import { render, screen } from '@testing-library/react';
import Button from './Button';

describe(Button.name, () => {

  it('should render with required props only', () => {
    render(
      <Button
        text='Text'
      />
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Text');
  });

  it('should render with required and optional props', () => {
    const clickSpy = jest.fn();

    render(
      <Button
        text='Text'
        className='ClassName'
        key='Key'
        onClick={clickSpy}
      />
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Text');
    expect(button).toHaveClass('ClassName');

    button.click();

    expect(clickSpy).toHaveBeenCalled();
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

});
