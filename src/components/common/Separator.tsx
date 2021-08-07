import React, { FC } from 'react';

import R from '@app/res/R';

import { View, StyleSheet } from 'react-native';

const Separator: FC<any> = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: R.unit.scale(1),
    backgroundColor: R.color.gray7,
  },
});

export default Separator;
