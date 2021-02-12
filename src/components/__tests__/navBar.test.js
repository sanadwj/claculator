import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import Navbar from '../NavBar';

describe('NavBAr', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Router><Navbar /></Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
