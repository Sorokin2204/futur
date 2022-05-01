import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';
export const initialStateFeedback = {
  formFields: {
    name: '',
    phone: '',
    writeInSocial: false,
  },
};

export const postFeedback = createAsyncThunk('feedback/postFeedback', async (feedbackData) => {
  return axios.post(`${env.SERVER_URL}/feedback`, feedbackData);
});

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: initialStateFeedback,
  reducers: {},
  extraReducers: {
    [postFeedback.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [postFeedback.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      console.log('SUCCESS');
    },
    [postFeedback.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const feedbackReducer = feedbackSlice.reducer;
