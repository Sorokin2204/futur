import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';
import env from 'react-dotenv';

const initialSelectedRoom = {
  name: 'Выберите комнату',
  slug: '',
};
export const initialStateRoom = {
  selectedRoom: initialSelectedRoom,
};

export const getRooms = createAsyncThunk('feedback/getRooms', async () => {
  return axios.get(`${env.SERVER_URL}/room`);
});

export const roomSlice = createSlice({
  name: 'room',
  initialState: initialStateRoom,
  reducers: {
    setActiveRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
    showAddedRoom: (state, action) => {
      const { slug } = state.selectedRoom;
      const findRoom = current(state.data).findIndex((room) => room.slug === slug);
      state.data[findRoom].show = true;
      state.selectedRoom = initialSelectedRoom;
    },

    checkedRoom: (state, action) => {
      const { slug } = action.payload;
      const findRoom = current(state.data).findIndex((room) => room.slug === slug);
      state.data[findRoom].checked = !current(state.data[findRoom]).checked;
    },
  },
  extraReducers: {
    [getRooms.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getRooms.fulfilled]: (state, { payload }) => {
      let roomsDuplicate = [];
      state.loading = false;
      payload.data.map((room) => {
        [...Array(4)].map((val, i) => {
          if (i === 0) {
            roomsDuplicate.push({
              ...room,
              number: i + 1,
              checked: true,
              show: true,
            });
          } else {
            roomsDuplicate.push({
              ...room,
              name: `${room.name} №${i + 1}`,
              slug: `${room.slug}_${i + 1}`,
              parent: room.slug,
              number: i + 1,
              checked: false,
              show: false,
            });
          }
        });
      });

      if (localStorage['rooms']) {
        const localRooms = JSON.parse(localStorage['rooms']);
        roomsDuplicate.map((roomDuplicate) => {
          let isFind = false;
          for (let index = 0; index < localRooms.length; index++) {
            if (localRooms[index].slug === roomDuplicate.slug) {
              roomDuplicate.show = true;
              roomDuplicate.checked = true;
              isFind = true;
            }
          }
          if (!isFind) {
            roomDuplicate.checked = false;
          }
        });
      }
      state.data = roomsDuplicate;
      console.log('SUCCESS');
    },
    [getRooms.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
  },
});
export const { setActiveRoom, showAddedRoom, checkedRoom } = roomSlice.actions;
export const roomReducer = roomSlice.reducer;
