import {IApp, IInitialState} from '../types';

const getAppData = (state: IInitialState): IApp => state.app;

export const getLoadingIndicator = (state: IInitialState) =>
  getAppData(state).showGlobalIndicator;
