import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FetchRockets = createAsyncThunk('get/rockets', async () => {
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  const { data } = rockets;
  return data.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    rocket_images: rocket.flickr_images,
  }));
});

export default FetchRockets;
