import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsSlice from './rockets/rocketsSlice';

const store = configureStore(
  {
    reducer: {
      rockets: rocketsSlice,
    },
  },
  applyMiddleware(thunk),
);

export default store;
