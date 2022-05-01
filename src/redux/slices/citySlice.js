import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import env from 'react-dotenv';
import axios from 'axios';
export const initialStateCity = {};
export const getCities = createAsyncThunk('feedback/getCities', async () => {
  return axios.get(`${env.SERVER_URL}/city`);
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
      state.loading = false;
      state.data = payload.data;
      console.log('SUCCESS');
    },
    [getCities.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const cityReducer = citySlice.reducer;
