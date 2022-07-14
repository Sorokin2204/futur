import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';
import { renameKeys } from '../../utils/renameKeys';
export const initialStatePackageType = {};

export const getPackageTypes = createAsyncThunk('feedback/getPackageTypes', async () => {
  return axios.get(`${env.NEW_SERVER_URL}/api/main/package-type/`);
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
      const newKeys = { title: 'name' };
      const renameData = payload.data.map((city) => renameKeys(city, newKeys));
      state.loading = false;
      state.data = renameData;
      console.log('SUCCESS');
    },
    [getPackageTypes.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const packageTypeReducer = packageTypeSlice.reducer;
