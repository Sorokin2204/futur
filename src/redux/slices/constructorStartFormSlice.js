import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';
export const initialStateConstructorStart = {
  formFields: {
    city: '',
    houseType: '',
  },
};

export const postConstructorStart = createAsyncThunk('constructorStart/postConstructorStart', async (constructorStartData) => {
  return axios.post(`${env.SERVER_URL}/constructor-start`, constructorStartData);
});

export const constructorStartSlice = createSlice({
  name: 'constructorStart',
  initialState: initialStateConstructorStart,
  reducers: {},
  extraReducers: {
    [postConstructorStart.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [postConstructorStart.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      console.log('SUCCESS');
    },
    [postConstructorStart.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const constructorStartReducer = constructorStartSlice.reducer;
