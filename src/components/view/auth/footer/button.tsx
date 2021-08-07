import React, { FC } from 'react';
import R from '@app/res/R';
import { View, StyleSheet } from 'react-native';
import IconButton from '@app/components/common/IconButton';
import Text from '@app/components/common/Text';
import NavigationService from '@app/navigation/NavigationService';

interface IProps {
  navigation?: any;
  onPress?: any;
  isLeftVisible?: boolean;
  isRightVisible?: boolean;
  isVisibleResend?: boolean;
}

const FooterButtonComponent: FC<IProps> = (props) => {
  const { isLeftVisible = true, isRightVisible = true, onPress, isVisibleResend= false } = props;
  return (
    <View style={styles.vwArrow}>
      {isLeftVisible ? (
        <IconButton
          color={R.color.gray4}
          size="md"
          type={'Feather'}
          name={'arrow-left'}
          shape={'rounded'}
          onPress={() => NavigationService.goBack()}
          wrapperStyles={styles.iconArrowLeft}
        />
      ) : (
        <View />
      )}

      {isVisibleResend && (
        <View style={[styles.vwResendOTP]}>
          <Text variant="h5" color={R.color.black}>
            {'Resend'}
          </Text>
        </View>
      )}

      {isRightVisible && (
        <IconButton
          color={R.color.white}
          size="md"
          type={'Feather'}
          name={'arrow-right'}
          shape={'rounded'}
          onPress={() => onPress()}
          wrapperStyles={styles.iconArrowRight}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  vwArrow: {
    width: R.unit.windowWidth(1),
    paddingHorizontal: R.unit.scale(23),
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: R.unit.scale(75),
  },
  iconArrowLeft: {
    width: R.unit.scale(56),
    height: R.unit.scale(42),
    borderRadius: R.unit.scale(5),
    backgroundColor: R.color.gray5,
  },
  iconArrowRight: {
    width: R.unit.scale(56),
    height: R.unit.scale(42),
    borderRadius: R.unit.scale(5),
    backgroundColor: R.color.tertiary,
  },
  vwResendOTP: {
    paddingHorizontal: R.unit.scale(25),
    borderRadius: R.unit.scale(5),
    paddingVertical: R.unit.scale(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: R.color.primary,
    borderWidth: R.unit.scale(1),
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
});

export default FooterButtonComponent;
