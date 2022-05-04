import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import env from 'react-dotenv';
import axios from 'axios';
import _ from 'lodash';
export const initialStateTotal = {
  totalRooms: null,
};
export const getTotals = createAsyncThunk('total/getTotals', async () => {
  return axios.get(`${env.SERVER_URL}/room-single`);
});

export const totalSlice = createSlice({
  name: 'total',
  initialState: initialStateTotal,
  reducers: {
    getTotalRooms: (state, { payload: { rooms } }) => {
      let totalParse = JSON.parse(localStorage['total']);
      let total = [];
      Object.keys(totalParse).map((roomKey) => {
        const roomOptionsFind = [];
        const roomFind = rooms.find((roomItem) => roomItem.slug === roomKey);
        const roomSingleFind = current(state.data).find((roomSingle) => roomSingle.slug === (roomFind.parent ? roomFind.parent : roomFind.slug));
        roomSingleFind.details.map((detail) => {
          detail.options.map((option) => {
            if (totalParse[roomKey]) {
              let optionFind = Object.values(totalParse[roomKey]).findIndex((totRoom) => totRoom?.slug === option?.slug);
              if (optionFind !== -1) {
                roomOptionsFind.push(_.pick(option, ['name', 'desc', 'previewImg']));
              }
            }
          });
        });
        total.push({
          name: roomFind.name,
          options: roomOptionsFind,
        });
      });
      state.totalRooms = total;
    },
  },
  extraReducers: {
    [getTotals.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getTotals.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;

      console.log('SUCCESS');
    },
    [getTotals.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});
export const { getTotalRooms } = totalSlice.actions;
export const totalReducer = totalSlice.reducer;
