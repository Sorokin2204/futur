import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import env from 'react-dotenv';
export const initialStatePackage = {
  data: undefined,
  selectedPackage: null,
};

export const getPackages = createAsyncThunk('feedback/getPackages', async () => {
  return axios.get(`${env.SERVER_URL}/package`);
});

const packageSelector = (state) => state.data;

export const packageWindowSelectSelector = createSelector(packageSelector, (packages) => packages?.map((packageItem) => ({ label: packageItem.name, value: packageItem.slug, price: packageItem.price })));

export const packageSlice = createSlice({
  name: 'package',
  initialState: initialStatePackage,
  reducers: {
    setActivePackage: (state, action) => {
      state.selectedPackage = action.payload;
    },
  },
  extraReducers: {
    [getPackages.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getPackages.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      console.log('SUCCESS');
    },
    [getPackages.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});
export const { setActivePackage } = packageSlice.actions;
export const packageReducer = packageSlice.reducer;
