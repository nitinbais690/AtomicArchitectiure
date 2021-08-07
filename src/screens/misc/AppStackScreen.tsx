import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { ImageBackground } from 'react-native';
import R from "@app/res/R";
import styles from '@app/res/style'

// service
import NavigationService from "@app/route/NavigationService";
import { AppStackC } from "@app/constants/navigation";


function AppStackScreen() {
  return (
    <View style={{flex:1}}/>
  );
}

export default AppStackScreen;
