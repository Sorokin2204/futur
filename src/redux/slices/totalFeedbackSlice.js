import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';
export const initialStateTotalFeedback = {
  formFields: {
    name: '',
    phone: '',
    email: '',
    message: '',
    writeInSocial: false,
  },
};

export const postTotalFeedback = createAsyncThunk('totalFeedback/postTotalFeedback', async (totalFeedbackData, { rejectWithValue, fulfillWithValue }) => {
  try {
    const data = await axios.post(`${env.SERVER_URL}/api/main/total/`, totalFeedbackData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const totalFeedbackSlice = createSlice({
  name: 'totalFeedback',
  initialState: initialStateTotalFeedback,
  reducers: {},
  extraReducers: {
    [postTotalFeedback.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [postTotalFeedback.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = true;
      console.log('SUCCESS');
    },
    [postTotalFeedback.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      console.log('ERROR');
    },
  },
});

export const totalFeedbackReducer = totalFeedbackSlice.reducer;
