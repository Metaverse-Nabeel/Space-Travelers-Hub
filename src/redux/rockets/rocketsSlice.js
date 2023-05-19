import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

export const FetchRockets = createAsyncThunk('get/rockets', async () => {
  const rockets = await fetch('https://api.spacexdata.com/v3/rockets');
  const { data } = rockets;
  return data.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    rocket_image: rocket.flickr_images,
  }));
});

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
