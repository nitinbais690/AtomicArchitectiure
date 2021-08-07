import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import R from '@app/res/R';

export interface IProps {
  navigation: any;
}

const SOSContainer: FC<IProps> = () => {
  return <View style={styles.root}></View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: R.color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SOSContainer;
