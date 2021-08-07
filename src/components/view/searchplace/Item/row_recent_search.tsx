import R from '@app/res/R';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import styles from '@app/res/style';

import Text from '@app/components/common/Text';
import IconButton from '@app/components/common/IconButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PlaceItem: FC<any> = (props) => {
  const { item, onClickItem } = props;
  return (
    <TouchableOpacity onPress={() => onClickItem(item)}>
      <View style={[styles.ph20, styles.pv10]}>
        <View style={style.vwRow}>
          <IconButton color={R.color.primary} size="xs" type={'Feather'} name={'map-pin'} />
          <Text variant="font17" fontWeight={'400'} color={R.color.black}>{`${item.name}`}</Text>
        </View>
        <Text variant="font12" numberOfLines={1}>{`${item.formatted_address}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  vwRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PlaceItem;
