import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const initialStateModals = {
  modalThank: false,
  modalAddRoom: false,
  modalGoBack: false,
  modalGoBackClearStorage: false,
  modalError: false,
  modalFeedback: false,
  modalThankFeedback: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: initialStateModals,
  reducers: {
    openModalThank: (state) => {
      state.modalThank = true;
    },
    openModalThankFeedback: (state) => {
      state.modalThankFeedback = true;
    },
    openModalAddRoom: (state) => {
      state.modalAddRoom = true;
    },
    openModalGoBack: (state) => {
      state.modalGoBack = true;
    },
    openModalError: (state) => {
      state.modalError = true;
    },
    openModalGoBackClearStorage: (state) => {
      state.modalGoBackClearStorage = true;
    },
    openModalFeedback: (state) => {
      state.modalFeedback = true;
    },
    closeAllModal: (state) => {
      state.modalThank = false;
      state.modalAddRoom = false;
      state.modalGoBack = false;
      state.modalGoBackClearStorage = false;
      state.modalError = false;
      state.modalFeedback = false;
      state.modalThankFeedback = false;
    },
  },
});
export const { openModalThank, closeAllModal, openModalAddRoom, openModalGoBack, openModalGoBackClearStorage, openModalError, openModalFeedback, openModalThankFeedback } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
