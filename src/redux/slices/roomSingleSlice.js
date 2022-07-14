import { createSlice, createAsyncThunk, createSelector, current } from '@reduxjs/toolkit';
import env from 'react-dotenv';
import axios from 'axios';
import _ from 'lodash';
import { renameKeys } from '../../utils/renameKeys';
export const initialStateRoomSingle = {
  angle: 0,
  showFurniture: false,
  choiceDetails: {},
  activeDetailPoint: null,
  activePackage: null,
  activeRoom: null,
  fullScreen: false,
  error: false,
  dataDefault: true,
  loadingDefault: false,
};

const groupDetailOptions = (state) => state.data.details;
const defaultDetailOptionSlugs = (state) => state.data.details;

export const groupDetailOptionsSelector = createSelector(groupDetailOptions, (details) => {
  return details?.map((detail) => {
    let mapGroup = new Map();
    detail.options.map((opt) => {
      let existKeyMap = undefined;
      if (mapGroup.size) {
        for (let key of mapGroup.keys()) {
          if (_.isEqual(key, renameKeys(opt.group, { title: 'name' }))) {
            existKeyMap = key;
          }
        }
      }
      if (existKeyMap) {
        console.log(opt);
        mapGroup.set(existKeyMap, [...mapGroup.get(existKeyMap), _.omit(renameKeys(opt, { full_img_on_angels: 'fullImgOnAngels', preview_image: 'previewImg', title: 'name', preview_image: 'previewImg' }), 'group')]);
      } else {
        mapGroup.set(renameKeys(opt.group, { title: 'name' }), [_.omit(renameKeys(opt, { full_img_on_angels: 'fullImgOnAngels', preview_image: 'previewImg', title: 'name', preview_image: 'previewImg' }), 'group')]);
      }
    });
    console.log(mapGroup);
    return { ...renameKeys(detail, { position_on_angles: 'positionOnAngles', title: 'name' }), options: mapGroup };
  });
});

export const setDefaultDetailOptions = (defaultRooms) => {
  let defaultDetails = {};
  Object.values(JSON.parse(localStorage['rooms'])).map((localRoom) => {
    const parentSlug = localRoom.parent ? localRoom.parent : localRoom.slug;
    const findDefaultRoom = defaultRooms.find((defaultRoom) => defaultRoom.slug === parentSlug);
    if (findDefaultRoom) {
      let detailsObject = {};
      findDefaultRoom?.details?.map((detail) => {
        detail.options.map((option) => {
          detailsObject[option.group.slug] = { slug: option.slug, price: option.price };
        });
      });

      defaultDetails[localRoom.slug] = detailsObject;
    }
  });
  return defaultDetails;
};

export const defaultDetailOptionSlugsDetails = createSelector(defaultDetailOptionSlugs, (details) => {
  let firstValueMapSlug = {};
  details.map((detail) => {
    Array.from(detail.options, ([key, value]) => {
      firstValueMapSlug[key.slug] = { slug: value[0].slug, price: value[0].price };
    });
  });

  return firstValueMapSlug;
});
function fixedEncodeURI(str) {
  return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}
export const setActivePackage = createAsyncThunk('roomSingle/setActivePackage', async (tariff) => {
  if (tariff) {
    const roomsFromStorage = [...new Set(Object.values(JSON.parse(localStorage['rooms'])).map((room) => room.parent ?? room.slug))];
    // const roomsParams = roomsFromStorage.map((room, index) => `${index !== 0 ? '&' : ''}` + 'room_slug[]=' + room).join('');
    // console.log(roomsParams);
    const request = await axios.get(`${env.SERVER_URL}/api/main/room-default-options/?room_slug=${roomsFromStorage}&tariff_slug=${tariff.value}`);

    if (request.data.length === 0) throw new Error('Дефолтные детали не найдены');
    return { data: request.data, tariff };
  }
  return null;
});

export const getRoomSingle = createAsyncThunk('roomSingle/getRoomSingle', async (roomSlug) => {
  const request = await axios.get(`${env.SERVER_URL}/api/main/room-single?room_slug=${roomSlug.room}&tariff_slug=${roomSlug.package}`);
  if (request.data.length === 0) throw new Error('Комната не найдена');
  return request;
});

export const roomSingleSlice = createSlice({
  name: 'roomSingle',
  initialState: initialStateRoomSingle,
  reducers: {
    setActiveRoom: (state, action) => {
      state.activeRoom = action.payload;
    },
    selectDetail: (state, action) => {
      let { group, detail } = action.payload;
      state.choiceDetails[state.activeRoom.slug] = { ...current(state.choiceDetails[state.activeRoom.slug]), [group]: detail };
    },
    switchFurniture: (state) => {
      state.showFurniture = !state.showFurniture;
    },
    switchFullScreen: (state, action) => {
      state.fullScreen = !state.fullScreen;
    },
    nextAngle: (state) => {
      if (state.angle !== state.data.imgWithFurnitureOnAngles.length - 1) {
        state.angle++;
      }
    },
    prevAngle: (state) => {
      if (state.angle !== 0) {
        state.angle--;
      }
    },
    changeDetailPoint: (state, action) => {
      state.activeDetailPoint = { slug: action.payload };
    },
    resetRoomSingle: (state) => {
      console.log('reset');
    },
  },
  extraReducers: {
    [getRoomSingle.pending]: (state) => {
      state.loading = true;
      console.log('LOADING...');
    },
    [getRoomSingle.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = renameKeys(payload.data[0], { img_with_furniture_on_angles: 'imgWithFurnitureOnAngles' });
      state.data.details = groupDetailOptionsSelector(state);
      // console.log(defaultDetailOptionSlugsDetails(state));
      // state.choiceDetails = { ...state.choiceDetails, [state.data.slug]: defaultDetailOptionSlugsDetails(state) };
      // console.log(state.choiceDetails);
      console.log('SUCCESS');
    },
    [getRoomSingle.rejected]: (state) => {
      state.loading = false;
      state.error = true;
      console.log('ERROR');
    },
    [setActivePackage.pending]: (state) => {
      state.loadingNewPackage = true;
      console.log('LOADING...');
    },
    [setActivePackage.fulfilled]: (state, action) => {
      state.loadingNewPackage = false;
      if (action.payload) {
        state.choiceDetails = localStorage['total'] && action.payload.tariff.value === localStorage['package'] ? JSON.parse(localStorage['total']) : setDefaultDetailOptions(action.payload.data);
        state.activePackage = action.payload.tariff;
        // console.log(action.payload.data);
      }
      // state.dataDefault = action.payload.data;
      // console.log(state.dataDefault);
      console.log('SUCCESS');
    },
    [setActivePackage.rejected]: (state) => {
      state.loadingNewPackage = false;
      state.error = true;
      console.log('ERROR...');
    },
  },
});
export const { selectDetail, removeDetail, switchFurniture, prevAngle, nextAngle, changeDetailPoint, switchFullScreen, resetRoomSingle, setActiveRoom } = roomSingleSlice.actions;
export const roomSingleReducer = roomSingleSlice.reducer;
