import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { NavigationStackC } from '@app/constants/navigation';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const RootStack = createSwitchNavigator(
  {
    [NavigationStackC.AUTH_STACK]: AuthStack,
    [NavigationStackC.APP_STACK]: AppStack,
  },
  {
    initialRouteName: NavigationStackC.AUTH_STACK,
  },
);
const MainNavigator = createAppContainer(RootStack);
export default MainNavigator;
