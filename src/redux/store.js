import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { alertReducer } from './slices/alertSlice';
import { cityReducer } from './slices/citySlice';
import { constructorStartReducer } from './slices/constructorStartFormSlice';
import { feedbackReducer } from './slices/feedbackSlice';
import { houseTypeReducer } from './slices/houseTypeSlice';
import { modalsReducer } from './slices/modalsSlice';
import { packageReducer } from './slices/packageSlice';
import { packageTypeReducer } from './slices/packageTypeSlice';
import { roomSingleReducer } from './slices/roomSingleSlice';
import { roomReducer } from './slices/roomSlice';
import { totalFeedbackReducer } from './slices/totalFeedbackSlice';
import { totalReducer } from './slices/totalSlice';

const combinedReducer = combineReducers({
  feedback: feedbackReducer,
  modals: modalsReducer,
  city: cityReducer,
  houseType: houseTypeReducer,
  constructorStart: constructorStartReducer,
  room: roomReducer,
  package: packageReducer,
  packageType: packageTypeReducer,
  alert: alertReducer,
  roomSingle: roomSingleReducer,
  total: totalReducer,
  totalFeedback: totalFeedbackReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'roomSingle/resetRoomSingle') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default rootStore;
