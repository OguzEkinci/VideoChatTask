import {NativeStackNavigationOptions} from '@react-navigation/native-stack'
import RouteKey from './RouteKey'
import {HomeNavigator} from './StackNavigation'

export const optionsMatch = (screen: string): NativeStackNavigationOptions => {
  switch (screen) {
    case RouteKey.HomeScreen:
    case RouteKey.HomeStack:
      return {
        headerShown: false,
      }
    default:
      return {}
  }
}
