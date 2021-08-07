import R from '@app/res/R';
import React, { FC } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '@app/res/style';
import Text from '@app/components/common/Text';
import IconButton from '@app/components/common/IconButton';
import HomeSVG from '@app/res/images/svgs/HomeSVG';
import BriefcaseSVG from '@app/res/images/svgs/BriefcaseSVG';
import LocationSVG from '@app/res/images/svgs/LocationSVG';

const Options: FC<any> = (props) => {
  const { title, icon, onClickOption } = props;

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => onClickOption()}>
      <View style={style.vwOption}>
        <IconButton
          children={
            icon === 'home' ? <HomeSVG /> : icon === 'work' ? <BriefcaseSVG /> : <LocationSVG />
          }
        />
        <Text
          variant="font13"
          fontWeight={'500'}
          color={R.color.black}
          style={styles.ml5}
        >{`${title}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  vwOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Options;
