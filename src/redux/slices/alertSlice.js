import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';
export const initialStateAlert = {
  show: false,
  text: null,
  type: null,
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState: initialStateAlert,
  reducers: {
    openAlert: (state, action) => {
      state.show = true;
      state.text = action.payload.text;
      state.type = action.payload.type;
    },
    closeAlert: (state, action) => {
      state.show = false;
    },
  },
});
export const { openAlert, closeAlert } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
