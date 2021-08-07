import React from 'react';
import R from '@app/res/R';

import { View, ViewStyle, StyleSheet, Platform } from 'react-native';

const BaseHeader: React.FC<PropsI> = (props) => {
  const {} = props;

  return (
    <>
      <View style={Platform.OS === 'android' ? styles.headerAndroid : styles.header}></View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: R.unit.windowWidth(1),
    height: R.unit.scale(90),
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: R.unit.scale(24),
    backgroundColor: R.color.white,
    marginBottom: R.unit.scale(0.5),
    shadowColor: R.color.black,
    shadowOffset: {
      width: 1,
      height: R.unit.scale(5),
    },
    shadowOpacity: 0.1,
    shadowRadius: R.unit.scale(4),
    elevation: R.unit.scale(4),
  },
  headerAndroid: {
    width: R.unit.windowWidth(1),
    height: R.unit.scale(64),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.color.white,
    marginBottom: R.unit.scale(0.5),
    shadowColor: R.color.black,
    shadowOffset: {
      width: 1,
      height: R.unit.scale(5),
    },
    shadowOpacity: 0.1,
    shadowRadius: R.unit.scale(4),
    elevation: R.unit.scale(4),
  },
});

export interface PropsI {
  title?: string;
  variant?: 'base' | 'home' | 'webview' | 'search';
  disableBack?: boolean;
  disableMenu?: boolean;
  disableSearch?: boolean;
  currentLocation?: any;
  hideEnableLocation?: boolean;

  disableScrollView?: boolean;
  enableRefreshControl?: boolean;
  isLogoutOptionShow?: boolean;
  rootStyles?: ViewStyle;
  bodyStyles?: ViewStyle;
}

export default BaseHeader;
