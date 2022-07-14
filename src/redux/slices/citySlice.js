import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import env from 'react-dotenv';
import axios from 'axios';
import { renameKeys } from '../../utils/renameKeys';
export const initialStateCity = {};

export const getCities = createAsyncThunk('feedback/getCities', async () => {
  console.log(env.NEW_SERVER_URL);
  return axios.get(`${env.NEW_SERVER_URL}/api/main/city/`);
});

export const citySlice = createSlice({
  name: 'city',
  initialState: initialStateCity,
  reducers: {},
  extraReducers: {
    [getCities.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getCities.fulfilled]: (state, { payload }) => {
      const newKeys = { title: 'name' };
      const renameData = payload.data.map((city) => renameKeys(city, newKeys));
      state.loading = false;
      state.data = renameData;
      console.log('SUCCESS');
    },
    [getCities.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const cityReducer = citySlice.reducer;
