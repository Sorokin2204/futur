import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import env from 'react-dotenv';
import axios from 'axios';
import { renameKeys } from '../../utils/renameKeys';
export const initialStateHowToWork = {};

export const getHowToWork = createAsyncThunk('feedback/getHowToWork', async () => {
  return axios.get(`${env.NEW_SERVER_URL}/api/content/work`);
});

export const howToWorkSlice = createSlice({
  name: 'howToWork',
  initialState: initialStateHowToWork,
  reducers: {},
  extraReducers: {
    [getHowToWork.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getHowToWork.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      console.log('SUCCESS');
    },
    [getHowToWork.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const howToWorkReducer = howToWorkSlice.reducer;
