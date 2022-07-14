import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';
import { renameKeys } from '../../utils/renameKeys';
export const initialStateHouseType = {};

export const getHouseTypes = createAsyncThunk('feedback/getHouseTypes', async () => {
  return axios.get(`${env.NEW_SERVER_URL}/api/main/house-type/`);
});

export const houseTypeSlice = createSlice({
  name: 'houseType',
  initialState: initialStateHouseType,
  reducers: {},
  extraReducers: {
    [getHouseTypes.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getHouseTypes.fulfilled]: (state, { payload }) => {
      const newKeys = { title: 'name' };
      const renameData = payload.data.map((city) => renameKeys(city, newKeys));
      state.loading = false;
      state.data = renameData;
      console.log('SUCCESS');
    },
    [getHouseTypes.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const houseTypeReducer = houseTypeSlice.reducer;
