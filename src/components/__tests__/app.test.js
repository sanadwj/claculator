import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App', () => {
  it('renders', () => {
    const tree = renderer.create(
      <Router><App /></Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
