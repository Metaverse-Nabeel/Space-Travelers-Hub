import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MyProfile from '../components/MyProfile';

it('My Profile Component renders correctly', async () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <MyProfile />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
