import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RouteKey from './RouteKey';
import {AppStackParamList} from './types';
import {optionsMatch} from './ScreenService';
import { HomeScreen } from '../screens/Home';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RouteKey.HomeScreen}
      component={HomeScreen}
      options={optionsMatch(RouteKey.HomeScreen)}
    />
  </Stack.Navigator>
);
