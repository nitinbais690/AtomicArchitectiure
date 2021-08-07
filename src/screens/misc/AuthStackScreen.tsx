import React, { FC, useEffect } from 'react';

import { AuthStackC, NavigationStackC } from '@app/constants/navigation';
import { useSelector } from 'react-redux';
import { ImageBackground } from 'react-native';
import R from '@app/res/R';
import styles from '@app/res/style';
import NavigationService from '@app/navigation/NavigationService';

const AuthStackScreen: FC<any> = (props) => {
  const auth = useSelector((state: any) => state.auth);

  // component mount
  useEffect(() => {
    let nextScreen = NavigationStackC.APP_STACK;
    if (!auth.isAuthenticated) {
      nextScreen = AuthStackC.ON_BOARDINF_SCREEN;
    }
    NavigationService.stackFirst(nextScreen);
  }, []);

  return <ImageBackground source={R.image.bgSplash()} style={styles.container} />;
};

export default AuthStackScreen;
