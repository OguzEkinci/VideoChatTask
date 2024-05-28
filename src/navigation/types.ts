import {ParamListBase} from '@react-navigation/native';
import RouteKey from './RouteKey';

/** Type */
type HomeScreenParams = {
  userId: '';
};

export interface AppStackParamList extends ParamListBase {
  /** Params */
  [RouteKey.HomeScreen]: HomeScreenParams;
}

export type IItemTabBar = {
  route: string;
  title: string;
};
