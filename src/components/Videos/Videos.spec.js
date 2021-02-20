import React from 'react';
import { render } from '@testing-library/react';
import Videos from './Videos.component';

describe('Videos item renders correctly', () => {
  it('renders a video container', () => {
    const { getByTestId } = render(<Videos />);
    expect(getByTestId('videos-container')).toBeInTheDocument();
  });

  it('contains 25 children', () => {
    const { getByTestId } = render(<Videos />);
    expect(getByTestId('videos-container').children.length).toEqual(25);
  });
});
