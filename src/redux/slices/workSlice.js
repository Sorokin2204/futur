import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import env from 'react-dotenv';
import axios from 'axios';
import { renameKeys } from '../../utils/renameKeys';
export const initialStateCity = {
  singleData: null,
  singleError: null,
  singleLoading: false,
};

export const getWorks = createAsyncThunk('feedback/getWorks', async () => {
  return axios.get(`${env.SERVER_URL}/api/main/works/`);
});
export const getSingleWork = createAsyncThunk('feedback/getSingleWork', async ({ id }, { rejectWithValue }) => {
  try {
    const data = await axios.get(`${env.SERVER_URL}/api/main/works/${id}`);
    return data;
  } catch (error) {
    return rejectWithValue('Error');
  }
});

export const workSlice = createSlice({
  name: 'work',
  initialState: initialStateCity,
  reducers: {},
  extraReducers: {
    [getWorks.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getWorks.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      console.log('SUCCESS');
    },
    [getWorks.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
    [getSingleWork.pending]: (state) => {
      state.singleLoading = true;
      console.log('LOADING...');
    },
    [getSingleWork.fulfilled]: (state, { payload }) => {
      state.singleLoading = false;
      state.singleData = payload.data;
      console.log('SUCCESS');
    },
    [getSingleWork.rejected]: (state, action) => {
      state.singleLoading = false;
      state.singleError = action.payload;
      console.log('ERROR');
    },
  },
});

export const workReducer = workSlice.reducer;
