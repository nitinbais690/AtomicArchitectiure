import R from '@app/res/R';
import React, { FC } from 'react';
import { View, StyleSheet,  } from 'react-native';
import styles from '@app/res/style';

import Text from '@app/components/common/Text';
import IconButton from '@app/components/common/IconButton';

const PlaceItem: FC<any> = (props) => {
  const { item } = props;
  return (
    <View style={styles.ph10}>
      <View style={style.vwRow}>
        <IconButton color={R.color.primary} size="xs" type={'Feather'} name={'map-pin'} />
        <Text
          variant="font17"
          fontWeight={'400'}
          color={R.color.black}
        >{`${item.structured_formatting.main_text}`}</Text>
      </View>
      <Text variant="font12" numberOfLines={1}>{`${item.description}`}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  vwRow: { flexDirection: 'row', alignItems: 'center', marginLeft: R.unit.scale(-5) },
});

export default PlaceItem;
