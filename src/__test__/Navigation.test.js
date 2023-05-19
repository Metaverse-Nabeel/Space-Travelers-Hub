import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';

it('Navigation Component renders correctly', () => {
  const tree = render(
    <Router>
      <Navigation />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
