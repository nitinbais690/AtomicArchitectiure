/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ToastAndroid, Platform } from 'react-native';
//import Toast from 'react-native-simple-toast';
import R from '@app/res/R';

const show = (message: string, type: 'info' | 'error' | 'success' | 'warning' = 'success') => {
  let bgColor = R.color.danger;
  if (type == 'success') {
    bgColor = R.color.success;
  }
  if (type == 'error') {
    bgColor = R.color.danger;
  }
  if (type == 'info') {
    bgColor = R.color.info;
  }
  if (type == 'warning') {
    bgColor = R.color.warning;
  }

  if (Platform.OS == 'android') {
    // Add a Toast on screen.
    ToastAndroid.show(message, 1000);
  } else {
    //Toast.show(message, Toast.LONG);
  }
};

export default {
  show,
};
