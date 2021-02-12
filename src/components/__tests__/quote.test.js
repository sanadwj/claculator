import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import Quote from '../Quote';

describe('Quote', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Router><Quote /></Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
