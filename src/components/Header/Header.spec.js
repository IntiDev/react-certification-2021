import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header.component';

describe('Header renders correctly', () => {
  it('renders a header tag', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header')).toBeInTheDocument();
  });

  it('contains an img tag', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header').children[0].tagName).toBe('IMG');
  });

  it('contains input search element', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('search-input')).toBeInTheDocument();
  });

  it('contains user icon', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('user-icon')).toBeInTheDocument();
  });
});
