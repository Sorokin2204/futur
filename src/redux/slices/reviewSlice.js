import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import env from 'react-dotenv';
import axios from 'axios';
import { renameKeys } from '../../utils/renameKeys';
export const initialStateReview = {};

export const getReviews = createAsyncThunk('feedback/getReviews', async () => {
  return axios.get(`${env.NEW_SERVER_URL}/api/content/review`);
});

export const reviewSlice = createSlice({
  name: 'review',
  initialState: initialStateReview,
  reducers: {},
  extraReducers: {
    [getReviews.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getReviews.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      console.log('SUCCESS');
    },
    [getReviews.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const reviewReducer = reviewSlice.reducer;
