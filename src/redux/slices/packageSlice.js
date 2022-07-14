import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import env from 'react-dotenv';
import { renameKeys } from '../../utils/renameKeys';
export const initialStatePackage = {
  data: undefined,
  selectedPackage: null,
};

export const getPackages = createAsyncThunk('feedback/getPackages', async () => {
  return axios.get(`${env.NEW_SERVER_URL}/api/main/package/`);
});

export const getPackagesList = createAsyncThunk('feedback/getPackagesList', async () => {
  return axios.get(`${env.NEW_SERVER_URL}/api/main/package-list/`);
});

const packagesListSelector = (state) => state.dataList;
const packagesSelector = (state) => state.data;

export const packageWindowSelectSelector = createSelector(packagesListSelector, (packages) => packages?.map((packageItem) => ({ label: packageItem.title, value: packageItem.slug, price: packageItem.price })));

export const packagesDefaultOptionsSelector = createSelector(packagesSelector, (packages) =>
  packages?.map((packageItem) => {
    let newDefaultDetails;
    if (packageItem?.default_details.length !== 0) {
      console.log(packageItem?.default_details);
      newDefaultDetails = packageItem?.default_details?.map((detail) => ({
        label: detail.title,
        value: detail.desc,
      }));
    }

    let packageItemRename = renameKeys(packageItem, { title: 'name', type_of_tariff: 'category', preview_image: 'previewImage' });
    packageItemRename = _.omit(packageItemRename, 'default_details');
    return { ...packageItemRename, defaultDetails: newDefaultDetails };
  }),
);

export const packageSlice = createSlice({
  name: 'package',
  initialState: initialStatePackage,
  reducers: {
    setActivePackage: (state, action) => {
      state.selectedPackage = action.payload;
    },
  },
  extraReducers: {
    [getPackages.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getPackages.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      console.log('SUCCESS');
    },
    [getPackages.rejected]: (state) => {
      state.loading = false;
      console.log('ERROR');
    },
    // PACKAGE LIST
    [getPackagesList.pending]: (state) => {
      state.loadingList = true;
      console.log('LOADING...');
    },
    [getPackagesList.fulfilled]: (state, { payload }) => {
      state.loadingList = false;
      state.dataList = payload.data;
      console.log('SUCCESS');
    },
    [getPackagesList.rejected]: (state) => {
      state.loadingList = false;
      console.log('ERROR');
    },
  },
});
export const { setActivePackage } = packageSlice.actions;
export const packageReducer = packageSlice.reducer;
