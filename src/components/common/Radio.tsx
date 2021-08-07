import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import R from '@app/res/R';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from '@app/components/common/Text';

export interface PropsI {
  offColor?: string;
  onColor?: string;
  onValueChange: any;
  value: boolean;
  textValue?: string;
}

const RadioButton: FC<PropsI> = ({ onValueChange, value = false, textValue }) => {
  return (
    <View style={styles.vwParent}>
      <TouchableOpacity onPress={() => onValueChange()}>
        <View style={[styles.vwCircle, value ? styles.vwActive : styles.vwInActive]}>
          <View
            style={[styles.vwCircleChild, value ? styles.vwActiveChild : styles.vwInactiveChild]}
          />
        </View>
      </TouchableOpacity>
      {textValue ? (
        <Text
          variant="font12"
          font={'regular'}
          color={R.color.fontPrimary}
          style={{ marginLeft: R.unit.scale(5) }}
        >
          {textValue}
        </Text>
      ) : null}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  vwParent: { flexDirection: 'row', alignItems: 'center' },
  vwCircle: {
    width: R.unit.scale(20),
    height: R.unit.scale(20),
    borderRadius: R.unit.scale(10),
    borderWidth: R.unit.scale(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  vwActive: { borderColor: R.color.black, backgroundColor: R.color.white },
  vwInActive: { borderColor: R.color.gray6, backgroundColor: R.color.white },

  vwCircleChild: {
    width: R.unit.scale(12),
    height: R.unit.scale(12),
    borderRadius: R.unit.scale(6),
    borderWidth: R.unit.scale(1.5),
  },
  vwActiveChild: { borderColor: R.color.black, backgroundColor: R.color.black },
  vwInactiveChild: { borderColor: R.color.white, backgroundColor: R.color.white },
});
