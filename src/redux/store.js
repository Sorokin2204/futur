import { configureStore } from '@reduxjs/toolkit';
import { alertReducer } from './slices/alertSlice';
import { cityReducer } from './slices/citySlice';
import { constructorStartReducer } from './slices/constructorStartFormSlice';
import { feedbackReducer } from './slices/feedbackSlice';
import { houseTypeReducer } from './slices/houseTypeSlice';
import { modalsReducer } from './slices/modalsSlice';
import { packageReducer } from './slices/packageSlice';
import { packageTypeReducer } from './slices/packageTypeSlice';
import { roomReducer } from './slices/roomSlice';

const rootStore = configureStore({
  reducer: {
    feedback: feedbackReducer,
    modals: modalsReducer,
    city: cityReducer,
    houseType: houseTypeReducer,
    constructorStart: constructorStartReducer,
    room: roomReducer,
    package: packageReducer,
    packageType: packageTypeReducer,
    alert: alertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default rootStore;
