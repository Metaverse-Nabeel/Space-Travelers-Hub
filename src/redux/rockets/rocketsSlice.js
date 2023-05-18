import { createSlice } from '@reduxjs/toolkit';
import FetchRockets from './fetchRockets';

const initialState = {
  rockets: [],
};
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchRockets.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
        status: false,
      }));
  },
});

export default rocketsSlice.reducer;
