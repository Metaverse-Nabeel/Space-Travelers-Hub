import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

const API_URL = 'https://api.spacexdata.com/v3/rockets';

export const FetchRockets = createAsyncThunk('get/rockets', async () => {
  const response = await fetch(API_URL);
  const rockets = await response.json();
  return rockets.map((rocket) => ({
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
