import {IActionDispatch} from './action';

export interface IApp {
  showGlobalIndicator?: boolean;
}

export interface IAppActions {
  setShowGlobalIndicator: IActionDispatch;
}
