import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import env from 'react-dotenv';
import axios from 'axios';
import { renameKeys } from '../../utils/renameKeys';
export const initialStateFaq = {};

export const getFaq = createAsyncThunk('feedback/getFaq', async () => {
  return axios.get(`${env.NEW_SERVER_URL}/api/content/faq`);
});

export const faqSlice = createSlice({
  name: 'faq',
  initialState: initialStateFaq,
  reducers: {},
  extraReducers: {
    [getFaq.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getFaq.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      console.log('SUCCESS');
    },
    [getFaq.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const faqReducer = faqSlice.reducer;
