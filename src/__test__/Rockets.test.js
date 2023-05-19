import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/Rockets';

it('Rockets Component renders correctly', async () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Rockets />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
