import { createStackNavigator } from 'react-navigation-stack';
import { AppStackC } from '@app/constants/navigation';

import BottomTabNavigator from './BottomTabNavigator';
import SearchPlaceScreen from '@app/screens/SeachPlace';
import { Platform } from 'react-native';

const AppStack = createStackNavigator(
  {
    [AppStackC.APP_BOTTOM_STACK_SCREEN]: BottomTabNavigator,
    [AppStackC.SEARCH_PLACE_SCREEN]: SearchPlaceScreen,
  },
  {
    initialRouteName: AppStackC.APP_BOTTOM_STACK_SCREEN,
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'card' : 'modal',
  },
);

export default AppStack;
