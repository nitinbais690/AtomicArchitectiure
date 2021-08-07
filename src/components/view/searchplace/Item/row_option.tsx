import R from '@app/res/R';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import styles from '@app/res/style';
import OptionItem from './option';

const Options: FC<any> = (props) => {
  return (
    <View style={style.vwRow}>
      <OptionItem
        title={R.strings.local_info.Home}
        icon={'home'}
        onClickOption={() => props.onClickOption(0)}
      />
      <OptionItem
        title={R.strings.local_info.Work}
        icon={'work'}
        onClickOption={() => props.onClickOption(1)}
      />
      <OptionItem
        title={R.strings.local_info.Add_place}
        icon={'location'}
        onClickOption={() => props.onClickOption(2)}
      />
    </View>
  );
};

const style = StyleSheet.create({
  vwRow: {
    flexDirection: 'row',
    width: R.unit.windowWidth(1),
    backgroundColor: R.color.white,
    paddingHorizontal: R.unit.scale(10),
    paddingVertical: R.unit.scale(10),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomColor: R.color.gray5,
    borderBottomWidth: R.unit.scale(1),
  },
});

export default Options;
