import React, {useCallback, useEffect, useRef} from 'react';
import {AppState, Linking, StatusBar, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import RouteKey from './navigation/RouteKey';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Loading from './components/Loading';
import AppNavigation from './navigation/AppNavigator';
import {getLoadingIndicator} from './store/selectors';

function MainLayout() {
  const showGlobalLoading = useSelector(getLoadingIndicator);

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <AppNavigation />
      {showGlobalLoading && <Loading />}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainLayout;
