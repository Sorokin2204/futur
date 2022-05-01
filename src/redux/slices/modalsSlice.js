import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const initialStateModals = {
  modalThank: false,
  modalAddRoom: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: initialStateModals,
  reducers: {
    openModalThank: (state) => {
      state.modalThank = true;
    },
    openModalAddRoom: (state) => {
      state.modalAddRoom = true;
    },
    closeAllModal: (state) => {
      state.modalThank = false;
      state.modalAddRoom = false;
    },
  },
});
export const { openModalThank, closeAllModal, openModalAddRoom } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
