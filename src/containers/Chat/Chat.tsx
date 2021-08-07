import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import R from '@app/res/R';

export interface IProps {
  navigation: any;
}

const ChatContainer: FC<IProps> = () => {
  return <View style={styles.root}></View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: R.color.white,
  },
});

export default ChatContainer;
