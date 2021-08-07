import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import axiosInterceptor from '@app/package/axios/axiosInterceptor';
import thunk from 'redux-thunk';

import authReducer from './auth/authSlice';
import locationReducer from './location/locationSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
});

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['auth', 'location'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
axiosInterceptor(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;

export default store;
