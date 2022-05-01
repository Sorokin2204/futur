import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';
export const initialStateHouseType = {};

export const getHouseTypes = createAsyncThunk('feedback/getHouseTypes', async () => {
  return axios.get(`${env.SERVER_URL}/house-type`);
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
      state.loading = false;
      state.data = payload.data;
      console.log('SUCCESS');
    },
    [getHouseTypes.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const houseTypeReducer = houseTypeSlice.reducer;
