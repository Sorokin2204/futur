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
  console.log({ name: feedbackData.name, phone: feedbackData.phone, write_in_social: feedbackData.writeInSocial });
  return axios.post(`${env.NEW_SERVER_URL}/api/main/feadback/`, { name: feedbackData.name, phone: feedbackData.phone, write_in_social: feedbackData.writeInSocial }).catch((err) => console.log(err.message));
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
      state.data = payload?.data;
      console.log(payload?.data);
      console.log('SUCCESS');
    },
    [postFeedback.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});

export const feedbackReducer = feedbackSlice.reducer;
