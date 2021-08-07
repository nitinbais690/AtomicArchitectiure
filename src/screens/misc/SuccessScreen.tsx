import React, { FC, useEffect } from 'react';

import { AppStackC } from '@app/constants/navigation';
import { View } from 'react-native';
import styles from '@app/res/style';
import NavigationService from '@app/navigation/NavigationService';
import SuccessAnimation from '@app/components/view/auth/SuccessAnimated';

const SuccessScreen: FC<any> = (props) => {
  // component mount
  useEffect(() => {
    setTimeout(async () => {
      NavigationService.stackFirst(AppStackC.APP_BOTTOM_STACK_SCREEN);
    }, 2000);
  }, []);

  return (
    <View style={[styles.containerPrimaryBG, { alignItems: 'center', justifyContent: 'center' }]}>
      <SuccessAnimation />
    </View>
  );
};

export default SuccessScreen;
