import R from '@app/res/R';
import React, { FC } from 'react';
import { View, StyleSheet, Linking, Platform } from 'react-native';

import Text from '@app/components/common/Text';
import IconButton from '@app/components/common/IconButton';
import DirectionSVG from '@app/res/images/svgs/DirectionSVG';
import Rating from '@app/components/common/Rating';

const PlaceDetail: FC<any> = (props) => {
  const { _place, onClickBack } = props;

  const goToLocation = (coordinates) => {
    if (coordinates) {
      const lat = coordinates.latitude;
      const lng = coordinates.longitude;

      const url =
        Platform.OS === 'ios'
          ? `http://maps.apple.com/?ll=`
          : `https://www.google.com/maps/search/?api=1&query`;
      const completeUrl = `${url}=${lat},${lng}`;

      openExternalApp(completeUrl);
    }
  };

  const openExternalApp = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert('Unable to open: ' + url);
      }
    });
  };

  return (
    <View style={styles.vw0}>
      <View style={styles.vw1}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <IconButton
            color={R.color.primary}
            size="xs"
            type={'SimpleLineIcons'}
            name={'arrow-left'}
            onPress={onClickBack}
          />
          <Text variant="font17" fontWeight={'400'}>{`Weymouth Street Hospital`}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <IconButton
            children={<DirectionSVG />}
            onPress={() =>
              goToLocation({
                latitude: 37.785834,
                longitude: -122.406417,
              })
            }
          />
          <IconButton
            color={R.color.primary}
            size="sm"
            type={'AntDesign'}
            name={'sharealt'}
            onPress={() => alert('Click share')}
          />
        </View>
      </View>
      <View style={styles.vw2}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text variant="font13" fontWeight={'300'} gutterTop={3}>{`4.0`}</Text>
          <Rating />
          <Text variant="font13" fontWeight={'300'} gutterTop={3}>{`37 reviews`}</Text>
        </View>
        <Text variant="font13" fontWeight={'300'} gutterTop={3}>{`Private hospital`}</Text>
      </View>
      <View
        style={{
          width: R.unit.windowHeight(1),
          height: R.unit.scale(1),
          backgroundColor: R.color.gray5,
          marginVertical: R.unit.scale(15),
        }}
      />
      <View style={styles.vw3}>
        <View style={{ flexDirection: 'row' }}>
          <IconButton color={R.color.primary} size="sm" type={'Feather'} name={'map-pin'} />
          <Text
            variant="font13"
            fontWeight={'300'}
            numberOfLines={2}
            color={R.color.black}
            style={{
              flex: 2.5,
              paddingLeft: R.unit.scale(10),
              lineHeight: R.unit.scale(18),
            }}
          >
            {`27 Savile Row, Mayfair, London W1S 2EX, United Kingdom`}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: R.unit.scale(5),
            alignItems: 'center',
          }}
        >
          <IconButton color={R.color.primary} size="sm" type={'Feather'} name={'clock'} />
          <Text
            variant="font13"
            fontWeight={'300'}
            numberOfLines={2}
            color={R.color.black}
            style={{
              flex: 2.5,
              paddingLeft: R.unit.scale(10),
              lineHeight: R.unit.scale(18),
            }}
          >
            {`Open: Open 24 hours`}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: R.unit.scale(5),
            alignItems: 'center',
          }}
        >
          <IconButton
            color={R.color.primary}
            size="sm"
            type={'MaterialCommunityIcons'}
            name={'web'}
          />
          <Text
            variant="font13"
            fontWeight={'500'}
            numberOfLines={2}
            color={R.color.info}
            style={{
              flex: 2.5,
              paddingLeft: R.unit.scale(10),
              lineHeight: R.unit.scale(18),
            }}
          >
            {`phoenixhospitalagroup.com`}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: R.unit.scale(5),
            alignItems: 'center',
          }}
        >
          <IconButton color={R.color.primary} size="sm" type={'AntDesign'} name={'phone'} />
          <Text
            variant="font13"
            fontWeight={'500'}
            numberOfLines={2}
            color={R.color.info}
            style={{
              flex: 2.5,
              paddingLeft: R.unit.scale(10),
              lineHeight: R.unit.scale(18),
            }}
          >
            {`+44 20 7935 1200`}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: R.unit.scale(5),
            alignItems: 'center',
          }}
        >
          <IconButton children={<DirectionSVG width={24} height={24} />} />
          <Text
            variant="font13"
            fontWeight={'500'}
            numberOfLines={2}
            color={R.color.black}
            style={{
              flex: 2.5,
              paddingLeft: R.unit.scale(10),
              lineHeight: R.unit.scale(18),
            }}
          >
            {`1.3 km`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vw0: {
    width: R.unit.windowWidth(1),
    height: R.unit.scale(200),
    paddingHorizontal: R.unit.scale(10),
  },
  vw1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vw2: { paddingHorizontal: R.unit.scale(25) },
  vw3: { paddingHorizontal: R.unit.scale(15) },
});

export default PlaceDetail;
