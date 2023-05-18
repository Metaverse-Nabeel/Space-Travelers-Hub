import { createSlice } from '@reduxjs/toolkit';
import FetchRockets from './fetchRockets';

const initialState = {
  rockets: [],
};
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketBooking: (state, { payload }) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) return { ...rocket, reserved: !rocket.reserved };
        return rocket;
      });
      return { ...state, rockets };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(FetchRockets.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
        status: false,
      }));
  },
});

export const { rocketBooking } = rocketsSlice.actions;
export default rocketsSlice.reducer;
