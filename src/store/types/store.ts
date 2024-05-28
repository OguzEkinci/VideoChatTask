// Import Type
import {IApp} from './app';
import {ILoading} from './loading';

export interface IInitialState {
  // State
  app: IApp;
  loading: ILoading;
}

export interface IError {
  code: number;
  message: string;
}
