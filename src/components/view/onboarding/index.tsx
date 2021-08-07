import React, { FC } from 'react';

import R from '@app/res/R';

import { View, StyleSheet, ImageBackground } from 'react-native';
import Text from '@app/components/common/Text';
import IconSVG from '@app/res/images/svgs/IconSVG';

const OnBoardingItem: FC<any> = (props) => {
  const { item } = props;
  return (
    <ImageBackground source={item.image} style={styles.container}>
      <View style={styles.vwTextStyle}>
        <IconSVG />
        <Text
          variant="h3"
          color={R.color.primary}
          fontWeight={'500'}
          gutterTop={50}
        >{`${item.title}`}</Text>
        <Text
          variant="content"
          color={R.color.gray3}
          fontWeight={'400'}
          gutterTop={15}
          style={{ textAlign: 'center' }}
        >{`${item.content}`}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: R.unit.windowWidth(1),
    height: R.unit.windowHeight(1),
    backgroundColor: R.color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vwTextStyle: {
    paddingHorizontal: R.unit.scale(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OnBoardingItem;
