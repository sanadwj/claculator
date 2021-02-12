import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Home from '../Home';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Router><Home /></Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Creates a component', () => {
    render(<Router><Home /></Router>);
    const element = screen.getByText('Welcome to our page!');
    expect(element).toBeInTheDocument();
  });
});
