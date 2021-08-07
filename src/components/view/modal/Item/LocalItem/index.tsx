import R from '@app/res/R';
import React, { FC } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Text from '@app/components/common/Text';
import IconButton from '@app/components/common/IconButton';

const LocalDataItem: FC<any> = (props) => {
  const { item, onItemClick } = props;
  return (
    <TouchableOpacity onPress={() => onItemClick(item)}>
      <View style={[styles.item]}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <IconButton color={R.color.primary} size="sm1" type={'Feather'} name={'map-pin'} />
            <Text
              variant="font14"
              fontWeight={'500'}
              numberOfLines={1}
              style={{ marginLeft: R.unit.scale(5) }}
            >
              {`Charing Cross Police Station`}
            </Text>
          </View>
          <IconButton
            color={R.color.primary}
            size="xs"
            type={'SimpleLineIcons'}
            name={'arrow-right'}
            onPress={() => onItemClick(item)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: R.unit.scale(5),
          }}
        >
          <Text
            variant="font14"
            fontWeight={'300'}
            numberOfLines={2}
            color={R.color.black1}
            style={{ flex: 2.5, paddingLeft: R.unit.scale(5), lineHeight: R.unit.scale(18) }}
          >
            {`27 Savile Row, Mayfair, London W1S 2EX, United Kingdom`}
          </Text>
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: R.unit.scale(5),
          }}
        >
          <Text variant="font14" color={R.color.info} fontWeight={'500'}>
            {`+44 20 7183 7764`}
          </Text>
          <Text variant="font14" color={R.color.black1} fontWeight={'500'}>
            {`1 km`}
          </Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    backgroundColor: R.color.white,
    paddingHorizontal: R.unit.scale(20),
    paddingVertical: R.unit.scale(12),
  },
});

export default LocalDataItem;
