import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import env from 'react-dotenv';
import axios from 'axios';
import _ from 'lodash';
export const initialStateTotal = {
  totalRooms: null,
};

const getTotalOptions = async (totalParse, roomKey, rooms) => {
  const roomFind = rooms.find((roomItem) => roomItem.slug === roomKey);
  console.log(roomFind);
  const room = totalParse[roomKey];
  let detailSlugs = [];
  const roomParent = roomFind?.parent ? roomFind?.parent : roomFind.slug;
  Object.keys(room).map((detailKey) => {
    detailSlugs.push(room[detailKey]?.slug);
  });
  detailSlugs = detailSlugs.filter((slug) => slug);
  detailSlugs = detailSlugs.join(',');
  console.log(detailSlugs);
  const data = await axios.get(`${env.SERVER_URL}/api/main/room-total/?room_slug=${roomParent}&option_slug=${detailSlugs}`);
  const dataFilter = data.data.filter((item) => item.options.length !== 0);
  console.log(dataFilter);
  return dataFilter.length !== 0
    ? {
        name: roomFind.name,
        slug: dataFilter[0].slug,
        numberSlug: roomKey,
        options: dataFilter[0].options,
      }
    : null;
};

export const getTotals = createAsyncThunk('total/getTotals', async ({ rooms }) => {
  let totalParse = JSON.parse(localStorage['total']);
  let totalPromises = [];
  Object.keys(totalParse).map((roomKey) => {
    totalPromises.push(getTotalOptions(totalParse, roomKey, rooms));
  });

  const data = await Promise.all(totalPromises);
  return data.filter((item) => item);
});

export const totalSlice = createSlice({
  name: 'total',
  initialState: initialStateTotal,
  reducers: {
    // getTotalRooms: (state, { payload: { rooms } }) => {
    //   let totalParse = JSON.parse(localStorage['total']);
    //   let total = [];
    //   Object.keys(totalParse).map((roomKey) => {
    //     const roomOptionsFind = [];
    //     const roomFind = rooms.find((roomItem) => roomItem.slug === roomKey);
    //     const roomSingleFind = current(state.data).find((roomSingle) => roomSingle.slug === (roomFind.parent ? roomFind.parent : roomFind.slug));
    //     roomSingleFind?.details?.map((detail) => {
    //       detail.options.map((option) => {
    //         if (totalParse[roomKey]) {
    //           let optionFind = Object.values(totalParse[roomKey]).findIndex((totRoom) => totRoom?.slug === option?.slug);
    //           if (optionFind !== -1) {
    //             roomOptionsFind.push(_.pick(option, ['name', 'desc', 'previewImg']));
    //           }
    //         }
    //       });
    //     });
    //     total.push({
    //       name: roomFind.name,
    //       options: roomOptionsFind,
    //     });
    //   });
    //   state.totalRooms = total;
    // },
  },
  extraReducers: {
    [getTotals.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getTotals.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;

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
