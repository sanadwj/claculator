import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Display from '../Display';

describe('Display', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Display />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Creates a component', () => {
    render(<Display total="9" />);
    const element = screen.getByText('9');
    expect(element).toBeInTheDocument();
  });
});
