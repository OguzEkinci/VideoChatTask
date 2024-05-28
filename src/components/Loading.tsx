import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
  ActivityIndicatorProps,
} from 'react-native';

interface ILoadingProps {
  containerStyle?: StyleProp<ViewStyle>;
  activityIndicatorStyle?: ActivityIndicatorProps;
}

const {width, height} = Dimensions.get('screen');
const Loading = (props: ILoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
