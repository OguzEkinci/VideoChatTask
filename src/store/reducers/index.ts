import {combineReducers} from '@reduxjs/toolkit';

// Reducer Imports
import AsyncStorage from '@react-native-async-storage/async-storage';
import INITIAL_STATE from '../initialState';
import {appInitialState} from './app';
import app from './app';

// Reducer Export
export * from './app';

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: Object.keys(INITIAL_STATE),
};

export const InitialState = {
  app: appInitialState,
};

export default combineReducers({
  // Reducers
  app,
});
