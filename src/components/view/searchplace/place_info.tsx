import R from '@app/res/R';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '@app/components/common/Text';
import Button from '@app/components/common/Button';

const PlaceInfo: FC<any> = (props) => {
  const { place } = props;
  const time = place.opening_hours?.weekday_text[new Date().getDay() - 1];
  return (
    <View style={style.vwRow}>
      <View style={style.vwPlaceInfo0}>
        <Text variant="font17" fontWeight={'400'}>{`${place.name}`}</Text>
        <Text variant="font17" fontWeight={'500'} color={R.color.black}>{`1.3 km`}</Text>
      </View>
      <Text variant="font13" fontWeight={'500'} gutterTop={10}>{`${place.formatted_address}`}</Text>
      {time && (
        <Text variant="font13" fontWeight={'500'} color={R.color.info} gutterTop={10}>
          {`Open`}
          <Text variant="font13" fontWeight={'500'}>{`  ${time}`}</Text>
        </Text>
      )}
      <View style={style.vwPlaceInfo0}>
        <Button
          width={'48%'}
          variant={'contained'}
          text={R.strings.local_info.Direction}
          backgroundColor={R.color.primary}
          size={'sm'}
          onPress={() => alert('Click direction')}
        />
        <Button
          width={'48%'}
          variant={'outlined'}
          text={R.strings.local_info.Share}
          backgroundColor={R.color.white}
          color={R.color.fontPrimary}
          borderColor={R.color.fontPrimary}
          font={'regular'}
          size={'sm'}
          onPress={() => alert('Click share')}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  vwRow: {
    width: '90%',
    backgroundColor: R.color.white,
    paddingHorizontal: R.unit.scale(10),
    alignSelf: 'center',
    zIndex: 99999,
    position: 'absolute',
    paddingBottom: R.unit.scale(10),
    bottom: R.unit.scale(25),
    borderRadius: R.unit.scale(5),
  },
  vwPlaceInfo0: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: R.unit.scale(10),
    justifyContent: 'space-between',
  },
});

export default PlaceInfo;
