import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';
export const initialStatePackageType = {};

export const getPackageTypes = createAsyncThunk('feedback/getPackageTypes', async () => {
  return axios.get(`${env.SERVER_URL}/package-type`);
});

export const packageTypeSlice = createSlice({
  name: 'packageType',
  initialState: initialStatePackageType,
  reducers: {},
  extraReducers: {
    [getPackageTypes.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getPackageTypes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      console.log('SUCCESS');
    },
    [getPackageTypes.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const packageTypeReducer = packageTypeSlice.reducer;
