import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import StarEmptySVG from '@app/res/images/svgs/StarEmptySVG';
import StarFillSVG from '@app/res/images/svgs/StarFillSVG';
import R from '@app/res/R';

export interface PropsI {
  value?: number;
}

const Rating: FC<PropsI> = ({ value = 0 }) => {
  return (
    <View style={styles.vwParent}>
      <StarFillSVG />
      <StarFillSVG />
      <StarFillSVG />
      <StarEmptySVG />
      <StarEmptySVG />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  vwParent: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: R.unit.scale(5) },
});
