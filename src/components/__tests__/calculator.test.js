import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';

import Calculator from '../Calculator';
import Display from '../Display';

describe('Calculator', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Calculator />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Creates component', () => {
    render(<Calculator><Display total="9" /></Calculator>);
    const element = screen.getByText('9');
    expect(element).toBeInTheDocument();
  });
});
