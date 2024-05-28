import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './NavigationService';
import {HomeNavigator} from './StackNavigation';

const AppNavigation = (): React.ReactElement => {
  return (
    <NavigationContainer ref={navigationRef}>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
