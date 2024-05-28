import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes';

export const styles = StyleSheet.create({
  localStream: {
    flex: 1,
    marginVertical: metrics.huge,
  },
  flex: {
    flex: 1,
  },
  remoteControlWithCameraOn: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: metrics.massive + metrics.huge,
  },
  noCamera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '65%',
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.cyan,
    borderRadius: metrics.borderRadius,
    marginRight: metrics.small,
    paddingHorizontal: metrics.small,
    flex: 1,
    color: colors.primary,
  },
  nameInput: {
    borderWidth: 1,
    borderColor: colors.cyan,
    borderRadius: metrics.borderRadius,
    padding: metrics.small,
    color: colors.primary,
    marginHorizontal: metrics.small,
    marginTop: metrics.small,
  },
  button: {
    padding: metrics.small,
    marginTop: metrics.small,
    marginHorizontal: metrics.small,
    borderRadius: metrics.borderRadius,
    backgroundColor: colors.primary,
  },
  buttonTitle: {
    color: colors.yellow,
  },
  buttonDisabled: {
    backgroundColor: colors.cyan,
  },
  noCameraInRoom: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cyan,
    borderWidth: 1,
    borderColor: colors.border,
  },
  borderWidthDisplay: {},
  joinContainer: {
    flexDirection: 'row',
    padding: metrics.small,
  },
  joinButton: {
    padding: metrics.small,
    borderRadius: metrics.borderRadius,
    backgroundColor: colors.primary,
  },
  flexWrap: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  controlContainer: {
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: metrics.xxl,
    left: 0,
    right: 0,
    padding: metrics.xxs,
    borderRadius: metrics.borderRadiusLarge,
  },
  localControl: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: metrics.large,
  },
  remoteControlContainer: {
    position: 'absolute',
    bottom: metrics.massive + metrics.huge,
  },
  spacingBottom: {
    marginBottom: metrics.small,
  },
  noUsersContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noUserText: {
    color: colors.primary,
    textAlign: 'center',
  },
});
