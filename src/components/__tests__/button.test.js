import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Button from '../Button';

describe('Button', () => {
  const handleClick = () => ({ total: '', next: '', operation: '' });
  it('renders correctly', () => {
    const tree = renderer.create(
      <Button name="0" onClick={handleClick} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Creates a component', () => {
    render(
      <Button name="0" onClick={handleClick} />,
    );
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument();
  });
});
