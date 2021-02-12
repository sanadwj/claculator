import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import ButtonPanel from '../ButtonPanel';

describe('ButtonPanel', () => {
  const handleClick = () => ({ total: '', next: '', operation: '' });
  it('renders correctly', () => {
    const tree = renderer.create(
      <ButtonPanel onClick={handleClick} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Creates a component', () => {
    render(<ButtonPanel onClick={handleClick} />);
    const element = screen.getByText('9');
    expect(element).toBeInTheDocument();
  });
});
