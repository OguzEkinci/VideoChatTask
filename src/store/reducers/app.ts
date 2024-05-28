import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IApp} from '../types/app';

export const appInitialState: IApp = {
  showGlobalIndicator: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    setShowGlobalIndicator: (state, action: PayloadAction<boolean>): void => {
      state.showGlobalIndicator = action.payload;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
